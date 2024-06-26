import styled from 'styled-components';

import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

export const Form = styled(FormControl)`
  width: 380px;
  box-sizing: border-box;
  padding: 20px !important;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 5px;
`;

export const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const HorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled(TextField)`
  input {
    width: 50px;
    height: 10px;
  }
`;

export const BigInput = styled(TextField)`
  input {
    height: 10px;
  }
`;
