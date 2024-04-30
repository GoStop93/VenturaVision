import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

import { NavLink as ReactNavLink } from 'react-router-dom';

export const NavBar = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(ReactNavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};

  &:hover {
    /* text-shadow: 0 0 2px black; */
    color: ${colors.orange};
    cursor: pointer;
  }

  &.active {
    color: ${colors.orange};
  }
`;
