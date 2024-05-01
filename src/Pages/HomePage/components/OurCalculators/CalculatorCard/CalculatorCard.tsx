import { useNavigate } from 'react-router-dom';

import Button from '../../../../../components/Button';
import { Typography } from '@mui/material';

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
      <Button onClick={handleNavigate} variant="outlined">
        {calculator.buttonName}
      </Button>
      <Typography>{calculator.description}</Typography>
    </S.CalculatorCard>
  );
};

export default CalculatorCard;
