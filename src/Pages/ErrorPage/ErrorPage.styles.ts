import styled from 'styled-components';

import errorImage from '@/assets/images/error/error.jpg';
import { screenSizes } from '@/styles/sizes';

export const ErrorPage = styled.div`
  padding: 125px 100px 0;
  height: calc(100vh - 125px);
  background-image: url(${errorImage});
  background-size: 120vh;
  background-position: 80% 30px;
  background-repeat: no-repeat;

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
