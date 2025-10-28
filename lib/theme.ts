export const theme = {
  colors: {
    primary: {
      50: '#f8fafc',   // slate lightest
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',  // slate main
      600: '#475569',
      700: '#334155',
      800: '#1e293b',  // slate dark
      900: '#0f172a',  // slate darkest
    },
    citron: {
      50: '#f9f9e8',   // citron lightest (warmer, more visible)
      100: '#f3f3cc',
      200: '#e8e89f',
      300: '#dada77',
      400: '#d0d05c',
      500: '#c5c544',  // citron main (darker, more vibrant)
      600: '#a8a838',
      700: '#88882d',
      800: '#686822',
      900: '#4a4a18',  // citron darkest
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
      primary: '#0f172a',      // slate-900
      secondary: '#475569',    // slate-600
      tertiary: '#64748b',     // slate-500
      white: '#ffffff',
    },
    // Border colors
    border: {
      light: '#e2e8f0',        // slate-200
      medium: '#cbd5e1',       // slate-300
    }
  },
  // Spacing - SINGLE SOURCE OF TRUTH for all section padding
  spacing: {
    sectionPaddingX: '15rem',  // 192px - change this ONE value to update ALL sections
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

