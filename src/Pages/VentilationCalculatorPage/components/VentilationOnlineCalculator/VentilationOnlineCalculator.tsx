import * as S from './VentilationOnlineCalculator.styles';

import VentilationOnlineCalculatorSettings from './components/VentilationOnlineCalculatorSettings';
import VentilationOnlineCalculatorForms from './components/VentilationOnlineCalculatorForms';

import { IVentilationOnlineCalculatorProps } from './types';

const VentilationOnlineCalculator: React.FC<IVentilationOnlineCalculatorProps> = (props) => {
  const { rooms, setRooms } = props;

  return (
    <S.VentilationOnlineCalculator>
      <S.Title variant="h3">
        Онлайн калькулятор <span>систем вентиляции</span>
      </S.Title>
      <VentilationOnlineCalculatorSettings />
      <VentilationOnlineCalculatorForms rooms={rooms} setRooms={setRooms} />
    </S.VentilationOnlineCalculator>
  );
};

export default VentilationOnlineCalculator;
