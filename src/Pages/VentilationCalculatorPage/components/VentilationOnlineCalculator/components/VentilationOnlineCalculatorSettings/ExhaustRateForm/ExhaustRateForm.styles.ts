import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

import { screenSizes } from '@/styles/sizes';

export const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Input = styled(TextField)`
  input {
    width: 50px;
    height: 10px;

    @media screen and (max-width: ${screenSizes.md}) {
      width: 40px;
    }
  }
`;

export const Form = styled(FormControl)`
  box-sizing: border-box;
  padding: 20px !important;
  border-radius: 10px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  height: fit-content;

  @media screen and (max-width: ${screenSizes.md}) {
    max-width: 300px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
`;

export const InputWithLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;
