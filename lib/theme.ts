export const theme = {
  colors: {
    primary: {
      50: '#f5f6f7',   // navy lightest (almost white with blue tint)
      100: '#e8eaed',
      200: '#d1d5db',
      300: '#b4b9c2',
      400: '#8a92a0',
      500: '#5a6475',  // navy main
      600: '#454d5e',
      700: '#363d4d',
      800: '#2f353f',  // navy dark
      900: '#2B2C35',  // ink navy darkest
    },
    citron: {
      50: '#e8edf4',   // navy accent lightest
      100: '#d1d9e6',
      200: '#a3b3cd',
      300: '#7589ab',
      400: '#5a6f8f',
      500: '#3d5170',  // navy accent main
      600: '#2f4059',
      700: '#253142',
      800: '#1d2632',
      900: '#161c24',  // navy accent darkest
    },
    accent: {
      50: '#fef3c7',   // warm amber
      100: '#fde68a',
      500: '#f59e0b',  // amber accent
      600: '#d97706',
    },
    // Background colors for sections
    background: {
      // SINGLE universal background for ALL sections
      universal: '#ffffff',
      // Cards/boxes background (easily modifiable - change to any color)
      card: '#ffffff',
    },
    // Text colors
    text: {
      primary: '#2B2C35',      // ink navy darkest
      secondary: '#454d5e',    // navy-600
      tertiary: '#5a6475',     // navy-500
      white: '#ffffff',
    },
    // Border colors
    border: {
      light: '#e8eaed',        // navy-100
      medium: '#d1d5db',       // navy-200
    }
  },
  // Shadow - solid colored shadow like photo
  shadow: {
    offset: {
      x: '6px',
      y: '6px',
    },
    color: '#000000',  // black - solid visible shadow
    opacity: 0.8,
  }
}

