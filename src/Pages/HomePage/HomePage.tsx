import HomeContent from './components/HomeContent';

import * as S from './HomePage.styles';

import Button from '../../components/Button';

const HomePage: React.FC = () => {
  return (
    <S.Home>
      <HomeContent />
      <Button variant="outlined">Ventilation System Calculator</Button>
      <Button variant="outlined">Air Conditioning System Calculator</Button>
      <Button variant="outlined">Duct Airflow Calculator</Button>
      <Button variant="outlined">Ventilation System Aerodynamics Calculator</Button>
    </S.Home>
  );
};

export default HomePage;
