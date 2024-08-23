import { useTranslation } from 'react-i18next';

import AirflowRateForm from './AirflowRateForm';
import ExchangeRateForm from './ExchangeRateForm';
import ExhaustRateForm from './ExhaustRateForm';

import * as S from './VentilationOnlineCalculatorSettings.styles';

const VentilationOnlineCalculatorSettings: React.FC = () => {
  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    label_first: t('ventilationCalculator:online_calculator.calculator_settings.label_first'),
    label_second: t('ventilationCalculator:online_calculator.calculator_settings.label_second'),
  };

  return (
    <S.Settings>
      <S.Setting>
        <S.SettingsTitle width="660px" variant="h4">
          {translations.label_first}
        </S.SettingsTitle>
        <S.Forms>
          <AirflowRateForm />
          <ExchangeRateForm />
        </S.Forms>
      </S.Setting>
      <S.Setting>
        <S.SettingsTitle width="400px" variant="h4">
          {translations.label_second}
        </S.SettingsTitle>
        <S.Forms>
          <ExhaustRateForm />
        </S.Forms>
      </S.Setting>
    </S.Settings>
  );
};

export default VentilationOnlineCalculatorSettings;
