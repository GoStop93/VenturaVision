import { IVentilationEntity } from '../../../../../../models/ventilation';
import { ObjectValues } from '../../../../../../utils/helperTypes';

export const SELECTED_OPTIONS = {
  SQUARE: 'square',
  DIMENSIONS: 'dimensions',
};

export type SelectedOptions = ObjectValues<typeof SELECTED_OPTIONS>;

export const ROOM_TYPES_OPTIONS = {
  RESIDENTIAL_SPACE: 'Жилое помещение',
  BATHROOM: 'Ванная комната',
  TOILET: 'Туалет',
  LAUNDRY_ROOM: 'Постирочная',
};

export type RoomTypesOptions = ObjectValues<typeof ROOM_TYPES_OPTIONS>;

export interface IVentilationData {
  rooms?: IVentilationEntity[];
}
