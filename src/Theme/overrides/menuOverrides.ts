import { alpha, menuItemClasses, Theme } from '@mui/material';

import { colors } from '@/styles/colors';

export const menuOverrides = {
  list: () => ({
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: colors.orange,
    border: '1px solid',
    borderColor: alpha(colors.orange, 0.3),
  }),
};

export const menuItemOverrides = {
  root: ({ theme }: { theme: Theme }) => ({
    padding: '5px 40px 5px 20px',

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },

    '& .MuiTypography-root': {
      color: alpha(theme.palette.common.white, 0.9),
    },

    [`&.${menuItemClasses.selected}`]: {
      backgroundColor: alpha(theme.palette.common.white, 0.2),

      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.2),
      },
    },
  }),
};
