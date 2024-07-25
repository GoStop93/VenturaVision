import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
`;

export const Input = styled(TextField)`
  input {
    width: 50px;
  }
`;

export const Form = styled(FormControl)`
  box-sizing: border-box;
  padding: 20px !important;
  border-radius: 10px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  height: fit-content;
`;
