import { Dimensions } from 'react-native';

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
};

export const COLORS = {
  background: '#FFFFFF',
  card: '#F8F8F8',
  textPrimary: '#111111',
  textSecondary: '#666666',
  primary: '#2563EB',
  border: '#E5E7EB',
};
export const FONT_FAMILY = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  bold: 'Inter-Bold',
};

export const TEXT = {
  h1: {
    fontSize: 24,
    fontFamily: FONT_FAMILY.bold,
  },
  h2: {
    fontSize: 20,
    fontFamily: FONT_FAMILY.bold,
  },
  h3: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.medium,
  },

  title: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.medium,
  },

  body: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.regular,
  },

  caption: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: '#666666',
  },

  button: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.medium,
  },
};

export const DIMENSIONS = Dimensions.get('window');
