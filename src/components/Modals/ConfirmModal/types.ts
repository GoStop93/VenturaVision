import { IModalProps } from '../Modal/types';

import { ConfirmModalType } from './constants';

export interface IConfirmModalProps<R> extends IModalProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  type?: ConfirmModalType;
  hideButtons?: boolean;

  confirmText?: React.ReactNode;
  onConfirm: () => Promise<R> | R;
  onConfirmSuccess?: (result: R) => void;
  abortText?: React.ReactNode;
  onAbort?: () => void;

  closeOnSuccess?: boolean;
  disabled?: boolean;
  close: () => void;
}
