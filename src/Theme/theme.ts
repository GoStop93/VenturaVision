import { createTheme } from '@mui/material/styles';
import { colors } from '../styles/colors';

export default createTheme({
  spacing: 8,
  typography: {
    fontFamily: [ 'Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: colors.orange,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontSize: 80,
            fontWeight: 700,
          },
        },
        {
          props: { variant: 'h2' },
          style: {
            fontSize: 50,
            fontWeight: 700,
          },
        },
        {
          props: { variant: 'h3' },
          style: {
            fontSize: 24,
            fontWeight: 700,
          },
        },
        {
          props: { variant: 'h4' },
          style: {
            fontSize: 20,
            fontWeight: 700,
          },
        },
        {
          props: { variant: 'h5' },
          style: {
            fontSize: 18,
            fontWeight: 700,
          },
        },
        {
          props: { variant: 'h6' },
          style: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1.4,
          },
        },
        {
          props: { variant: 'body1' },
          style: ({ theme }) => ({
            fontSize: 14,
            fontWeight: 400,
            color: theme.palette.text.primary,
            lineHeight: 1.4,
          }),
        },
        {
          props: { variant: 'body2' },
          style: {
            fontSize: 12,
            fontWeight: 400,
          },
        },
      ],
    },
  },
});