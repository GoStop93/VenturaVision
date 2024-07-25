import { Typography } from '@mui/material';

import { IRoomEntity } from '../../../../../../../models/ventilation';
import { IColumnsConfig } from '../../../../../../../components/Table/types';

export const columns: IColumnsConfig<IRoomEntity> = [
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
    id: 'people',
    title: 'Количество людей',
    Cell: ({ item: room }) => <Typography>{room.people ? room.people : '-'}</Typography>,
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
    id: ' airflowCapacity',
    title: 'Расход воздуха, м³/ч',
    Cell: ({ item: room }) => <Typography>{room.ventilation}</Typography>,
  },
];
