import { useTranslation } from 'react-i18next';

import PDFDownloadButton from '@/components/PDFDownloadButton';
import Table from '@/components/Table';
import { useVentilationCalculatorStore } from '@/pages/VentilationCalculatorPage/store';
import {
  getAirflowRate,
  getBathroomExhaustRate,
  getExchangeRate,
  getLaundryRoomExhaustRate,
  getToiletExhaustRate,
} from '@/pages/VentilationCalculatorPage/store/selectors';

import { useGetColumns } from './constants';
import { IVentilationCalculationResultsProps } from './types';
import { ROOM_TYPES_OPTIONS } from '../types';
import VentilationResultsDocument from '../VentilationResultsDocument';
import { calculateExhaustResults } from './utils/calculateExhaustResults';
import { calculateIntakeResults } from './utils/calculateIntakeResults';
import { groupBySystem } from './utils/groupBySystem';

import * as S from './VentilationCalculationResults.styles';

const VentilationCalculationResults: React.FC<IVentilationCalculationResultsProps> = (props) => {
  const { rooms } = props;

  const airflowRate = useVentilationCalculatorStore(getAirflowRate);
  const exchangeRate = useVentilationCalculatorStore(getExchangeRate);

  const bathroomExhaustRate = useVentilationCalculatorStore(getBathroomExhaustRate);
  const toiletExhaustRate = useVentilationCalculatorStore(getToiletExhaustRate);
  const laundryRoomExhaustRate = useVentilationCalculatorStore(getLaundryRoomExhaustRate);

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    title_first: t('ventilationCalculator:online_calculator.results.title_first'),
    title_second: t('ventilationCalculator:online_calculator.results.title_second'),
    subtitle: t('ventilationCalculator:online_calculator.results.subtitle'),
    supply_prefix: t('ventilationCalculator:online_calculator.results.supply_prefix'),
    balanced_prefix: t('ventilationCalculator:online_calculator.results.balanced_prefix'),
    exhaust_prefix: t('ventilationCalculator:online_calculator.results.exhaust_prefix'),
    units: t('ventilationCalculator:online_calculator.results.units'),
  };

  const intakeSystem = rooms.filter(
    (room) => room.roomType === ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE,
  );
  const exhaustSystems = rooms.filter(
    (room) => room.roomType !== ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE,
  );

  const intakeResults = calculateIntakeResults(
    intakeSystem,
    exchangeRate,
    airflowRate,
    translations.balanced_prefix,
    translations.supply_prefix,
  );
  const exhaustResults = calculateExhaustResults(
    exhaustSystems,
    bathroomExhaustRate,
    toiletExhaustRate,
    laundryRoomExhaustRate,
    translations.exhaust_prefix,
  );

  const sortedIntakeResults = intakeResults.sort((a, b) => {
    const aIsPV = a.systemName.startsWith(translations.balanced_prefix);
    const bIsPV = b.systemName.startsWith(translations.balanced_prefix);
    if (aIsPV && !bIsPV) return 1;
    if (!aIsPV && bIsPV) return -1;
    if (!aIsPV && !bIsPV) {
      return a.systemName.localeCompare(b.systemName, undefined, { numeric: true });
    }
    return a.systemName.localeCompare(b.systemName, undefined, { numeric: true });
  });

  const results = [...sortedIntakeResults, ...exhaustResults];

  const groupedResults = groupBySystem(intakeResults);

  const columns = useGetColumns();

  return (
    <S.Results>
      <S.Label variant="h3">
        <span>{translations.title_first}</span> {translations.title_second}
      </S.Label>
      <Table data={results} columns={columns} />
      <S.ButtonWrapper>
        <PDFDownloadButton
          children={<VentilationResultsDocument results={results} />}
          fileName="Air_exchange_rate_table"
        />
      </S.ButtonWrapper>
      {Object.keys(groupedResults).length > 0 && (
        <S.TextWrapper>
          <S.Subtitle variant="h4">{translations.subtitle}</S.Subtitle>
          {Object.entries(groupedResults).map(([systemName, totalVentilation]) => (
            <S.Text key={systemName}>
              {systemName}: <span>{totalVentilation}</span> {translations.units}
            </S.Text>
          ))}
        </S.TextWrapper>
      )}
    </S.Results>
  );
};

export default VentilationCalculationResults;
