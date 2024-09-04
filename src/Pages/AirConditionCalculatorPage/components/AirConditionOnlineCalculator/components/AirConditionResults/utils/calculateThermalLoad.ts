import { IAirConditionEntity } from '@/models/air-condition';

import { calculateQ1 } from './calculateQ1';
import { calculateQ2 } from './calculateQ2';
import { calculateQ3 } from './calculateQ3';

export const calculateThermalLoad = (rooms: IAirConditionEntity[]) => {
  return rooms.map((room) => {
    const area = room.area
      ? room.area
      : room.width !== undefined && room.length !== undefined
      ? (room.width / 1000) * (room.length / 1000)
      : undefined;

    const Q1 = calculateQ1(
      area,
      room.ceilingHeight,
      room.insolationType,
      room.considerVentilation,
      room.exchangeRate,
      room.airflowRate,
      room.topFloor,
      room.panoramicWindows,
      room.windowArea,
      room.hotClimate,
      room.powerIncreaseType,
    );
    const Q2 = calculateQ2(room.people, room.physicalActivityType);
    const Q3 = calculateQ3(room.computers, room.TVs, room.appliances);

    let Q = Q1 + Q2 + Q3;

    Q = Math.round(Q * 100) / 100;

    return {
      systemName: `K${room.systemNumber}`,
      name: room.name,
      id: room.id,
      ceilingHeight: room.ceilingHeight && room.ceilingHeight / 1000,
      area,
      Q,
    };
  });
};
