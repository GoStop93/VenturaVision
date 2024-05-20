import { radioClasses, Theme } from '@mui/material';
import { colors } from '../../styles/colors';

export const radioOverride = {
  root: ({ theme }: { theme: Theme }) => ({
    [`&.${radioClasses.checked}`]: {
      color: colors.orange,
    },
  }),
};
