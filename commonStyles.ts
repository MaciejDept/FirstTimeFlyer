import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

// ── Design tokens ────────────────────────────────────────────────────────────
export const Colors = {
  background:   '#F7F8FA',
  surface:      '#FFFFFF',
  surfaceAlt:   '#F0F2F5',
  primary:      '#1E3370',
  primaryDark:  '#1E3370',
  textPrimary:  '#111827',
  textSecondary:'#6B7280',
  textMuted:    '#9CA3AF',
  border:       '#E5E7EB',
  disabled:     '#E5E7EB',
  disabledText: '#9CA3AF',
  white:        '#FFFFFF',
  overlay:      'rgba(247, 248, 250, 0.92)',
};

interface Styles {
  // Detail screen styles
  container: ViewStyle;
  scrollContainer: ViewStyle;
  scrollContent: ViewStyle;
  title: TextStyle;
  listContainer: ViewStyle;
  boldText: TextStyle;
  paragraphText: TextStyle;
  image: ImageStyle;
  scrollHint: ViewStyle;
  buttonContainer: ViewStyle;
  navButton: ViewStyle;
  backButton: ViewStyle;
  checklistButton: ViewStyle;
  navButtonText: TextStyle;
  navButtonTextDark: TextStyle;

  // Hub screen styles
  hubContainer: ViewStyle;
  hubScrollContent: ViewStyle;
  hubTitle: TextStyle;
  hubImage: ImageStyle;
  hubListContainer: ViewStyle;
  hubBulletContainer: ViewStyle;
  hubBullet: ViewStyle;
  hubBulletText: TextStyle;
  hubButtonContainer: ViewStyle;
  hubNavButton: ViewStyle;
  hubBackButton: ViewStyle;
  hubChecklistButton: ViewStyle;
  hubNextButton: ViewStyle;
  hubNavButtonText: TextStyle;
  hubNavButtonTextDark: TextStyle;
  hubScrollHint: ViewStyle;
}

const commonStyles: Styles = StyleSheet.create({
  // ── Detail screen styles ──────────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 48,
    paddingHorizontal: 24,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 28,
    color: Colors.textPrimary,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  listContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 24,
    width: '100%',
  },
  boldText: {
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 8,
    marginTop: 8,
    color: Colors.primary,
    letterSpacing: 0.2,
  },
  paragraphText: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 20,
    lineHeight: 26,
    textAlign: 'left',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 8,
    alignSelf: 'center',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 110,
    backgroundColor: 'rgba(247, 248, 250, 0.92)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: insetBottom + 14,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(247, 248, 250, 0.88)',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  navButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  checklistButton: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  navButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },
  navButtonTextDark: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    letterSpacing: 0.3,
  },

  // ── Hub screen styles (PreTrip / FlightDay / Landing / Intro) ────────────
  hubContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  hubScrollContent: {
    paddingBottom: 140,
  },
  hubTitle: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 16,
    marginBottom: 32,
    color: Colors.textPrimary,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  hubImage: {
    width: 220,
    height: 220,
    marginBottom: 12,
    alignSelf: 'center',
    marginTop: 60,
  },
  hubListContainer: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  hubBulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: Colors.surface,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  hubBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginRight: 14,
    flexShrink: 0,
  },
  hubBulletText: {
    fontSize: 16,
    color: Colors.textPrimary,
    flexShrink: 1,
    fontWeight: '500',
    lineHeight: 22,
  },
  hubScrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 110,
    backgroundColor: 'rgba(247, 248, 250, 0.92)',
  },
  hubButtonContainer: {
    position: 'absolute',
    bottom: insetBottom + 14,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(247, 248, 250, 0.88)',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  hubNavButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  hubBackButton: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  hubChecklistButton: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    flex: 2,
  },
  hubNextButton: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  hubNavButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },
  hubNavButtonTextDark: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    letterSpacing: 0.3,
  },
});

export default commonStyles;
