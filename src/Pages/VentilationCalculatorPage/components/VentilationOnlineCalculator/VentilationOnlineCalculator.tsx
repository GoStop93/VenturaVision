import { useTranslation } from 'react-i18next';

import VentilationOnlineCalculatorForms from './components/VentilationOnlineCalculatorForms';
import VentilationOnlineCalculatorSettings from './components/VentilationOnlineCalculatorSettings';
import { IVentilationOnlineCalculatorProps } from './types';

import * as S from './VentilationOnlineCalculator.styles';

const VentilationOnlineCalculator: React.FC<IVentilationOnlineCalculatorProps> = (props) => {
  const { rooms, setRooms } = props;

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    title_first: t('ventilationCalculator:online_calculator.title_first'),
    title_second: t('ventilationCalculator:online_calculator.title_second'),
  };

  return (
    <S.VentilationOnlineCalculator>
      <S.Title variant="h3">
        {translations.title_first}
        <span> {translations.title_second}</span>
      </S.Title>
      <VentilationOnlineCalculatorSettings />
      <VentilationOnlineCalculatorForms rooms={rooms} setRooms={setRooms} />
    </S.VentilationOnlineCalculator>
  );
};

export default VentilationOnlineCalculator;
