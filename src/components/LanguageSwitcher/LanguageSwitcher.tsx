import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';
import { LANGUAGES } from '../../constants/main';

import * as S from './LanguageSwitcher.styles';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleSwitchToEnglish = () => {
    i18n.changeLanguage(LANGUAGES.ENG);
  };

  const handleSwitchToRussian = () => {
    i18n.changeLanguage(LANGUAGES.RU);
  };

  return (
    <S.Switcher>
      <S.SwitchOption isActive={currentLanguage === LANGUAGES.ENG} variant="h5" onClick={handleSwitchToEnglish}>
        Eng
      </S.SwitchOption>
      <Typography variant="h5" color="primary">
        /
      </Typography>
      <S.SwitchOption isActive={currentLanguage === LANGUAGES.RU} variant="h5" onClick={handleSwitchToRussian}>
        Ru
      </S.SwitchOption>
    </S.Switcher>
  );
};

export default LanguageSwitcher;
