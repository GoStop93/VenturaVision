import { useTranslation } from 'react-i18next';

import AirConditionCalculatorForm from './components/AirConditionCalculatorForm';
import DefaultSettings from './components/DefaultSettings';
import { IAirConditionOnlineCalculatorProps } from './types';

import * as S from './AirConditionOnlineCalculator.styles';

const AirConditionOnlineCalculator: React.FC<IAirConditionOnlineCalculatorProps> = (props) => {
  const { rooms, setRooms } = props;

  const { t } = useTranslation('airConditionCalculator');

  const translations = {
    title_first: t('airConditionCalculator:online_calculator.title_first'),
    title_second: t('airConditionCalculator:online_calculator.title_second'),
  };

  return (
    <S.AirConditionOnlineCalculator>
      <S.Title variant="h3">
        {translations.title_first}
        <span> {translations.title_second}</span>
      </S.Title>
      <DefaultSettings />
      <AirConditionCalculatorForm rooms={rooms} setRooms={setRooms} />
    </S.AirConditionOnlineCalculator>
  );
};

export default AirConditionOnlineCalculator;
