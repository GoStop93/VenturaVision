import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';

export const Form = styled(FormControl)<{ isExiting?: boolean }>`
  width: 380px;
  height: fit-content;
  box-sizing: border-box;
  padding: 20px !important;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  gap: 20px;
  background: #fff;
  transform-origin: left;
  animation: ${({ isExiting }) =>
    isExiting ? 'hideLeftToRight 180ms ease-in forwards' : 'revealLeftToRight 220ms ease-out both'};

  @keyframes revealLeftToRight {
    from {
      transform: scaleX(0);
      opacity: 0.3;
    }
    to {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @keyframes hideLeftToRight {
    from {
      transform: scaleX(1);
      opacity: 1;
    }
    to {
      transform: scaleX(0);
      opacity: 0.3;
    }
  }

  @media (max-width: 768px) {
    transform-origin: top;
    animation: ${({ isExiting }) =>
      isExiting
        ? 'hideTopToBottom 180ms ease-in forwards'
        : 'revealTopToBottom 220ms ease-out both'};

    @keyframes revealTopToBottom {
      from {
        transform: scaleY(0);
        opacity: 0.3;
      }
      to {
        transform: scaleY(1);
        opacity: 1;
      }
    }

    @keyframes hideTopToBottom {
      from {
        transform: scaleY(1);
        opacity: 1;
      }
      to {
        transform: scaleY(0);
        opacity: 0.3;
      }
    }
  }
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(TextField)`
  input {
    width: 60px;
    height: 10px;
  }
`;

export const BigInput = styled(TextField)`
  input {
    height: 10px;
  }
`;

export const SmallInput = styled(TextField)`
  input {
    width: 40px;
    height: 10px;
  }
`;
