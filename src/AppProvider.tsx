import { ReactNode } from 'react';

import { flowRight } from 'lodash';

import { ThemeProvider } from '@mui/material/styles';
import Layout from './Layout/Layout';

import theme from './theme/theme';

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProviderProps) => {
  return flowRight([
    (n) => <ThemeProvider theme={theme} children={n} />,
    (n) => <Layout  children={n} />
  ])(children);
};

export default AppProvider;
