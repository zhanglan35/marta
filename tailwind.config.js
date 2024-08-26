/* eslint-disable global-require */
import colors from 'tailwindcss/colors';

// 深色模式下使用
colors.dark = {
  50: '#F4F4F6',
  100: '#E6E7EB',
  200: '#CCD0D6',
  300: '#B3B8C2',
  400: '#99A0AD',
  500: '#808999',
  600: '#687282',
  700: '#545C69',
  800: '#3F454F',
  900: '#2C3037',
  950: '#282A2F'
}

// 浅色模式下使用
colors.light = {
  50: '#f3f4f6',
  100: '#e8e9ef',
  200: '#d7dbe0',
  300: '#b3bbc6',
  400: '#8a96a6',
  500: '#6c798b',
  600: '#566173',
  700: '#474f5d',
  800: '#3d444f',
  900: '#363b44',
  950: '#24272d'
}

colors.primary = {
  50: "#DBDBFF",
  100: "#B8B8FF",
  200: "#7575FF",
  300: "#2E2EFF",
  400: "#0000E6",
  500: "#0000A0",
  600: "#000080",
  700: "#000061",
  800: "#000042",
  900: "#00001F",
  950: "#00000F"
}

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,postcss}'],
  plugins: [import('@tailwindcss/typography')],
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      background: '#f5f7fa',
      'border-color': '#e2e2e2',
      dark: colors.dark,
      primary: colors.blue,
      white: colors.white,
      black: colors.black,
      zinc: colors.zinc,
      danger: colors.red,
      warning: colors.amber,
      success: colors.emerald,
      link: colors.blue,
      info: colors.sky,
      gray: colors.gray,
      light: colors.light,
      primary: colors.primary,
    },
    extend: {
      borderColor: () => ({
        DEFAULT: 'inherit'
      })
    },
    variants: {
      extend: {
        width: ['hover', 'focus'],
        backgroundColor: ['active'],
        opacity: ['disabled'],
        cursor: ['disabled'],
        borderWidth: ['first', 'last'],
        borderColor: ['first', 'last', 'active'],
        borderRadius: ['first', 'last'],
        textColor: ['active']
      }
    },
    screens: {
      sm: '769px'
    }
  }
}
