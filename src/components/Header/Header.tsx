import NavBar from './components/NavBar';
import LanguageSwitcher from '../LanguageSwitcher';

import * as S from './Header.styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <NavBar />
      <LanguageSwitcher />
    </S.Header>
  );
};

export default Header;
