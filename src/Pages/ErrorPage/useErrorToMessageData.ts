import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { HOME } from '@/constants/path';

type ErrorMessageData = {
  text: string;
  heading: string;
  button: {
    btnText: string;
    path: string;
  };
};

const availableCodes = ['403', '404', 'unexpected', 'default'];

function isAvailableCodeNumber(code?: string) {
  return !!code && availableCodes.includes(code);
}

export function useErrorToMessageData(): ErrorMessageData {
  const { t } = useTranslation('errorPage');
  const { code } = useParams();

  const selectedCode = isAvailableCodeNumber(code) ? code : 'default';

  return {
    heading: t(`error.${selectedCode}.heading`),
    text: t(`error.${selectedCode}.text`),
    button: {
      btnText: t(`error.${selectedCode}.button.text`),
      path: HOME,
    },
  };
}
