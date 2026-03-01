import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translations } from './translations';
import type { LanguageCode, TranslationKeys } from './translations/en';

const STORAGE_KEY = '@simpleflyapp_language';
const DEFAULT_LANGUAGE: LanguageCode = 'en';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => Promise<void>;
  t: <S extends keyof TranslationKeys>(section: S, key: keyof TranslationKeys[S]) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        if (stored && stored in translations) {
          setLanguageState(stored as LanguageCode);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const setLanguage = useCallback(async (lang: LanguageCode) => {
    setLanguageState(lang);
    await AsyncStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const t = useCallback(
    <S extends keyof TranslationKeys>(section: S, key: keyof TranslationKeys[S]): string => {
      const sectionData =
        (translations[language] as any)?.[section] ??
        (translations[DEFAULT_LANGUAGE] as any)[section];
      return (sectionData as any)[key] ?? String(key);
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
