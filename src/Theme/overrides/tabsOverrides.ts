import { Theme } from '@mui/material';

import { colors } from '@/styles/colors';

export const tabsOverride = {
  root: {
    minHeight: 36,
  },
  indicator: {
    backgroundColor: colors.orange,
  },
};

export const tabOverride = {
  root: ({ theme }: { theme: Theme }) => ({
    minHeight: 36,
    fontWeight: 700,
    fontSize: 16,
    textTransform: 'initial' as const,
    padding: theme.spacing(1, 2.5),
    '&.Mui-selected': {
      color: colors.orange,
    },
  }),
};
