import { Box } from '@mui/material';

import { ITabPanelProps } from './types';

const TabPanel: React.FC<ITabPanelProps> = ({
  children,
  value,
  index,
  sx,
  unmountOnExit = true,
  ...rest
}) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} {...rest}>
      {(value === index || !unmountOnExit) && <Box sx={{ pt: 3, ...sx }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
