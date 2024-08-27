import styled from 'styled-components';

import errorImage from '@/assets/images/error/error.jpg';
import { colors } from '@/styles/colors';
import { screenSizes } from '@/styles/sizes';

export const ErrorPage = styled.div`
  padding: 125px 100px 0;
  height: calc(100vh - 125px);
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url(${errorImage});
  background-size: 120vh;
  background-position: 80% 30px;
  background-repeat: no-repeat;
  background-blend-mode: color-burn;

  h3,
  p {
    color: ${colors.white};
    margin: 0;
    line-height: 1.5;
  }

  h3 {
    font-weight: 700;
    font-size: 32px;
  }

  p {
    font-weight: 300;
    font-size: 18px;
  }

  @media screen and (max-width: ${screenSizes.lg}) {
    background-size: 90vh;
    background-position: 80% 25vh;
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    padding: 125px 20px 0;
    background-size: 55vh;
    background-position: 50% 40vh;
  }
`;
