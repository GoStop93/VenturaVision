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

export const NavLink = styled(ReactNavLink)<{ isVertical?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.white};
  margin-left: -10px;

  @media screen and (max-width: ${screenSizes.sm}) {
    color: ${colors.black};
  }

  &:hover {
    color: ${colors.orange};
    cursor: pointer;

    .inactive-icon {
      display: none;
    }

    .active-icon {
      display: ${({ isVertical }) => (isVertical ? 'flex' : 'none')};
    }
  }

  &.active {
    color: ${colors.orange};

    .inactive-icon {
      display: none;
    }

    .active-icon {
      display: ${({ isVertical }) => (isVertical ? 'flex' : 'none')};
    }
  }
  .inactive-icon {
    display: ${({ isVertical }) => (isVertical ? 'flex' : 'none')};
  }

  .active-icon {
    display: none;
  }
`;
