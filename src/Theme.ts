// Material
import { responsiveFontSizes, createMuiTheme } from '@material-ui/core';

export const Constants = {
  colors: {
    // Basic
    White: '#ffffff',
    Black: '#000000',

    // Named Colors
    DarkBlue: '#1F005A',
    WarmBlue: '#5262d9',
    LightBlue: '#0058ff',
    LightNavy: '#174e9a',
    BrightTeal: '#00ffc4',
    SlateGrey: '#5c5f66',
    BattleshipGrey: '#6c7a89',
    BlueyGrey: '#a1a6b3',

    // Icons
    IconHover: '#f0f2f2',

    // Errors
    BrickShadow: 'rgba(208, 35, 35, 0.3)',
    BrickBorder: 'rgba(219, 94, 94, 0.39)',
    PastelRed: '#db5e5e',

    // Text Input
    TextInputDisabledTextColor: '#5c5f66',
    TextInputDisabledBackground: '#f1f3f3',

    // Dropdown
    DropdownLine: '#cfd6e7',
    DropdownBackground: '#f2f3f5',
    DropdownDisabledTextColor: '#5c5f66',
    DropdownDisabledBackground: '#f1f3f3',

    // Home
    HomeBackground: '#f5f7f7',
    HomeTitle: '#0a63fc',
    HomeLogoBottomBorder: '#f1f3f3'
  }
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  },
  overrides: {
    MuiInputBase: {
      input: {
        fontFamily: 'Montserrat, sans-serif',
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color'
        }
      }
    }
  }
});

export default responsiveFontSizes(theme);
