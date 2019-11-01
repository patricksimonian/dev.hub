import configTheme from '../../config/theme/index.json';

const SPACING_FACTOR = 4;
const FONT_SIZE_FACTOR = 4;

/**
 * returns an object of spacing factors in the theme
 * @param {Number} spacingFactor the spacing factor
 * @param {Number} maxMultiple amount of multiples
 * @returns {Array} ['2px', '4px', '8px' ] etc
 */
const getSpacingFactors = (spacingFactor, maxMultiple = 20, unit = 'px') => {
  const spacingFactors = [];

  for (let i = 1; i <= maxMultiple; i++) {
    spacingFactors.push(i * spacingFactor + unit);
  }
  return spacingFactors;
};

// emotion breakpoint helpers

// this is an enum of all the material ui breakpoint values
// the reason we are using emotion to handle material breakpoint values
// is because emotions api for styled components is friendlier and more fluid
// it allows for natural css language to be used instead of javascript objects
export const BREAKPOINTS_KEYS = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
};

export const BREAKPOINT_VALUES = {
  [BREAKPOINTS_KEYS.XS]: 10,
  [BREAKPOINTS_KEYS.SM]: 600,
  [BREAKPOINTS_KEYS.MD]: 960,
  [BREAKPOINTS_KEYS.LG]: 1280,
  [BREAKPOINTS_KEYS.XL]: 1920,
};

/**
 * builds a media query string based on a value and media type
 * @param {Number} value the amount in pixels
 * @param {String} mediaType the media type one of [screen, print, etc]. Defaults to 'screen'
 *
 * @returns {String} eg: mediaQuery(200); => '@media screen and (min-width: 200px)'
 */
export const mediaQuery = (value, unit = 'px', mediaType = 'screen') =>
  `@media ${mediaType} and (min-width: ${value}${unit})`;

export const BREAKPOINTS = {
  [BREAKPOINTS_KEYS.XS]: mediaQuery(BREAKPOINT_VALUES[BREAKPOINTS_KEYS.XS]),
  [BREAKPOINTS_KEYS.SM]: mediaQuery(BREAKPOINT_VALUES[BREAKPOINTS_KEYS.SM]),
  [BREAKPOINTS_KEYS.MD]: mediaQuery(BREAKPOINT_VALUES[BREAKPOINTS_KEYS.MD]),
  [BREAKPOINTS_KEYS.LG]: mediaQuery(BREAKPOINT_VALUES[BREAKPOINTS_KEYS.LG]),
  [BREAKPOINTS_KEYS.XL]: mediaQuery(BREAKPOINT_VALUES[BREAKPOINTS_KEYS.XL]),
};

export const CUSTOM_BREAKPOINTS = {
  '480': mediaQuery(480),
  '768': mediaQuery(768),
  '800': mediaQuery(800),
  '1060': mediaQuery(1060),
};

export const SPACING = getSpacingFactors(SPACING_FACTOR, 30);
export const FONT_SIZES = getSpacingFactors(FONT_SIZE_FACTOR, 20);

export const COLORS = {
  ...configTheme.colors,
  ...Object.keys(configTheme.objects).reduce((colors, obj) => {
    colors[obj] = configTheme.objects[obj].color;
    return colors;
  }, {}),
  darkgrey: '#555555',
  lightgrey: '#e5e5e5',
  midgrey: '#979797',
  grey: '#b9b9b9',
  offwhite: '#f8f8f8',
  white: '#ffffff',
  transparent: 'transparent',
};
console.log(COLORS)
export const Z_SPACING = getSpacingFactors(100, 10, '');

export const Z_SPACES = {
  modal: Z_SPACING[3],
  header: Z_SPACING[1],
  footer: Z_SPACING[1],
  backdrop: Z_SPACING[2],
};

export default {
  breakpoints: Object.keys(BREAKPOINT_VALUES).map(k => BREAKPOINT_VALUES[k]),
  mediaQueries: {
    ...BREAKPOINTS,
    ...CUSTOM_BREAKPOINTS,
  },
  colors: {
    ...COLORS,
  },
  zIndices: Z_SPACING, // arbitery z index
  zSpaces: Z_SPACES,
  fontSizes: FONT_SIZES,
  space: [0].concat(SPACING),
  radii: [0].concat(getSpacingFactors(2, 10, 'px')),
  fonts: ['TextaNarrow'],
  buttons: {
    default: {
      borderRadius: '10px',
    },
    primary: {
      backgroundColor: COLORS.blue,
      color: COLORS.white,
    },
    ghost: {
      backgroundColor: COLORS.transparent,
      color: COLORS.blue,
      border: 'none',
      outline: 'none',
    },
  },
};
