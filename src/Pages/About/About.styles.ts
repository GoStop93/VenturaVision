import styled from 'styled-components';

import { screenSizes } from '@/styles/sizes';

export const About = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 20vh 48px 15vh 48px;
  gap: 25vh;
  @media screen and (max-width: ${screenSizes.sm}) {
    padding: 20vh 20px 15vh 20px;
  }
`;
