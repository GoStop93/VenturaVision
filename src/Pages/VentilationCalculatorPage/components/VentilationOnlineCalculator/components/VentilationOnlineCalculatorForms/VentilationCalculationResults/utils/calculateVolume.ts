import { IVentilationEntity } from '@/models/ventilation';

import { SELECTED_OPTIONS } from '../../types';

export const calculateVolume = (room: IVentilationEntity): number => {
  if (room.selectedOption === SELECTED_OPTIONS.SQUARE && room.area && room.ceilingHeight) {
    return room.area * (room.ceilingHeight / 1000);
  } else if (
    room.selectedOption === SELECTED_OPTIONS.DIMENSIONS &&
    room.length &&
    room.width &&
    room.ceilingHeight
  ) {
    return (room.length / 1000) * (room.width / 1000) * (room.ceilingHeight / 1000);
  } else {
    return 0;
  }
};
