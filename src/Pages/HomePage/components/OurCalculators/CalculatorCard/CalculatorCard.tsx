import { useNavigate } from 'react-router-dom';

import { ICalculatorCardProps } from './types';

import * as S from './CalculatorCard.styles';

const CalculatorCard: React.FC<ICalculatorCardProps> = (props) => {
  const { calculator } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(calculator.url);
  };

  return (
    <S.CalculatorCard>
      <S.CalculatorButton onClick={handleNavigate} variant="outlined">
        {calculator.buttonName}
      </S.CalculatorButton>
      <S.Description>{calculator.description}</S.Description>
    </S.CalculatorCard>
  );
};

export default CalculatorCard;
