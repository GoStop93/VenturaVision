import { checkboxClasses, tableCellClasses, Theme } from '@mui/material';

export const tableContainerOverride = {
  root: ({ theme }: { theme: Theme }) => ({
    borderRadius: 2,
    border: `1px solid ${theme.palette.grey[100]}`,
  }),
};

export const tableRowOverride = {
  root: ({ theme }: { theme: Theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: '#FEE2E2',
    },
    '&.group-row': {
      backgroundColor: '#e9eaeb',

      '.MuiTableCell-root': {
        fontWeight: 700,
      },
    },
  }),
};

export const tableCellOverride = {
  root: ({ theme }: { theme: Theme }) => ({
    fontSize: 14,
    lineHeight: '1.25rem',

    borderBottom: 0,
    padding: '10px 35px 10px 35px',

    borderRight: '1px solid #e5e5e5',

    '&:last-of-type': {
      borderRight: 0,
    },

    [`&.${tableCellClasses.head}`]: {
      fontWeight: 700,
      backgroundColor: '#FEE2E2',
    },

    '.MuiCheckbox-root': {
      padding: 6,
      margin: -6,

      color: '#818386CC',

      [`&.${checkboxClasses.checked}`]: {
        color: theme.palette.info.main,
      },
      [`&.${checkboxClasses.indeterminate}`]: {
        color: theme.palette.info.main,
      },
    },
  }),
};
