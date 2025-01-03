import { useTranslation } from 'react-i18next';

import PDFDownloadButton from '@/components/PDFDownloadButton';
import Table from '@/components/Table';

import { useGetColumns } from './constants';
import { IAirConditionResultsProps } from './types';
import AirConditionResultsDocument from '../AirConditionResultsDocument';
import { calculateThermalLoad } from './utils/calculateThermalLoad';
import { groupBySystem } from './utils/groupBySystem';

import * as S from './AirConditionResults.styles';

const AirConditionResults: React.FC<IAirConditionResultsProps> = (props) => {
  const { rooms } = props;

  const { t } = useTranslation('airConditionCalculator');

  const translations = {
    title_first: t('airConditionCalculator:online_calculator.results.title_first'),
    title_second: t('airConditionCalculator:online_calculator.results.title_second'),
    subtitle: t('airConditionCalculator:online_calculator.results.subtitle'),
    kilowatt: t('airConditionCalculator:online_calculator.results.kilowatt'),
    prefix: t('airConditionCalculator:online_calculator.results.prefix'),
  };

  const results = calculateThermalLoad(rooms, translations.prefix);

  const sortedResults = results.sort((a, b) => {
    const getNumber = (systemName: string) => {
      const match = systemName.match(/\d+/);
      return match ? parseInt(match[0], 10) : 0;
    };

    return getNumber(a.systemName) - getNumber(b.systemName);
  });

  const columns = useGetColumns();

  const groupedResults = groupBySystem(sortedResults);

  return (
    <S.Results>
      <S.Label variant="h3">
        <span>{translations.title_first}</span> {translations.title_second}
      </S.Label>
      <Table data={sortedResults} columns={columns} />
      <S.ButtonWrapper>
        <PDFDownloadButton
          children={<AirConditionResultsDocument results={sortedResults} />}
          fileName="Thermal_load_calculation_table"
        />
      </S.ButtonWrapper>
      {Object.keys(groupedResults).length > 0 && (
        <S.TextWrapper>
          <S.Subtitle variant="h4">{translations.subtitle}</S.Subtitle>
          {Object.entries(groupedResults).map(([systemName, { minQ, maxQ }]) => (
            <S.Text key={systemName}>
              {systemName}: <span>{minQ}</span> - <span>{maxQ}</span> {translations.kilowatt}
            </S.Text>
          ))}
        </S.TextWrapper>
      )}
    </S.Results>
  );
};

export default AirConditionResults;
