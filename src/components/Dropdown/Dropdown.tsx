import { useState } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';

import { IDropdownProps } from './types';

import * as S from './Dropdown.styles';

const Dropdown: React.FC<IDropdownProps> = (props) => {
  const { position = 'left', options, onChange, value, name } = props;

  const [anchorElDropdown, setAnchorElDropdown] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElDropdown(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElDropdown(null);
  };

  const handleClick = (item: string) => {
    onChange(name, item);
    setAnchorElDropdown(null);
  };

  return (
    <>
      <S.DropdownButton variant="text" onClick={handleOpen}>
        <Typography variant="body1">{value}</Typography>
        <S.ArrowIcon anchorElDropdown={anchorElDropdown}/>
      </S.DropdownButton>
      <Menu
        id="menu-dropdown"
        anchorEl={anchorElDropdown}
        anchorOrigin={{ vertical: 'bottom', horizontal: position }}
        sx={{ marginTop: '15px' }}
        open={Boolean(anchorElDropdown)}
        onClose={handleClose}
      >
        {options.map((item, index) => {
          return (
            <MenuItem key={index} onClick={() => handleClick(item)}>
              <Typography>{item}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default Dropdown;
