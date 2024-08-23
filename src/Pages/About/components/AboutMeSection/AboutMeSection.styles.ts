import { Typography } from '@mui/material';
import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { screenSizes } from '@/styles/sizes';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  width: 100%;

  @media screen and (max-width: ${screenSizes.lg}) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 2vh;

  @media screen and (max-width: ${screenSizes.lg}) {
    width: 80%;
    order: 1;
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 37%;

  @media screen and (max-width: ${screenSizes.lg}) {
    width: 60%;
    order: 0;
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    width: 90%;
  }
`;

export const Title = styled(Typography)`
  text-align: center;

  span {
    color: ${colors.orange};
  }
`;
