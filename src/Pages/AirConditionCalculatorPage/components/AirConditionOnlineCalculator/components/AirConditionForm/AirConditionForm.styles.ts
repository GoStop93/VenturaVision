import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { screenSizes } from '@/styles/sizes';

export const Form = styled(FormControl)`
  height: fit-content;
  box-sizing: border-box;
  padding: 20px !important;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 34px;
`;

export const FormWrapper = styled.div`
  display: grid;
  position: relative;
  grid-gap: 50px;
  grid-template-columns: 1.1fr 1fr;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    right: 0;
    width: 100%;
    height: 0;
    border-top: 1px dashed ${colors.orange};
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const FormColumns = styled.div<{ small?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ small }) => (small ? '270px' : '300px')};
  gap: ${({ small }) => (small ? '0px' : '15px')};
  padding-bottom: 10px;

  &:not(:last-child) {
    position: relative;
    padding-right: 10px;

    &::after {
      content: '';
      position: absolute;
      top: -10px;
      right: -25px;
      width: 0px;
      height: 100%;
      border-left: 1px dashed ${colors.orange};
    }
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    &:not(:last-child) {
      &::after {
        content: none;
      }
    }
  }
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
  width: 300px;
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

export const SwitchWrapper = styled.div<{
  withBackground?: boolean;
  isFirst?: boolean;
  withoutPadding?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-sizing: border-box;
  background-color: ${({ withBackground }) => (withBackground ? '#f5f5f5' : 'transparent')};
  padding: ${({ withBackground }) => (withBackground ? '5px 10px' : '0 10px')};
  border-radius: 5px;
  margin: -10px -10px;
  border: ${({ withBackground }) => (withBackground ? '1px dotted #9E9E9E' : 'none')};
  margin: ${({ withBackground, isFirst }) =>
    withBackground && isFirst ? '0px -10px 5px -10px' : '5px -10px'};
  transition: all 0.2s;
`;

export const Image = styled.img`
  position: absolute;
  top: -17px;
  right: 40px;
  width: 27%;
`;
