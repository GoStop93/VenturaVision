import Table from '../../../../../../../components/Table';
import { Typography } from '@mui/material';

import { calculateIntakeResults } from './utils/calculateIntakeResults';
import { calculateExhaustResults } from './utils/calculateExhaustResults ';

import { columns } from './constants';

import {
  getAirflowRate,
  getBathroomExhaustRate,
  getExchangeRate,
  getLaundryRoomExhaustRate,
  getToiletExhaustRate,
} from '../../../../../store/selectors';
import { useVentilationCalculatorStore } from '../../../../../store/store';
import { ROOM_TYPES_OPTIONS } from '../types';

import { IVentilationCalculationResultsProps } from './types';

import * as S from './VentilationCalculationResults.styles';

const VentilationCalculationResults: React.FC<IVentilationCalculationResultsProps> = (props) => {
  const { rooms } = props;

  const airflowRate = useVentilationCalculatorStore(getAirflowRate);
  const exchangeRate = useVentilationCalculatorStore(getExchangeRate);

  const bathroomExhaustRate = useVentilationCalculatorStore(getBathroomExhaustRate);
  const toiletExhaustRate = useVentilationCalculatorStore(getToiletExhaustRate);
  const laundryRoomExhaustRate = useVentilationCalculatorStore(getLaundryRoomExhaustRate);

  const intakeSystem = rooms.filter((room) => room.roomType === ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE);
  const exhaustSystems = rooms.filter((room) => room.roomType !== ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE);

  const intakeResults = calculateIntakeResults(intakeSystem, exchangeRate, airflowRate);
  const exhaustResults = calculateExhaustResults(exhaustSystems, bathroomExhaustRate, toiletExhaustRate, laundryRoomExhaustRate);

  const results = [...intakeResults, ...exhaustResults];

  const totalVentilation = intakeResults.reduce((acc, result) => acc + result.ventilation, 0);

  return (
    <S.Results>
      <S.Label variant="h3">
        <span>Таблица</span> воздухообменов:
      </S.Label>
      <Table data={results} columns={columns} />
      <S.Text variant="h4">
        Общий расход приточной/приточно-вытяжной системы: <span>{totalVentilation}</span> м³/ч
      </S.Text>
    </S.Results>
  );
};

export default VentilationCalculationResults;
