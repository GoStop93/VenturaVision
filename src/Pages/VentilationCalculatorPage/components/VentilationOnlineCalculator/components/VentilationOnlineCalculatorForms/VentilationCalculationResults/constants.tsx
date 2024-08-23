import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import { IColumnsConfig } from '@/components/Table/types';

import { IRoomEntity } from '@/models/ventilation';

export const useGetColumns = (): IColumnsConfig<IRoomEntity> => {
  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    system_name: t('ventilationCalculator:online_calculator.results.columns.system_name'),
    room_name: t('ventilationCalculator:online_calculator.results.columns.room_name'),
    people: t('ventilationCalculator:online_calculator.results.columns.people'),
    height: t('ventilationCalculator:online_calculator.results.columns.height'),
    area: t('ventilationCalculator:online_calculator.results.columns.area'),
    airflowCapacity: t('ventilationCalculator:online_calculator.results.columns.airflowCapacity'),
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
      id: 'people',
      title: translations.people,
      Cell: ({ item: room }) => <Typography>{room.people ? room.people : '-'}</Typography>,
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
      id: ' airflowCapacity',
      title: translations.airflowCapacity,
      Cell: ({ item: room }) => <Typography>{room.ventilation}</Typography>,
    },
  ];
};
