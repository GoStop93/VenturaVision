import { colors } from '@/styles/colors';

export const textFieldOverride = {
  root: () => ({
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${colors.orange}`,
      },
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${colors.orange}`,
    },
  }),
};
