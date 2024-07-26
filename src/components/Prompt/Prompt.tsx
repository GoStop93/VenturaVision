import { useCallback } from 'react';
import { useBeforeUnload } from 'react-router-dom';

import { IPromptProps } from './types';
import ConfirmModal, { ConfirmModalType } from '../Modals/ConfirmModal';

function Prompt<T>(props: IPromptProps<T>) {
  const { blocker, onConfirm } = props;

  useBeforeUnload(
    useCallback((event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = 'Are you sure you want to leave? All unsaved progress would be lost.';
    }, [])
  );

  const handleCloseModal = () => {
    if (blocker.state === 'blocked') {
      blocker.reset();
    }
  };

  const handleAbortClick = () => {
    if (blocker.state === 'blocked') {
      blocker.proceed();
    }
  };

  return (
    <>
      {blocker.state === 'blocked' && (
        <ConfirmModal
          type={ConfirmModalType.CONFIRM}
          header="Покинуть страницу расчёта?"
          body={`Вы уверены, что хотите покинуть страницу?\n Ваши текущие данные расчёта не будут сохранены.`}
          confirmText={'Покинуть страницу'}
          abortText={'Вернуться к расчёту'}
          onConfirm={handleAbortClick}
          onAbort={handleCloseModal}
          close={handleCloseModal}
        />
      )}
    </>
  );
}

export default Prompt;
