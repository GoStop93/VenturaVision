import Header from '../components/Header';
import { ILayoutProps } from './types';

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
