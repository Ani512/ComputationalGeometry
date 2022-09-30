import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        sizeSmall: {
          padding: '6px 16px',
        },
        sizeMedium: {
          padding: '8px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        textSizeSmall: {
          padding: '7px 12px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px',
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
        subheaderTypographyProps: {
          variant: 'body2',
        },
      },
      styleOverrides: {
        root: {
          padding: '32px 24px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#E6E8F0',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#F3F4F6',
          '.MuiTableCell-root': {
            color: '#374151',
          },
          borderBottom: 'none',
          '& .MuiTableCell-root': {
            borderBottom: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
  },
  palette: {
    alpha25: 'rgba(0,0,0,.05)',
    alpha50: 'rgba(102,102,102,.5)',
    alpha25: 'rgba(0,0,0,.05)',
    alpha50: 'rgba(102,102,102,.5)',
    gray0: 'rgba(0,0,0,1)',
    gray20: 'rgba(17,17,17,1)',
    gray40: 'rgba(42,42,42,1)',
    gray60: 'rgba(73,73,73,1)',
    gray80: 'rgba(102,102,102,1)',
    gray100: 'rgba(115,115,115,1)',
    gray200: 'rgba(170,170,170,1)',
    gray300: 'rgba(212,212,212,1)',
    gray400: 'rgba(233,233,233,1)',
    gray500: 'rgba(240,240,240,1)',
    gray600: 'rgba(247,247,247,1)',
    gray700: 'rgba(255,255,255,1)',
    blue40: 'rgba(10,50,88,1)',
    blue60: 'rgba(15,75,132,1)',
    blue80: 'rgba(19,102,179,1)',
    blue100: 'rgba(22,109,252,1)',
    blue200: 'rgba(87,132,197,1)',
    blue300: 'rgba(132,164,214,1)',
    blue400: 'rgba(172,197,231,1)',
    blue500: 'rgba(211,231,250,1)',
    blue600: 'rgba(231,240,254,1)',
    red40: 'rgba(99,16,14,1)',
    red60: 'rgba(142,31,27,1)',
    red80: 'rgba(190,44,37,1)',
    red100: 'rgba(234,0,23,1)',
    red200: 'rgba(211,95,79,1)',
    red300: 'rgba(229,138,124,1)',
    red400: 'rgba(242,180,171,1)',
    red500: 'rgba(249,221,219,1)',
    red600: 'rgba(253,231,231,1)',
    pink40: 'rgba(105,11,44,1)',
    pink60: 'rgba(149,25,64,1)',
    pink80: 'rgba(195,39,85,1)',
    pink100: 'rgba(255,79,131,1)',
    pink200: 'rgba(213,94,119,1)',
    pink300: 'rgba(228,138,155,1)',
    pink400: 'rgba(239,180,191,1)',
    pink500: 'rgba(249,222,231,1)',
    pink600: 'rgba(254,234,240,1)',
    purple40: 'rgba(93,18,84,1)',
    purple60: 'rgba(136,27,121,1)',
    purple80: 'rgba(182,35,161,1)',
    purple100: 'rgba(209,56,191,1)',
    purple200: 'rgba(201,92,182,1)',
    purple300: 'rgba(217,137,201,1)',
    purple400: 'rgba(234,179,223,1)',
    purple500: 'rgba(248,221,244,1)',
    purple600: 'rgba(250,238,249,1)',
    teal40: 'rgba(11,57,64,1)',
    teal60: 'rgba(15,84,95,1)',
    teal80: 'rgba(15,113,128,1)',
    teal100: 'rgba(3,175,202,1)',
    teal200: 'rgba(74,142,155,1)',
    teal300: 'rgba(118,172,182,1)',
    teal400: 'rgba(159,203,211,1)',
    teal500: 'rgba(199,234,239,1)',
    teal600: 'rgba(234,251,254,1)',
    orange40: 'rgba(118,53,1,1)',
    orange60: 'rgba(166,74,0,1)',
    orange80: 'rgba(216,97,0,1)',
    orange100: 'rgba(243,117,14,1)',
    orange200: 'rgba(230,130,61,1)',
    orange300: 'rgba(241,162,106,1)',
    orange400: 'rgba(249,194,150,1)',
    orange500: 'rgba(251,225,195,1)',
    orange600: 'rgba(255,239,224,1)',
    green40: 'rgba(40,81,21,1)',
    green60: 'rgba(56,113,30,1)',
    green80: 'rgba(73,147,39,1)',
    green100: 'rgba(54,167,92,1)',
    green200: 'rgba(110,169,81,1)',
    green300: 'rgba(145,192,120,1)',
    green400: 'rgba(178,214,160,1)',
    green500: 'rgba(213,237,202,1)',
    green600: 'rgba(238,249,234,1)',
    gold40: 'rgba(109,69,8,1)',
    gold60: 'rgba(158,97,5,1)',
    gold80: 'rgba(194,136,47,1)',
    gold100: 'rgba(229,160,55,1)',
    gold200: 'rgba(211,158,76,1)',
    gold300: 'rgba(222,181,126,1)',
    gold400: 'rgba(233,203,164,1)',
    gold500: 'rgba(243,228,205,1)',
    gold600: 'rgba(250,240,226,1)',
    yellow100: 'rgba(255,236,68,1)',
    yellow600: 'rgba(253,249,216,1)',
    mustard40: 'rgba(100,72,1,1)',
    mustard60: 'rgba(145,104,1,1)',
    mustard80: 'rgba(193,139,0,1)',
    mustard100: 'rgba(226,163,31,1)',
    mustard200: 'rgba(217,158,32,1)',
    mustard300: 'rgba(235,179,71,1)',
    mustard400: 'rgba(247,202,111,1)',
    mustard500: 'rgba(254,227,156,1)',
    mustard600: 'rgba(251,241,221,1)',
    primary: { main: 'rgba(17,17,17,1)' },
    secondary: { main: 'rgba(255,255,255,1)' },
    cta: 'rgba(22,109,252,1)',
    disabled: 'rgba(0,0,0,.5)',
    accessible: 'rgba(102,102,102,1)',
    subtle: 'rgba(212,212,212,1)',
    faint: 'rgba(233,233,233,1)',
    error: { main: 'rgba(234,0,23,1)' },
    success: { main: 'rgba(54,167,92,1)' },
    warning: { main: 'rgba(243,117,14,1)' },
    signal: 'rgba(87,132,197,1)',
    onPrimary: 'rgba(255,255,255,1)',
    onSecondary: 'rgba(17,17,17,1)',
    onCta: 'rgba(255,255,255,1)',
    onDisabled: 'rgba(102,102,102,.5)',
    onMessage: 'rgba(255,255,255,1)',
    main: '#ffffff',
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
    '0px 1px 2px rgba(100, 116, 139, 0.12)',
    '0px 1px 4px rgba(100, 116, 139, 0.12)',
    '0px 1px 5px rgba(100, 116, 139, 0.12)',
    '0px 1px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 6px rgba(100, 116, 139, 0.12)',
    '0px 3px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
    '0px 5px 12px rgba(100, 116, 139, 0.12)',
    '0px 5px 14px rgba(100, 116, 139, 0.12)',
    '0px 5px 15px rgba(100, 116, 139, 0.12)',
    '0px 6px 15px rgba(100, 116, 139, 0.12)',
    '0px 7px 15px rgba(100, 116, 139, 0.12)',
    '0px 8px 15px rgba(100, 116, 139, 0.12)',
    '0px 9px 15px rgba(100, 116, 139, 0.12)',
    '0px 10px 15px rgba(100, 116, 139, 0.12)',
    '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
    '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
  ],
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.375,
    },
  },
});
