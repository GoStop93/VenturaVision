import { DialogActions, DialogContent, Typography } from '@mui/material';

import usePromiseStatus from '../../../hooks/usePromiseStatus';
import Button from '../../Button';
import { WarningIcon, QuestionIcon } from '../../../icons';
import Modal from '../Modal';
import { ConfirmModalType } from './constants';
import { IConfirmModalProps } from './types';
import { getButtonColor } from './utils';

import * as S from './ConfirmModal.styles';

const iconByType = {
  [ConfirmModalType.WARNING]: { icon: WarningIcon },
  [ConfirmModalType.CONFIRM]: { icon: QuestionIcon },
  [ConfirmModalType.DEFAULT]: null,
};

function ConfirmModal<R>({
  header,
  body,
  type = ConfirmModalType.CONFIRM,
  confirmText = 'Yes',
  onConfirm,
  onConfirmSuccess,
  abortText = 'No',
  onAbort,
  close,
  closeOnSuccess = true,
  disabled,
  hideButtons,
  ...rest
}: IConfirmModalProps<R>) {
  const { track, isPending } = usePromiseStatus();

  const handleConfirm = async () => {
    const confirmResult = onConfirm();
    const isTrackable = confirmResult instanceof Promise;
    const result = isTrackable ? await track(confirmResult) : confirmResult;

    onConfirmSuccess && onConfirmSuccess(result);
    closeOnSuccess && close();
  };

  const handleAbort = () => {
    onAbort && onAbort();
    close();
  };

  const ConfirmModalIcon = iconByType[type]?.icon;

  return (
    <Modal {...rest} fullWidth close={close}>
      <DialogContent sx={{ textAlign: 'center' }}>
        {ConfirmModalIcon && (
          <S.IconBox>
            <ConfirmModalIcon sx={{ fontSize: 90 }} />
          </S.IconBox>
        )}

        <Typography variant="h4" sx={{ marginBottom: 1 }}>
          {header}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ whiteSpace: 'pre-line' }}>
          {body}
        </Typography>
      </DialogContent>

      {!hideButtons && (
        <DialogActions>
          <Button disabled={disabled} onClick={handleConfirm} color={getButtonColor(type)}>
            {confirmText}
          </Button>
          <Button disabled={disabled || isPending} variant="outlined" onClick={handleAbort}>
            {abortText}
          </Button>
        </DialogActions>
      )}
    </Modal>
  );
}

export default ConfirmModal;
