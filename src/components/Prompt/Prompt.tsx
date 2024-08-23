import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useBeforeUnload } from 'react-router-dom';

import { IPromptProps } from './types';
import ConfirmModal, { ConfirmModalType } from '../Modals/ConfirmModal';

function Prompt<T>(props: IPromptProps<T>) {
  const { blocker } = props;

  const { t } = useTranslation('common');

  const translations = {
    header: t('common:prompt.header'),
    body_first: t('common:prompt.body_first'),
    body_second: t('common:prompt.body_second'),
    confirm_text: t('common:prompt.confirm_text'),
    abort_text: t('common:prompt.abort_text'),
  };

  useBeforeUnload(
    useCallback((event: BeforeUnloadEvent) => {
      event.preventDefault();
    }, []),
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
          header={translations.header}
          body={`${translations.body_first}\n ${translations.body_second}`}
          confirmText={translations.confirm_text}
          abortText={translations.abort_text}
          onConfirm={handleAbortClick}
          onAbort={handleCloseModal}
          close={handleCloseModal}
        />
      )}
    </>
  );
}

export default Prompt;
