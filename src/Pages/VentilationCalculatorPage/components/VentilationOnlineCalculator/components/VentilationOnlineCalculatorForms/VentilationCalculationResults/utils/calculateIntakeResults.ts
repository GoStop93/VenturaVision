import { calculateVolume } from './calculateVolume';
import { IVentilationEntity } from '../../../../../../../../models/ventilation';

export const calculateIntakeResults = (intakeSystem: IVentilationEntity[], exchangeRate: number, airflowRate: number) => {
  return intakeSystem.map((room) => {
    const volume = calculateVolume(room);

    const ventilationByVolume = volume * exchangeRate;
    const ventilationByPeople = (room.people || 0) * airflowRate;

    const finalVentilation = Math.round(Math.max(ventilationByVolume, ventilationByPeople));

    const area = room.area
    ? room.area
    : (room.width !== undefined && room.length !== undefined)
      ? (room.width / 1000) * (room.length / 1000)
      : undefined;

    return {
      systemName: 'П1/ПВ1',
      name: room.name,
      ventilation: finalVentilation,
      id: room.id,
      people: room.people,
      ceilingHeight: (room.ceilingHeight / 1000),
      area,
    };
  });
};
