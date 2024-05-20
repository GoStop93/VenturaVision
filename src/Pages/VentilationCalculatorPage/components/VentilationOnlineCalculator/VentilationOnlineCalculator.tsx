import * as S from './VentilationOnlineCalculator.styles';

import VentilationOnlineCalculatorSettings from './components/VentilationOnlineCalculatorSettings';
import VentilationOnlineCalculatorForms from './components/VentilationOnlineCalculatorForms';

const VentilationOnlineCalculator: React.FC = () => {
  return (
    <S.VentilationOnlineCalculator>
      <S.Title variant="h3">
        Онлайн калькулятор <span>систем вентиляции</span>
      </S.Title>
      <VentilationOnlineCalculatorSettings />
      <VentilationOnlineCalculatorForms />
    </S.VentilationOnlineCalculator>
  );
};

export default VentilationOnlineCalculator;
