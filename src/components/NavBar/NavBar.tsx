import { useTranslation } from 'react-i18next';

import { INavBarProps } from './types';
import * as S from './NavBar.styles';

const NavBar: React.FC<INavBarProps> = (props) => {
  const { isVertical = false, isVisible, closeMenu } = props;
  const { t } = useTranslation('header');

  const translations = {
    about_link: t('header:navigation.about'),
    home_link: t('header:navigation.home'),
  };


  return (
    <S.NavBar isVertical={isVertical} isVisible={isVisible}>
      <S.NavLink onClick={closeMenu} to="/about">{translations.about_link}</S.NavLink>
      <S.NavLink onClick={closeMenu} to="/">{translations.home_link}</S.NavLink>
    </S.NavBar>
  );
};

export default NavBar;
