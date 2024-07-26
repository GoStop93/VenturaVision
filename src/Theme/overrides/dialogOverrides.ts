import { Theme } from '@mui/material';

export const dialogOverride = {
  paper: ({ theme }: { theme: Theme }) => ({
    padding: theme.spacing(4.5, 12, 6.5),
  }),
};

export const dialogTitleOverride = {
  root: ({ theme }: { theme: Theme }) => ({
    padding: 0,
    paddingBottom: theme.spacing(3.5),
    fontWeight: 700,
    fontSize: 120,
  }),
};

export const dialogContentOverride = {
  root: {
    padding: 0,
  },
};

export const dialogActionsOverride = {
  root: ({ theme }: { theme: Theme }) => ({
    padding: 0,
    paddingTop: theme.spacing(4.5),
    justifyContent: 'space-between',

    '& > *': {
      flex: 1,
    },
  }),
};
