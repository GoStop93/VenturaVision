import { Box, Tabs } from '@mui/material';

import { ITabsContainerProps } from './types';

const TabsContainer: React.FC<ITabsContainerProps> = ({ value, children, onChange, ...rest }) => {
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} {...rest}>
        {children}
      </Tabs>
    </Box>
  );
};

export default TabsContainer;
