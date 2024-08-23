import { NavLink as ReactNavLink } from 'react-router-dom';

import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { screenSizes } from '@/styles/sizes';

export const NavBar = styled.div<{ isVertical: boolean; isVisible?: boolean }>`
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
  display: flex;
  gap: 20px;

  @media screen and (max-width: ${screenSizes.sm}) {
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  }
`;

export const NavLink = styled(ReactNavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};

  @media screen and (max-width: ${screenSizes.sm}) {
    color: ${colors.black};
  }

  &:hover {
    color: ${colors.orange};
    cursor: pointer;
  }

  &.active {
    color: ${colors.orange};
  }
`;
