import { createTheme } from '@mui/material/styles';

import { theme } from '@project/Theme';

// Declare global theme here
export const mainTheme = createTheme(theme, {
    palette: {
        type: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
      },
});

export default mainTheme;
