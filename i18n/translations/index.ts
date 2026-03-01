import { en } from './en';
import { pl } from './pl';
import { es } from './es';
import { pt } from './pt';
import { de } from './de';
import { ja } from './ja';
import { ru } from './ru';
import type { LanguageCode } from './en';

export const translations: Record<LanguageCode, Record<string, Record<string, string>>> = {
  en,
  pl,
  es,
  pt,
  de,
  ja,
  ru,
};
