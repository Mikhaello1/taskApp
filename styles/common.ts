import {
    BORDER_RADIUS,
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    SHADOWS,
    SPACING
} from '@/constants/styles';
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: SPACING.MD,
  },

  // Card styles
  card: {
    backgroundColor: COLORS.CARD_BACKGROUND,
    borderRadius: BORDER_RADIUS.LG,
    padding: SPACING.LG,
    margin: SPACING.MD,
    ...SHADOWS.MD,
  },

  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.MD,
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_MEDIUM,
    ...SHADOWS.MD,
  },
  headerTitle: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: SPACING.XS,
  },

  // List styles
  listContainer: {
    padding: SPACING.MD,
    flexGrow: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: BORDER_RADIUS.MD,
    padding: SPACING.MD,
    marginBottom: SPACING.SM,
    ...SHADOWS.SM,
  },

  // Text styles
  textTitle: {
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: SPACING.XS,
  },
  textSubtitle: {
    fontSize: FONT_SIZE.SM,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: SPACING.SM,
  },
  textBody: {
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_PRIMARY,
    lineHeight: 24,
  },
  textCaption: {
    fontSize: FONT_SIZE.SM,
    color: COLORS.TEXT_SECONDARY,
  },

  // Button styles
  button: {
    borderRadius: BORDER_RADIUS.MD,
    padding: SPACING.MD,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: COLORS.PRIMARY,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
  },

  // Input styles
  input: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.GRAY_MEDIUM,
    borderRadius: BORDER_RADIUS.MD,
    padding: SPACING.MD,
    fontSize: FONT_SIZE.MD,
  },
  inputError: {
    borderColor: COLORS.ERROR,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.MODAL_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.WHITE,
    borderRadius: BORDER_RADIUS.LG,
    padding: SPACING.LG,
    width: '80%',
  },
  modalTitle: {
    fontSize: FONT_SIZE.LG,
    fontWeight: FONT_WEIGHT.BOLD,
    marginBottom: SPACING.MD,
    color: COLORS.TEXT_PRIMARY,
  },

  // Empty state styles
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.XXXL,
  },
  emptyStateText: {
    fontSize: FONT_SIZE.LG,
    fontWeight: FONT_WEIGHT.BOLD,
    color: COLORS.TEXT_LIGHT,
    marginTop: SPACING.MD,
    marginBottom: SPACING.XS,
  },
  emptyStateSubtext: {
    fontSize: FONT_SIZE.SM,
    color: COLORS.TEXT_LIGHT,
    textAlign: 'center',
  },

  // Status styles
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: BORDER_RADIUS.CIRCLE,
    marginRight: SPACING.XS,
  },
  statusBadge: {
    paddingHorizontal: SPACING.SM,
    paddingVertical: SPACING.XS,
    borderRadius: BORDER_RADIUS.XL,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: COLORS.WHITE,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.SM,
  },

  // Section styles
  section: {
    marginBottom: SPACING.XL,
  },
  sectionTitle: {
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: SPACING.SM,
  },

  // Utility styles
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  gapSm: {
    gap: SPACING.SM,
  },
  gapMd: {
    gap: SPACING.MD,
  },
  gapLg: {
    gap: SPACING.LG,
  },

  form: {
    padding: SPACING.MD,
  },
  inputGroup: {
    marginBottom: SPACING.LG,
  },
   textArea: {
    minHeight: 100,
    textAlignVertical: 'top' as const,
  },
  label: {
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    marginBottom: SPACING.SM,
    color: COLORS.TEXT_PRIMARY,
  },
  errorText: {
    color: COLORS.ERROR,
    fontSize: FONT_SIZE.SM,
    marginTop: SPACING.XS,
  },
});