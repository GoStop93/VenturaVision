import { useTranslation } from 'react-i18next';

import { DiscoverFilledIcon, DiscoverLineIcon, HomeFilledIcon, HomeLineIcon } from '@/icons';
import { colors } from '@/styles/colors';

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
      <S.NavLink onClick={closeMenu} to="/about" isVertical={isVertical}>
        <DiscoverLineIcon width={30} height={30} className="inactive-icon" color={colors.black} />
        <DiscoverFilledIcon width={30} height={30} className="active-icon" color={colors.orange} />
        {translations.about_link}
      </S.NavLink>
      <S.NavLink onClick={closeMenu} to="/" isVertical={isVertical}>
        <HomeLineIcon width={30} height={30} className="inactive-icon" color={colors.black} />
        <HomeFilledIcon width={30} height={30} className="active-icon" color={colors.orange} />
        {translations.home_link}
      </S.NavLink>
    </S.NavBar>
  );
};

export default NavBar;
