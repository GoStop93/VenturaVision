import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

import { colors } from '@/styles/colors';

import { INavMenuProps } from './types';
import Drawer from '../Drawer';
import NavBar from '../NavBar';

const NavMenu: React.FC<INavMenuProps> = (props) => {
  const { isOpen, closeMenu, toggleMenu } = props;
  return (
    <>
      <Drawer isOpen={isOpen}>
        <IconButton onClick={toggleMenu}>
          <CloseIcon sx={{ fontSize: 30, marginBottom: 2, color: colors.black }}/>
        </IconButton>
        <NavBar isVertical isVisible closeMenu={closeMenu} />
      </Drawer>
      <NavBar />
    </>
  );
};

export default NavMenu;
