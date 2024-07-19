import AirflowRateForm from './AirflowRateForm';
import ExchangeRateForm from './ExchangeRateForm';
import ExhaustRateForm from './ExhaustRateForm';

import * as S from './VentilationOnlineCalculatorSettings.styles';

const VentilationOnlineCalculatorSettings: React.FC = () => {
  return (
    <S.Settings>
      <S.Setting>
        <S.SettingsTitle width="700px" variant="h4">
          Укажите параметры системы приточной / приточно-вытяжной вентиляции:
        </S.SettingsTitle>
        <S.Forms>
          <AirflowRateForm />
          <ExchangeRateForm />
        </S.Forms>
      </S.Setting>
      <S.Setting>
        <S.SettingsTitle width="400px" variant="h4">
          Укажите параметры системы вытяжной вентиляции:
        </S.SettingsTitle>
        <S.Forms>
          <ExhaustRateForm />
        </S.Forms>
      </S.Setting>
    </S.Settings>
  );
};

export default VentilationOnlineCalculatorSettings;
