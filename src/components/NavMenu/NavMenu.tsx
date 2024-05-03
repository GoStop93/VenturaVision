import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import NavBar from '../NavBar';
import Drawer from '../Drawer';

import { INavMenuProps } from './types';

const NavMenu: React.FC<INavMenuProps> = (props) => {
  const { isOpen, closeMenu, toggleMenu } = props;
  return (
    <>
      <Drawer isOpen={isOpen}>
        <IconButton  onClick={toggleMenu}>
          <CloseIcon sx={{ fontSize: 30, marginBottom: 2 }} />
        </IconButton>
        <NavBar isVertical isVisible closeMenu={closeMenu} />
      </Drawer>
      <NavBar />
    </>
  );
};

export default NavMenu;
