import { Dispatch, SetStateAction } from 'react';

import { IAirConditionEntity } from '@/models/air-condition';
import { ObjectValues } from '@/utils/helperTypes';

export interface IAirConditionCalculatorFormProps {
  rooms: IAirConditionEntity[];
  setRooms: Dispatch<SetStateAction<IAirConditionEntity[]>>;
}

export interface IAirConditionData {
  rooms?: IAirConditionEntity[];
}

export const INSOLATION_TYPES_OPTIONS = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
};

export type InsolationTypesOptions = ObjectValues<typeof INSOLATION_TYPES_OPTIONS>;

export const SELECTED_VENTILATION_OPTIONS = {
  AIRFLOW_RATE: 'Airflow rate',
  AIR_EXCHANGE_RATE: 'Air exchange rate',
};

export type SelectedVentilationOption = ObjectValues<typeof INSOLATION_TYPES_OPTIONS>;

export const PHYSICAL_ACTIVITY_TYPES_OPTIONS = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
};

export type PhysicalActivityTypesOptions = ObjectValues<typeof PHYSICAL_ACTIVITY_TYPES_OPTIONS>;
