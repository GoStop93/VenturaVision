import transition from '@/utils/transition/transition';

import HomeContent from './components/HomeContent';
import OurCalculators from './components/OurCalculators';

import * as S from './HomePage.styles';

const HomePage: React.FC = () => {
  return (
    <S.Home>
      <HomeContent />
      <OurCalculators />
    </S.Home>
  );
};

export default transition(HomePage);
