import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

import { VenturaVisionIcon } from '@/icons';

import LanguageSwitcher from '../LanguageSwitcher';
import NavMenu from '../NavMenu';

import * as S from './Header.styles';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const location = useLocation();

  const isTransparentBackground = location.pathname === '/';

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <S.Header isTransparentBackground={isTransparentBackground}>
      <S.MenuButton onClick={toggleDrawer}>
        <MenuIcon color="primary" />
      </S.MenuButton>
      <S.FlexWrapper>
        <VenturaVisionIcon sx={{ fontSize: '25px' }} />
        <NavMenu isOpen={isDrawerOpen} closeMenu={closeDrawer} toggleMenu={toggleDrawer} />
      </S.FlexWrapper>
      <LanguageSwitcher />
    </S.Header>
  );
};

export default Header;
