const colors = require('tailwindcss/colors')

const selfCustomColors = {
  brand: {
    DEFAULT: '#55bb8a',
  },
  black: {
    DEFAULT: '#1D1D1F',
  },
  silver: {
    DEFAULT: '#888888',
  },
  silverwhile: {
    DEFAULT: '#F9F9FB',
  },
  greywhile: {
    DEFAULT: '#F4F8FF',
  },
  silvergrey: {
    DEFAULT: '#D0D3D9',
  },
  grey: {
    DEFAULT: '#86868b',
  },
  silverblack: {
    DEFAULT: '#00000004',
  },
  greyblack: {
    DEFAULT: '#00000065',
  },
  darkgrey: {
    DEFAULT: '#e8e8e8',
  },
  blackgrey: {
    DEFAULT: '#3D3D3D',
  },
  blue: {
    DEFAULT: '#007AFF',
  },
  warn: {
    DEFAULT: '#f59e0b',
  },
  link: {
    DEFAULT: '#0ea5e9',
  },
  mark: {
    DEFAULT: '#ff4582',
  },
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: { ...colors, ...selfCustomColors },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1440px',
      xl: '1920px',
      '2xl': '2560px',
      tablet: { min: '320px', max: '767px' },
      laptop: { min: '768px', max: '1439px' },
      desktop: { min: '1440px' },
    },
    extend: {
      aspectRatio: {
        '192/82': '192 / 82',
        '192/108': '1920 / 1080',
      },
      boxShadow: {
        lg: '0px 0px 10px 0px rgba(0, 0, 0, 0.09);',
      },
      width: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
      }),
      height: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
      }),
      spacing: {
        '1/2': '2px',
        1: '4px',
        '3/2': '6px',
        2: '8px',
        '5/2': '10px',
        3: '12px',
        '7/2': '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        72: '288px',
        80: '320px',
        96: '384px',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      lineHeight: {
        DEFAULT: '12px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
      },
      borderRadius: {
        none: '0',
        '': '1px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      fontSize: {
        xm: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '60px' }],
        '6xl': ['60px', { lineHeight: '60px' }],
        '7xl': ['72px', { lineHeight: '60px' }],
        '8xl': ['96px', { lineHeight: '60px' }],
        '9xl': ['128px', { lineHeight: '60px' }],
      },
    },
  },
  variants: {},
  plugins: [],
}
