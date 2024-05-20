import styled from 'styled-components';
import { colors } from '../../../../../../styles/colors';

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: #f5f5f5;
  border: 1px solid ${colors.orange};
`;

export const Forms = styled.div`
  display: flex;
  gap: 50px;
`;
