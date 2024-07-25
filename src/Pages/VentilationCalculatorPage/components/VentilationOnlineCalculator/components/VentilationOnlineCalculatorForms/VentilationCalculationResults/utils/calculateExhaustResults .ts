import { calculateVolume } from './calculateVolume';

import { IVentilationEntity } from '../../../../../../../../models/ventilation';
import { ROOM_TYPES_OPTIONS } from '../../types';

export const calculateExhaustResults = (
  exhaustSystems: IVentilationEntity[],
  bathroomExhaustRate: number,
  toiletExhaustRate: number,
  laundryRoomExhaustRate: number
) => {
  return exhaustSystems.map((room, index) => {
    const volume = calculateVolume(room);

    let ventilationRate = 0;

    if (room.roomType === ROOM_TYPES_OPTIONS.BATHROOM) {
      ventilationRate = bathroomExhaustRate;
    } else if (room.roomType === ROOM_TYPES_OPTIONS.TOILET) {
      ventilationRate = toiletExhaustRate;
    } else if (room.roomType === ROOM_TYPES_OPTIONS.LAUNDRY_ROOM) {
      ventilationRate = laundryRoomExhaustRate;
    }

    const finalVentilation = Math.round(volume * ventilationRate);

    const area = room.area
    ? room.area
    : (room.width !== undefined && room.length !== undefined)
      ? (room.width / 1000) * (room.length / 1000)
      : undefined;

    return {
      systemName: `B${index + 1}`,
      name: room.name,
      ventilation: finalVentilation,
      id: room.id,
      people: room.people,
      ceilingHeight: (room.ceilingHeight / 1000),
      area,
    };
  });
};
