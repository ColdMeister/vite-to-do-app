import { createTheme } from '@mui/material/styles';
//import { orange } from '@mui/material/colors';
import { Localization, enUS } from '@mui/material/locale';
import Config from '@configs/Environments';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger?: string;
    };
    enUS?: Localization;
  }

  interface PaletteColorOptions {
    main?: string;
    // tutorial?: string;
    // interactive?: string;
  }

//   interface PaletteColor {
//     tutorial?: string;
//     interactive?: string;
//   }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    enUS?: Localization;
  }
}

// Declare global theme here
export const theme = createTheme({
  palette: {
    primary: {
      main: '#F95A8E',
    },
  },
  typography: {
    fontFamily: "'M PLUS Rounded 1c'",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
            font-family: 'M PLUS Rounded 1c';
            font-weight: 400;
            src: url("${Config.ASSETS_END_POINT}/fonts/MPLUSRounded1c/ttf/MPLUSRounded1c-Medium.ttf") format("truetype");
        }, 
      `,
    },
  },

  enUS,
});

export default theme;
