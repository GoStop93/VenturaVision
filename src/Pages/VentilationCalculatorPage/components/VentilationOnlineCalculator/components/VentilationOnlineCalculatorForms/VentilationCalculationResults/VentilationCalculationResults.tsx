import {
  getAirflowRate,
  getBathroomExhaustRate,
  getExchangeRate,
  getLaundryRoomExhaustRate,
  getToiletExhaustRate,
} from '../../../../../store/selectors';
import { useVentilationCalculatorStore } from '../../../../../store/store';
import { ROOM_TYPES_OPTIONS, SELECTED_OPTIONS } from '../types';

import { IVentilationCalculationResultsProps } from './types';

const VentilationCalculationResults: React.FC<IVentilationCalculationResultsProps> = (props) => {
  const { rooms } = props;

  const airflowRate = useVentilationCalculatorStore(getAirflowRate);
  const exchangeRate = useVentilationCalculatorStore(getExchangeRate);

  const bathroomExhaustRate = useVentilationCalculatorStore(getBathroomExhaustRate);
  const toiletExhaustRate = useVentilationCalculatorStore(getToiletExhaustRate);
  const laundryRoomExhaustRate = useVentilationCalculatorStore(getLaundryRoomExhaustRate);

  const intakeSystem = rooms.filter((room) => room.roomType === ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE);
  const exhaustSystems = rooms.filter((room) => room.roomType !== ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE);

  const results = intakeSystem.map((room) => {
    let volume;

    if (room.selectedOption === SELECTED_OPTIONS.SQUARE && room.area) {
      volume = room.area * (room.ceilingHeight / 1000);
    } else if (room.selectedOption === SELECTED_OPTIONS.DIMENSIONS && room.length && room.width) {

      volume = (room.length / 1000) * (room.width / 1000) * (room.ceilingHeight / 1000);
    } else {
      volume = 0;
    }

    const ventilationByVolume = volume * exchangeRate;
    const ventilationByPeople = (room.people || 0) * airflowRate;

    const finalVentilation = Math.round(Math.max(ventilationByVolume, ventilationByPeople));

    return {
      name: room.name,
      ventilation: finalVentilation
    };
  });

  const totalVentilation = results.reduce((acc, result) => acc + result.ventilation, 0);

  return (
    <div>
      {results.map((result) => (
        <div key={result.name}>
          {result.name}: {result.ventilation.toFixed(2)} m³/h
        </div>
      ))}
      <div>
        Общий: {totalVentilation.toFixed(2)} m³/h
      </div>
    </div>
  );
};

export default VentilationCalculationResults;
