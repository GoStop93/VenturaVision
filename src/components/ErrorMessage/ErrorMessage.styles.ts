import { Typography } from '@mui/material';
import styled from 'styled-components';

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px 0 0 0px;
  width: 100%;
`;

export const Text = styled(Typography)`
  color: red !important;
`;
