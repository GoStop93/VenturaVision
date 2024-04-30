import * as S from './NavBar.styles';

const NavBar: React.FC = () => {
  return (
    <S.NavBar>
      <S.NavLink to="/about">About</S.NavLink>
      <S.NavLink to="/">Home</S.NavLink>
    </S.NavBar>
  );
};

export default NavBar;
