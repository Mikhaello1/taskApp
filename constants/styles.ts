export const COLORS = {
    
    PRIMARY: "#2563EB",
    PRIMARY_DARK: "#1D4ED8",
    PRIMARY_LIGHT: "#DBEAFE",
    PRIMARY_50: "#EFF6FF",
    PRIMARY_100: "#DBEAFE",
    PRIMARY_200: "#BFDBFE",
    PRIMARY_300: "#93C5FD",
    PRIMARY_400: "#60A5FA",
    PRIMARY_500: "#3B82F6",
    PRIMARY_600: "#2563EB",
    PRIMARY_700: "#1D4ED8",
    PRIMARY_800: "#1E40AF",
    PRIMARY_900: "#1E3A8A",

    PENDING: "#F59E0B",
    IN_PROGRESS: "#3B82F6",
    COMPLETED: "#10B981",
    CANCELLED: "#EF4444",
    DEFAULT: "#6B7280", 

    WHITE: "#FFFFFF",
    BLACK: "#111827",
    GRAY_50: "#F9FAFB",
    GRAY_100: "#F3F4F6",
    GRAY_200: "#E5E7EB",
    GRAY_300: "#D1D5DB",
    GRAY_400: "#9CA3AF",
    GRAY_500: "#6B7280",
    GRAY_600: "#4B5563",
    GRAY_700: "#374151",
    GRAY_800: "#1F2937",
    GRAY_900: "#111827",

    GRAY_LIGHT: "#F3F4F6",
    GRAY_MEDIUM: "#D1D5DB",
    GRAY_DARK: "#4B5563",
    GRAY_DARKER: "#1F2937",
    GRAY_DISABLED: "#9CA3AF",

    ERROR: "#EF4444", 
    SUCCESS: "#10B981",
    WARNING: "#F59E0B",
    INFO: "#3B82F6", 

    BACKGROUND: "#F9FAFB",
    CARD_BACKGROUND: "#FFFFFF",
    MODAL_BACKGROUND: "rgba(17, 24, 39, 0.5)",

    TEXT_PRIMARY: "#111827",
    TEXT_SECONDARY: "#4B5563",
    TEXT_LIGHT: "#6B7280", 
    TEXT_DISABLED: "#9CA3AF", 

    ACCENT: "#8B5CF6", 
    ACCENT_LIGHT: "#DDD6FE", 
};

export const SPACING = {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 20,
    XL: 24,
    XXL: 32,
    XXXL: 40,

    PX: 1,
    P0: 0,
    P1: 4,
    P2: 8,
    P3: 12,
    P4: 16,
    P5: 20,
    P6: 24,
    P8: 32,
    P10: 40,
    P12: 48,
    P16: 64,
    P20: 80,
    P24: 96,
};

export const BORDER_RADIUS = {
    NONE: 0,
    SM: 4,
    MD: 8,
    LG: 12,
    XL: 16,
    XXL: 20,
    XXXL: 24,
    CIRCLE: 50,
    FULL: 9999,

    ROUNDED: 6,
    ROUNDED_MD: 8,
    ROUNDED_LG: 12,
    ROUNDED_XL: 16,
    ROUNDED_2XL: 20,
    ROUNDED_3XL: 24,
};

export const FONT_SIZE = {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 20,
    XXL: 22,
    XXXL: 24,
    
    TEXT_XS: 12,
    TEXT_SM: 14,
    TEXT_BASE: 16,
    TEXT_LG: 18,
    TEXT_XL: 20,
    TEXT_2XL: 24,
    TEXT_3XL: 30,
    TEXT_4XL: 36,
    TEXT_5XL: 48,
    TEXT_6XL: 60,
};

export const FONT_WEIGHT = {
    THIN: "100" as const,
    EXTRA_LIGHT: "200" as const,
    LIGHT: "300" as const,
    REGULAR: "400" as const,
    MEDIUM: "500" as const,
    SEMI_BOLD: "600" as const,
    BOLD: "700" as const,
    EXTRA_BOLD: "800" as const,
    BLACK: "900" as const,
};

export const SHADOWS = {
    NONE: {
        shadowColor: "transparent",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    SM: {
        shadowColor: COLORS.GRAY_900,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    MD: {
        shadowColor: COLORS.GRAY_900,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    LG: {
        shadowColor: COLORS.GRAY_900,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 5,
    },
    XL: {
        shadowColor: COLORS.GRAY_900,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 25,
        elevation: 8,
    },
    
    CARD: {
        shadowColor: COLORS.GRAY_900,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    MODAL: {
        shadowColor: COLORS.GRAY_900,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    },
    FLOATING: {
        shadowColor: COLORS.PRIMARY,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
};

export const ICON_SIZE = {
    XS: 16,
    SM: 20,
    MD: 24,
    LG: 32,
    XL: 48,
    XXL: 64,
    XXXL: 96,
};


export const DESIGN_TOKENS = {
    
    ANIMATION: {
        FAST: 150,
        NORMAL: 300,
        SLOW: 500,
    },
    
    Z_INDEX: {
        DROPDOWN: 1000,
        STICKY: 1020,
        FIXED: 1030,
        MODAL_BACKDROP: 1040,
        MODAL: 1050,
        POPOVER: 1060,
        TOOLTIP: 1070,
    },
    
    BREAKPOINTS: {
        SM: 640,
        MD: 768,
        LG: 1024,
        XL: 1280,
        XXL: 1536,
    },
    
    LINE_HEIGHT: {
        NONE: 1,
        TIGHT: 1.25,
        SNUG: 1.375,
        NORMAL: 1.5,
        RELAXED: 1.625,
        LOOSE: 2,
    },
    
    LETTER_SPACING: {
        TIGHTER: -0.05,
        TIGHT: -0.025,
        NORMAL: 0,
        WIDE: 0.025,
        WIDER: 0.05,
        WIDEST: 0.1,
    },
};
