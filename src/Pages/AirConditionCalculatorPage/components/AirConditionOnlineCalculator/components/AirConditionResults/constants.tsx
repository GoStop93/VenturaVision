import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import { IColumnsConfig } from '@/components/Table/types';

import { IRoomEntity } from '@/models/air-condition';

export const useGetColumns = (): IColumnsConfig<IRoomEntity> => {
  const { t } = useTranslation('airConditionCalculator');

  // const translations = {
  //   system_name: t('ventilationCalculator:online_calculator.results.columns.system_name'),
  //   room_name: t('ventilationCalculator:online_calculator.results.columns.room_name'),
  //   people: t('ventilationCalculator:online_calculator.results.columns.people'),
  //   height: t('ventilationCalculator:online_calculator.results.columns.height'),
  //   area: t('ventilationCalculator:online_calculator.results.columns.area'),
  //   airflowCapacity: t('ventilationCalculator:online_calculator.results.columns.airflowCapacity'),
  // };

  return [
    {
      id: 'systemName',
      title: '№ Системы',
      Cell: ({ item: room }) => <Typography>{room.systemName}</Typography>,
    },
    {
      id: 'roomName',
      title: 'Наименование помещения',
      Cell: ({ item: room }) => <Typography>{room.name}</Typography>,
    },
    {
      id: 'height',
      title: 'Высота помещения, м',
      Cell: ({ item: room }) => <Typography>{room.ceilingHeight}</Typography>,
    },
    {
      id: 'area',
      title: 'Площаль помещения, м²',
      Cell: ({ item: room }) => <Typography>{room.area}</Typography>,
    },
    {
      id: 'coolingCapacity',
      title: 'Расчетная мощность охлаждения Q, кВТ',
      Cell: ({ item: room }) => <Typography>{room.Q}</Typography>,
    },
    {
      id: 'coolingCapacityRange',
      title: 'Рекомендуемый диапазон мощности кондиционера Qrange, кВТ',
      Cell: ({ item: room }) => {
        if (!room.Q) {
          return <Typography>-</Typography>;
        }
        const minQ = (room.Q * 0.95).toFixed(2);
        const maxQ = (room.Q * 1.2).toFixed(2);
        return <Typography>{`${minQ} - ${maxQ}`}</Typography>;
      },
    },
  ];
};
