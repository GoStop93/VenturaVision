import CloseIcon from '@mui/icons-material/Close';
import { Dialog, IconButton, Theme } from '@mui/material';

import { IModalProps } from './types';

const modalCloseIconStyles = {
  position: 'absolute',
  right: (theme: Theme) => theme.spacing(3.5),
  top: (theme: Theme) => theme.spacing(2.5),
  color: (theme: Theme) => theme.palette.grey[800],
};

const Modal: React.FC<IModalProps> = ({ close, children, showCloseButton = true, ...rest }) => {
  return (
    <Dialog {...rest} fullWidth onClose={close} open>
      {showCloseButton && (
        <IconButton aria-label="close" onClick={close} sx={modalCloseIconStyles}>
          <CloseIcon />
        </IconButton>
      )}
      {children}
    </Dialog>
  );
};

export default Modal;
