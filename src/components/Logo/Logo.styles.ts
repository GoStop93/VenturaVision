import styled from 'styled-components';

import { Typography } from '@mui/material';
import { colors } from '../../styles/colors';
import { screenSizes } from '../../styles/sizes';

import { LANGUAGES } from '../../constants/main';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  gap: 5px;
`;

export const Title = styled(Typography)`
  font-size: 45px !important;
  font-weight: 800 !important;
  letter-spacing: 15px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${colors.white};
  }

  &::before {
    top: -20px;
    left: -27px;
    width: 40px;
    height: 3px;
  }

  &::after {
    top: -20px;
    left: -30px;
    width: 3px;
    height: 40px;
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    font-size: 20px !important;
    letter-spacing: 12px;

    &::before {
      top: -15px;
      left: -18px;
      width: 25px;
      height: 2px;
    }

    &::after {
      top: -15px;
      left: -20px;
      width: 2px;
      height: 25px;
    }
  }
`;

export const Subtitle = styled(Typography)<{ currentLanguage: string }>`
  font-size: 20px !important;
  letter-spacing: 7px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${colors.orange};
  }

  &::before {
    bottom: -20px;
    right: ${(props) => (props.currentLanguage === LANGUAGES.ENG ? '-87px' : '-94px')};
    width: 40px;
    height: 3px;
  }

  &::after {
    bottom: -20px;
    right: ${(props) => (props.currentLanguage === LANGUAGES.ENG ? '-90px' : '-97px')};
    width: 3px;
    height: 40px;
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    font-size: 10px !important;
    letter-spacing: 5px;
    text-align: center;

    &::before {
      bottom: -15px;
      right: ${(props) => (props.currentLanguage === LANGUAGES.ENG ? '-43px' : '-48px')};
      width: 25px;
      height: 2px;
    }

    &::after {
      bottom: -15px;
      right: ${(props) => (props.currentLanguage === LANGUAGES.ENG ? '-45px' : '-50px')};
      width: 2px;
      height: 25px;
    }
  }
`;
