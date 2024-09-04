import Table from '@/components/Table';

import { useGetColumns } from './constants';
import { IAirConditionResultsProps } from './types';
import { calculateThermalLoad } from './utils/calculateThermalLoad';

import * as S from './AirConditionResults.styles';

const AirConditionResults: React.FC<IAirConditionResultsProps> = (props) => {
  const { rooms } = props;

  const results = calculateThermalLoad(rooms);

  const sortedResults = results.sort((a, b) => {
    const getNumber = (systemName: string) => {
      const match = systemName.match(/\d+/);
      return match ? parseInt(match[0], 10) : 0;
    };

    return getNumber(a.systemName) - getNumber(b.systemName);
  });

  const columns = useGetColumns();

  return (
    <S.Results>
      <S.Label variant="h3">
        <span>Таблица расчета</span> тепловых нагрузок:
      </S.Label>
      <Table data={sortedResults} columns={columns} />
    </S.Results>
  );
};

export default AirConditionResults;
