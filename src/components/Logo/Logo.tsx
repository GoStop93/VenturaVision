import { useTranslation } from 'react-i18next';

import * as S from './Logo.styles';

const Logo: React.FC = () => {
  const { t } = useTranslation('home');
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const translations = {
    title: t('home:title'),
  };

  return (
    <S.Content>
      <S.Title color="secondary">VenturaVision</S.Title>
      <S.Subtitle currentLanguage={currentLanguage} color="primary">{translations.title}</S.Subtitle>
    </S.Content>
  );
};

export default Logo;
