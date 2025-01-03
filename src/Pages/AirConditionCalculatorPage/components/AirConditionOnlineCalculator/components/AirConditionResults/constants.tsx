import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import { IColumnsConfig } from '@/components/Table/types';

import { IRoomEntity } from '@/models/air-condition';

export const useGetColumns = (): IColumnsConfig<IRoomEntity> => {
  const { t } = useTranslation('airConditionCalculator');

  const translations = {
    system_name: t('airConditionCalculator:online_calculator.results.columns.system_name'),
    height: t('airConditionCalculator:online_calculator.results.columns.height'),
    room_name: t('airConditionCalculator:online_calculator.results.columns.room_name'),
    area: t('airConditionCalculator:online_calculator.results.columns.area'),
    cooling_capacity: t('airConditionCalculator:online_calculator.results.columns.cooling_capacity'),
    power_range: t('airConditionCalculator:online_calculator.results.columns.power_range'),
  };

  return [
    {
      id: 'systemName',
      title: translations.system_name,
      Cell: ({ item: room }) => <Typography>{room.systemName}</Typography>,
    },
    {
      id: 'roomName',
      title: translations.room_name,
      Cell: ({ item: room }) => <Typography>{room.name}</Typography>,
    },
    {
      id: 'height',
      title: translations.height,
      Cell: ({ item: room }) => <Typography>{room.ceilingHeight}</Typography>,
    },
    {
      id: 'area',
      title: translations.area,
      Cell: ({ item: room }) => <Typography>{room.area}</Typography>,
    },
    {
      id: 'coolingCapacity',
      title: translations.cooling_capacity,
      Cell: ({ item: room }) => <Typography>{room.Q}</Typography>,
    },
    {
      id: 'coolingCapacityRange',
      title: translations.power_range,
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
