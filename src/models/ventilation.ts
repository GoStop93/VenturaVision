import {
  SelectedOptions,
  RoomTypesOptions,
} from '../pages/VentilationCalculatorPage/components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/types';

export interface IVentilationEntity {
  id: string;
  roomNumber: number;
  roomType: RoomTypesOptions;
  selectedOption: SelectedOptions;
  name: string;
  ceilingHeight: number;
  length?: number;
  width?: number;
  area?: number;
  people?: number;
}

export interface IRoomEntity {
  systemName: string,
  name: string,
  ventilation: number,
  id: string,
  people?: number,
  ceilingHeight: number,
  area?: number,
}
