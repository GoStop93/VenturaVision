import styled from 'styled-components';

import Button from '@/components/Button';

export const VentilationCalculator = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const AddButton = styled(Button)`
  width: fit-content;
  height: 43px;
`;

export const FormsWrapper = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 50px;
`;

export const MenuButton = styled(Button)`
  width: 300px;
`;
