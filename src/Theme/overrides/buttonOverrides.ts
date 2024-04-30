import { buttonClasses, Theme } from '@mui/material';

import { colors } from '../../styles/colors';

export const buttonOverride = {
  root: ({ theme }: { theme: Theme }) => ({
    borderRadius: 2,
    fontWeight: 700,

    [`&.${buttonClasses.disabled}`]: {
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.common.white,
    },

    [`&.link`]: {
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.common.white,
    },
  }),

  outlined: ({ theme }: { theme: Theme }) => ({
    color: colors.black,
    border: `2px solid ${colors.orange}`,
    transition: 'color .35s, background-color .35s',

    '&:hover': {
      color: colors.white,
      backgroundColor: colors.orange,
      border: `2px solid ${colors.orange}`,
      '&:after': {
        width: '100%',
      },
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: '100%',
      backgroundColor: colors.orange,
      transition: 'width .35s',
      zIndex: -1,
    },
  }),

  text: ({ theme }: { theme: Theme }) => ({
    color: theme.palette.info.main,
    backgroundColor: 'transparent',
    textTransform: 'initial' as const,
    textDecoration: 'underline',
    fontWeight: 400,
    padding: 0,

    '&:hover': {
      color: theme.palette.info.dark,
      backgroundColor: 'transparent',
      textDecoration: 'none',
    },

    [`&.${buttonClasses.disabled}`]: {
      color: theme.palette.action.disabled,
    },
  }),
};
