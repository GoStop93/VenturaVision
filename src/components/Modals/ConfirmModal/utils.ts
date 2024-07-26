import { ConfirmModalType } from './constants';

export const getButtonColor = (type: ConfirmModalType) => {
  switch (type) {
    case ConfirmModalType.WARNING:
      return 'error';
    case ConfirmModalType.CONFIRM:
    default:
      return 'primary';
  }
};
