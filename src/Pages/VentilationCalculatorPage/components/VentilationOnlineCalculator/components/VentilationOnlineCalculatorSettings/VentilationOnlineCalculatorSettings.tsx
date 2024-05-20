import AirflowRateForm from './AirflowRateForm';
import ExchangeRateForm from './ExchangeRateForm';

import { Typography } from '@mui/material';

import * as S from './VentilationOnlineCalculatorSettings.styles';

const VentilationOnlineCalculatorSettings: React.FC = () => {
  return (
    <S.Settings>
      <Typography variant='h4'>Укажите параметры системы вентиляции:</Typography>
      <S.Forms>
        <AirflowRateForm />
        <ExchangeRateForm />
      </S.Forms>
    </S.Settings>
  );
};

export default VentilationOnlineCalculatorSettings;
