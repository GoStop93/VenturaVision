import { Button as MuiButton } from '@mui/material';

import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = (props) => {
  const { disabled, variant = 'contained', children, size = 'large', ...rest } = props;
  return (
    <MuiButton color="primary" variant={variant} size={size} disabled={disabled} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
