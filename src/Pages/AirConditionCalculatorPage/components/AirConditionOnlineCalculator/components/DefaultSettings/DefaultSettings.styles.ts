import { TextField, Typography } from '@mui/material';
import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { screenSizes } from '@/styles/sizes';

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 420px;
  font-size: 14px;

  @media screen and (max-width: ${screenSizes.sm}) {
    min-width: 20px;
    width: auto;
  }
`;

export const FlexWrapper = styled.div<{ withPadding?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 5px;

  @media screen and (max-width: ${screenSizes.sm}) {
    padding:  ${({ withPadding }) => (withPadding ? '20px' : '0')};
  }
`;

export const DefaultSettings = styled.div<{
  withBackground?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ withBackground }) => (withBackground ? '620px' : '420px')};
  border-radius: ${({ withBackground }) => (withBackground ? '5px' : '0px')};
  background-color: ${({ withBackground }) => (withBackground ? '#f5f5f5' : 'transparent')};
  padding: 5px 10px;
  border-top: ${({ withBackground }) =>
    withBackground ? `1px dashed #9E9E9E` : `1px dashed #9E9E9E`};
  border-bottom: ${({ withBackground }) =>
    withBackground ? `1px dashed #9E9E9E` : `1px dashed #9E9E9E`};
  border-left: ${({ withBackground }) => (withBackground ? `1px dashed #9E9E9E` : 'none')};
  border-right: ${({ withBackground }) => (withBackground ? `1px dashed #9E9E9E` : 'none')};
  transition: all 0.2s;

  @media screen and (max-width: ${screenSizes.sm}) {
    width: auto;
  }
`;

export const Title = styled(Typography)`
  font-size: 16px !important;
`;

export const FormWrapper = styled.div`
  display: grid;
  position: relative;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: -10px;
    width: calc(100% + 20px);
    height: 0;
    border-top: 1px dashed #9e9e9e;
  }

  @media screen and (max-width: ${screenSizes.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const FormColumns = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  padding: 10px;

  &:not(:last-child) {
    position: relative;
    padding-right: 10px;

    &::after {
      content: '';
      position: absolute;
      top: 0px;
      right: -10px;
      width: 0px;
      height: calc(100% + 5px);
      border-left: 1px dashed #9e9e9e;
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

export const SwitchWrapper = styled.div<{
  withBackground?: boolean;
  isFirst?: boolean;
  withoutPadding?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-sizing: border-box;
  background-color: ${({ withBackground }) => (withBackground ? `${colors.white}` : 'transparent')};
  padding: ${({ withBackground }) => (withBackground ? '5px 10px' : '0 10px')};
  border-radius: 5px;
  margin: -10px -10px;
  border: ${({ withBackground }) => (withBackground ? `1px dotted ${colors.orange}` : 'none')};
  margin: ${({ withBackground, isFirst }) =>
    withBackground && isFirst ? '0px -10px 5px -10px' : '5px -10px'};
  transition: all 0.2s;
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

export const SmallInput = styled(TextField)`
  input {
    width: 40px;
    height: 10px;
  }
`;
