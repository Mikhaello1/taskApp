export const COLORS = {
  // Primary colors
  PRIMARY: '#4CAF50',
  PRIMARY_DARK: '#388E3C',
  PRIMARY_LIGHT: '#C8E6C9',
  
  // Status colors
  PENDING: '#FFA500',
  IN_PROGRESS: '#1E90FF',
  COMPLETED: '#32CD32',
  CANCELLED: '#FF4500',
  DEFAULT: '#A9A9A9',
  
  // Neutral colors
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY_LIGHT: '#f5f5f5',
  GRAY_MEDIUM: '#DDD',
  GRAY_DARK: '#666',
  GRAY_DARKER: '#333',
  GRAY_DISABLED: '#CCC',
  
  // Semantic colors
  ERROR: '#FF4500',
  SUCCESS: '#32CD32',
  WARNING: '#FFA500',
  INFO: '#1E90FF',
  
  // Backgrounds
  BACKGROUND: '#f5f5f5',
  CARD_BACKGROUND: '#FFFFFF',
  MODAL_BACKGROUND: 'rgba(0, 0, 0, 0.5)',
  
  // Text colors
  TEXT_PRIMARY: '#333',
  TEXT_SECONDARY: '#666',
  TEXT_LIGHT: '#999',
  TEXT_DISABLED: '#CCC',
};

export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 20,
  XL: 24,
  XXL: 32,
  XXXL: 40,
};

export const BORDER_RADIUS = {
  SM: 4,
  MD: 8,
  LG: 12,
  XL: 16,
  CIRCLE: 50,
};

export const FONT_SIZE = {
  XS: 12,
  SM: 14,
  MD: 16,
  LG: 18,
  XL: 20,
  XXL: 22,
  XXXL: 24,
};

export const FONT_WEIGHT = {
  LIGHT: '300' as const,
  REGULAR: '400' as const,
  MEDIUM: '500' as const,
  SEMI_BOLD: '600' as const,
  BOLD: 'bold' as const,
  EXTRA_BOLD: '800' as const,
};

export const SHADOWS = {
  SM: {
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  MD: {
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  LG: {
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
};

export const ICON_SIZE = {
  SM: 20,
  MD: 24,
  LG: 32,
  XL: 48,
  XXL: 64,
};