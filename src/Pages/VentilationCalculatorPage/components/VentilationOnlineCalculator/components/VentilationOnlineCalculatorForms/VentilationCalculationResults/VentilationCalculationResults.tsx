import Table from '../../../../../../../components/Table';
import VentilationResultsDocument from '../VentilationResultsDocument';
import PDFDownloadButton from '../../../../../../../components/PDFDownloadButton';

import { calculateIntakeResults } from './utils/calculateIntakeResults';
import { calculateExhaustResults } from './utils/calculateExhaustResults ';
import { groupBySystem } from './utils/groupBySystem';

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

  const sortedIntakeResults = intakeResults.sort((a, b) => {
    const aIsPV = a.systemName.startsWith('ПВ');
    const bIsPV = b.systemName.startsWith('ПВ');
    if (aIsPV && !bIsPV) return 1;
    if (!aIsPV && bIsPV) return -1;
    if (!aIsPV && !bIsPV) {
      return a.systemName.localeCompare(b.systemName, undefined, { numeric: true });
    }
    return a.systemName.localeCompare(b.systemName, undefined, { numeric: true });
  });

  const results = [...sortedIntakeResults, ...exhaustResults];

  const groupedResults = groupBySystem(intakeResults);

  return (
    <S.Results>
      <S.Label variant="h3">
        <span>Таблица</span> воздухообменов:
      </S.Label>
      <Table data={results} columns={columns} />
      <S.ButtonWrapper>
        <PDFDownloadButton children={<VentilationResultsDocument results={results} />} fileName="Air_exchange_rate_table" />
      </S.ButtonWrapper>
      {Object.keys(groupedResults).length > 0 && (
        <S.TextWrapper>
          <S.Subtitle variant="h4">Общий расход для систем приточной / приточно-вытяжной вентиляции:</S.Subtitle>
          {Object.entries(groupedResults).map(([systemName, totalVentilation]) => (
            <S.Text key={systemName}>
              {systemName}: <span>{totalVentilation}</span> м³/ч
            </S.Text>
          ))}
        </S.TextWrapper>
      )}
    </S.Results>
  );
};

export default VentilationCalculationResults;
