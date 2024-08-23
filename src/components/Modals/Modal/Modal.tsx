import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Theme } from '@mui/material';

import { IModalProps } from './types';

import * as S from './Modal.styles';

const modalCloseIconStyles = {
  position: 'absolute',
  right: (theme: Theme) => theme.spacing(3.5),
  top: (theme: Theme) => theme.spacing(2.5),
  color: (theme: Theme) => theme.palette.grey[800],
};

const Modal: React.FC<IModalProps> = ({ close, children, showCloseButton = true, ...rest }) => {
  return (
    <S.Dialog {...rest} fullWidth onClose={close} open>
      {showCloseButton && (
        <IconButton
          aria-label="close"
          onClick={close}
          sx={modalCloseIconStyles}
          style={{ zIndex: '5' }}
        >
          <CloseIcon />
        </IconButton>
      )}
      {children}
    </S.Dialog>
  );
};

export default Modal;
