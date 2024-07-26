import AppProvider from './AppProvider';
import App from './App';

const Root: React.FC = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default Root;
