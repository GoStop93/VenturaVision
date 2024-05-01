import CalculatorCard from '../CalculatorCard';

import { calculatorsData } from './types';

import * as S from './CalculatorsList.styles';

const CalculatorsList: React.FC = () => {
  return (
    <S.CalculatorsList>
      {calculatorsData.map((calculator) => (
        <CalculatorCard key={calculator.buttonName} calculator={calculator}/>
      ))}
    </S.CalculatorsList>
  );
};

export default CalculatorsList;
