import { createTheme } from '@mui/material/styles';
import { colors } from '../styles/colors';
import { buttonOverride } from './overrides/buttonOverrides';
import { tabsOverride } from './overrides/tabsOverrides';
import { tabOverride } from './overrides/tabsOverrides';
import { radioOverride } from './overrides/radioOverrides';
import { textFieldOverride } from './overrides/textFiledOverrides';
import { menuOverrides, menuItemOverrides } from './overrides/menuOverrides';
import { tableCellOverride, tableContainerOverride, tableRowOverride } from './overrides/tableOverrides';
import { dialogOverride, dialogActionsOverride, dialogContentOverride, dialogTitleOverride } from './overrides/dialogOverrides';
import { tooltipOverrides } from './overrides/tooltipOverrides';

export default createTheme({
  spacing: 8,
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
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
    MuiButton: {
      styleOverrides: buttonOverride,
    },
    MuiTabs: {
      styleOverrides: tabsOverride,
    },
    MuiTab: {
      styleOverrides: tabOverride,
    },
    MuiRadio: {
      styleOverrides: radioOverride,
    },
    MuiTextField: {
      styleOverrides: textFieldOverride,
    },
    MuiMenu: {
      styleOverrides: menuOverrides,
    },
    MuiMenuItem: {
      styleOverrides: menuItemOverrides,
    },
    MuiTableContainer: {
      styleOverrides: tableContainerOverride,
    },
    MuiTableCell: {
      styleOverrides: tableCellOverride,
    },
    MuiTableRow: {
      styleOverrides: tableRowOverride,
    },
    MuiDialog: {
      styleOverrides: dialogOverride,
    },
    MuiDialogTitle: {
      styleOverrides: dialogTitleOverride,
    },
    MuiDialogContent: {
      styleOverrides: dialogContentOverride,
    },
    MuiDialogActions: {
      styleOverrides: dialogActionsOverride,
    },
    MuiTooltip: {
      styleOverrides: tooltipOverrides,
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
            fontSize: 26,
            fontWeight: 700,
          },
        },
        {
          props: { variant: 'h4' },
          style: {
            fontSize: 20,
            fontWeight: 600,
          },
        },
        {
          props: { variant: 'h5' },
          style: {
            fontSize: 16,
            fontWeight: 400,
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
