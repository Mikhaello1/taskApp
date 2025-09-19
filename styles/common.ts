import { BORDER_RADIUS, COLORS, DESIGN_TOKENS, FONT_SIZE, FONT_WEIGHT, SHADOWS, SPACING } from "@/constants/styles";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    
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
        padding: SPACING.P4,
    },

    card: {
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: BORDER_RADIUS.ROUNDED_LG,
        padding: SPACING.P6,
        margin: SPACING.P4,
        ...SHADOWS.CARD,
        borderWidth: 1,
        borderColor: COLORS.GRAY_200,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: SPACING.P4,
        paddingVertical: SPACING.P3,
        backgroundColor: COLORS.WHITE,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GRAY_200,
        ...SHADOWS.SM,
    },
    headerTitle: {
        fontSize: FONT_SIZE.TEXT_XL,
        fontWeight: FONT_WEIGHT.BOLD,
        color: COLORS.TEXT_PRIMARY,
        letterSpacing: DESIGN_TOKENS.LETTER_SPACING.TIGHT,
    },
    headerActions: {
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.P2,
    },
    headerButton: {
        padding: SPACING.P2,
        borderRadius: BORDER_RADIUS.ROUNDED,
        backgroundColor: COLORS.GRAY_50,
    },

    listContainer: {
        padding: SPACING.P4,
        flexGrow: 1,
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.WHITE,
        borderRadius: BORDER_RADIUS.ROUNDED_LG,
        padding: SPACING.P4,
        marginBottom: SPACING.P3,
        ...SHADOWS.CARD,
        borderWidth: 1,
        borderColor: COLORS.GRAY_200,
    },

    textTitle: {
        fontSize: FONT_SIZE.TEXT_BASE,
        fontWeight: FONT_WEIGHT.SEMI_BOLD,
        color: COLORS.TEXT_PRIMARY,
        marginBottom: SPACING.P1,
        lineHeight: DESIGN_TOKENS.LINE_HEIGHT.TIGHT * FONT_SIZE.TEXT_BASE,
    },
    textSubtitle: {
        fontSize: FONT_SIZE.TEXT_SM,
        color: COLORS.TEXT_SECONDARY,
        marginBottom: SPACING.P2,
        lineHeight: DESIGN_TOKENS.LINE_HEIGHT.NORMAL * FONT_SIZE.TEXT_SM,
    },
    textBody: {
        fontSize: FONT_SIZE.TEXT_BASE,
        color: COLORS.TEXT_PRIMARY,
        lineHeight: DESIGN_TOKENS.LINE_HEIGHT.NORMAL * FONT_SIZE.TEXT_BASE,
    },
    textCaption: {
        fontSize: FONT_SIZE.TEXT_SM,
        color: COLORS.TEXT_SECONDARY,
        lineHeight: DESIGN_TOKENS.LINE_HEIGHT.NORMAL * FONT_SIZE.TEXT_SM,
    },

    button: {
        borderRadius: BORDER_RADIUS.ROUNDED_LG,
        paddingVertical: SPACING.P3,
        paddingHorizontal: SPACING.P4,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: SPACING.P2,
    },
    buttonPrimary: {
        backgroundColor: COLORS.PRIMARY,
        ...SHADOWS.SM,
    },
    buttonText: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE.TEXT_BASE,
        fontWeight: FONT_WEIGHT.MEDIUM,
        letterSpacing: DESIGN_TOKENS.LETTER_SPACING.TIGHT,
    },
    statusButtonMargin: {
        marginHorizontal: SPACING.P1,
    },

    input: {
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderColor: COLORS.GRAY_300,
        borderRadius: BORDER_RADIUS.ROUNDED_LG,
        paddingVertical: SPACING.P3,
        paddingHorizontal: SPACING.P4,
        fontSize: FONT_SIZE.TEXT_BASE,
        color: COLORS.TEXT_PRIMARY,
        ...SHADOWS.SM,
    },
    inputFocused: {
        borderColor: COLORS.PRIMARY,
        ...SHADOWS.MD,
    },
    inputError: {
        borderColor: COLORS.ERROR,
        backgroundColor: COLORS.PRIMARY_50,
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: COLORS.MODAL_BACKGROUND,
        justifyContent: "center",
        alignItems: "center",
        padding: SPACING.P4,
    },
    modalContent: {
        backgroundColor: COLORS.WHITE,
        borderRadius: BORDER_RADIUS.ROUNDED_2XL,
        padding: SPACING.P6,
        width: "100%",
        maxWidth: 400,
        ...SHADOWS.MODAL,
    },
    modalTitle: {
        fontSize: FONT_SIZE.TEXT_LG,
        fontWeight: FONT_WEIGHT.BOLD,
        marginBottom: SPACING.P4,
        color: COLORS.TEXT_PRIMARY,
        textAlign: "center",
    },

    emptyState: {
        alignItems: "center",
        justifyContent: "center",
        padding: SPACING.P12,
    },
    emptyStateText: {
        fontSize: FONT_SIZE.TEXT_LG,
        fontWeight: FONT_WEIGHT.SEMI_BOLD,
        color: COLORS.TEXT_LIGHT,
        marginTop: SPACING.P4,
        marginBottom: SPACING.P2,
        textAlign: "center",
    },
    emptyStateSubtext: {
        fontSize: FONT_SIZE.TEXT_SM,
        color: COLORS.TEXT_LIGHT,
        textAlign: "center",
        lineHeight: DESIGN_TOKENS.LINE_HEIGHT.RELAXED * FONT_SIZE.TEXT_SM,
    },

    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.P1,
    },
    statusIndicator: {
        width: 8,
        height: 8,
        borderRadius: BORDER_RADIUS.CIRCLE,
    },
    statusBadge: {
        paddingHorizontal: SPACING.P2,
        paddingVertical: SPACING.P1,
        borderRadius: BORDER_RADIUS.ROUNDED_2XL,
        alignSelf: "flex-start",
    },
    statusText: {
        color: COLORS.WHITE,
        fontWeight: FONT_WEIGHT.MEDIUM,
        fontSize: FONT_SIZE.TEXT_XS,
        letterSpacing: DESIGN_TOKENS.LETTER_SPACING.WIDE,
    },

    section: {
        marginBottom: SPACING.P6,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.TEXT_BASE,
        fontWeight: FONT_WEIGHT.SEMI_BOLD,
        color: COLORS.TEXT_SECONDARY,
        marginBottom: SPACING.P3,
        letterSpacing: DESIGN_TOKENS.LETTER_SPACING.TIGHT,
    },

    flex1: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    spaceBetween: {
        justifyContent: "space-between",
    },
    gapSm: {
        gap: SPACING.P2,
    },
    gapMd: {
        gap: SPACING.P4,
    },
    gapLg: {
        gap: SPACING.P6,
    },

    form: {
        padding: SPACING.P4,
    },
    inputGroup: {
        marginBottom: SPACING.P5,
    },
    textArea: {
        minHeight: 100,
        textAlignVertical: "top" as const,
        lineHeight: DESIGN_TOKENS.LINE_HEIGHT.RELAXED * FONT_SIZE.TEXT_BASE,
    },
    label: {
        fontSize: FONT_SIZE.TEXT_BASE,
        fontWeight: FONT_WEIGHT.MEDIUM,
        marginBottom: SPACING.P2,
        color: COLORS.TEXT_PRIMARY,
        letterSpacing: DESIGN_TOKENS.LETTER_SPACING.TIGHT,
    },
    errorText: {
        color: COLORS.ERROR,
        fontSize: FONT_SIZE.TEXT_SM,
        marginTop: SPACING.P1,
        fontWeight: FONT_WEIGHT.MEDIUM,
    },
});
