import App from './App';
import AppProvider from './AppProvider';

const Root: React.FC = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default Root;
