import { Drawer as MuiDrawer } from '@mui/material';

import { IDrawerProps } from './types';

import * as S from './Drawer.styles';

const Drawer: React.FC<IDrawerProps> = (props) => {
  const { isOpen, children } = props;

  return (
    <MuiDrawer open={isOpen}>
      <S.Content>{children}</S.Content>
    </MuiDrawer>
  );
};

export default Drawer;
