import CalculatorsList from './CalculatorsList';

import * as S from './OurCalculators.styles';

const OurCalculators: React.FC = () => {
  return (
    <S.Calculators>
      <S.Title variant="h3">
        Our <span>Calculators</span>
      </S.Title>
      <CalculatorsList />
    </S.Calculators>
  );
};

export default OurCalculators;
