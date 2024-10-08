import { Dispatch, SetStateAction } from 'react';

import { IVentilationEntity } from '@/models/ventilation';
import { ObjectValues } from '@/utils/helperTypes';

export interface IVentilationOnlineCalculatorFormsProps {
  rooms: IVentilationEntity[];
  setRooms: Dispatch<SetStateAction<IVentilationEntity[]>>;
}

export const SELECTED_OPTIONS = {
  SQUARE: 'square',
  DIMENSIONS: 'dimensions',
};

export type SelectedOptions = ObjectValues<typeof SELECTED_OPTIONS>;

export const ROOM_TYPES_OPTIONS = {
  RESIDENTIAL_SPACE: 'Living Quarters',
  BATHROOM: 'Bathroom',
  TOILET: 'Water Closet',
  LAUNDRY_ROOM: 'Laundry Room',
};

export type RoomTypesOptions = ObjectValues<typeof ROOM_TYPES_OPTIONS>;

export const SYSTEM_TYPES_OPTIONS = {
  SUPPLY: 'Supply',
  BALANCED: 'Balanced',
};

export type SystemTypesOptions = ObjectValues<typeof SYSTEM_TYPES_OPTIONS>;

export interface IVentilationData {
  rooms?: IVentilationEntity[];
}
