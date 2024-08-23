import transition from '@/utils/transition/transition';

import AboutMeSection from './components/AboutMeSection';
import AboutProjectSection from './components/AboutProjectSection';

import * as S from './About.styles';

const About: React.FC = () => {
  return (
    <S.About>
      <AboutMeSection />
      <AboutProjectSection />
    </S.About>
  );
};

export default transition(About);
