import NavBar from './components/NavBar';

import * as S from './Header.styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Content>
        <NavBar />
      </S.Content>
    </S.Header>
  );
};

export default Header;
