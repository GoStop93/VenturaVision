import { useTranslation } from 'react-i18next';
import * as S from './NavBar.styles';

const NavBar: React.FC = () => {
  const { t } = useTranslation('header');

  const translations = {
    about_link: t('header:navigation.about'),
    home_link: t('header:navigation.home'),
  };
  
  return (
    <S.NavBar>
      <S.NavLink to="/about">{translations.about_link}</S.NavLink>
      <S.NavLink to="/">{translations.home_link}</S.NavLink>
    </S.NavBar>
  );
};

export default NavBar;
