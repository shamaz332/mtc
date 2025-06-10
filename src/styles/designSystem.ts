// Typography
export const typography = {
  fonts: {
    helvetica: 'font-helvetica',
    roboto: 'font-roboto',
  },
  sizes: {
    xs: 'text-xs', // 13px
    sm: 'text-sm', // 16px
    base: 'text-base', // 18px
    lg: 'text-lg', // 24px
    xl: 'text-xl', // 32px
    '2xl': 'text-2xl', // 40px
    '3xl': 'text-3xl', // 52px
  },
  weights: {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  },
  tracking: {
    wide: 'tracking-[3px]',
  },
};

// Colors
export const colors = {
  text: {
    white: 'text-white',
    white80: 'text-white/80',
    white50: 'text-white/50',
    gold: 'text-[#D4B254]',
    dark: 'text-[#222222]',
  },
  bg: {
    white: 'bg-white',
    dark: 'bg-[#222222]',
    gold: 'bg-[#D4B254]',
  },
  border: {
    white: 'border-white',
    white30: 'border-white/30',
    gray: 'border-gray-400',
  },
};

// Layout
export const layout = {
  container: 'max-w-7xl mx-auto',
  section: 'w-full px-4 md:px-8 lg:px-16',
  flex: {
    row: 'flex flex-row',
    col: 'flex flex-col',
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
  },
  spacing: {
    section: 'py-16',
    content: 'mb-16',
    small: 'mb-8',
    tiny: 'mb-4',
  },
};

// Components
export const components = {
  button: {
    primary: 'bg-[#D4B254] text-white px-8 py-4 font-helvetica text-lg uppercase tracking-[3px] hover:bg-[#c4a244] transition-colors',
    secondary: 'border-2 border-white text-white px-8 py-4 font-helvetica text-lg uppercase tracking-[3px] hover:bg-white hover:text-[#222222] transition-colors',
  },
  link: {
    nav: 'font-roboto text-xs font-normal uppercase text-white/80 hover:text-[#D4B254] transition-colors',
  },
  divider: {
    horizontal: 'w-full h-[1px] bg-white opacity-30',
    short: 'flex-grow h-px bg-white opacity-30',
  },
  socialIcon: 'bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors',
};

// Common class combinations
export const common = {
  sectionTitle: `${typography.fonts.helvetica} ${typography.sizes.lg} ${typography.weights.bold} uppercase ${typography.tracking.wide} ${colors.text.gold}`,
  navLink: `${typography.fonts.roboto} ${typography.sizes.xs} ${typography.weights.normal} uppercase ${colors.text.white80} hover:${colors.text.gold} transition-colors`,
  copyright: `${typography.fonts.roboto} ${typography.sizes.xs} ${typography.weights.normal} ${colors.text.white50}`,
}; 