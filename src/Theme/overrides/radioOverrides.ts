import { radioClasses } from '@mui/material';

import { colors } from '@/styles/colors';

export const radioOverride = {
  root: () => ({
    [`&.${radioClasses.checked}`]: {
      color: colors.orange,
    },
  }),
};
