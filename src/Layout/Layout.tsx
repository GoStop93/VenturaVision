import { ILayoutProps } from './types';
import Header from '../components/Header';

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
