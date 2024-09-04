import {
  InsolationTypesOptions,
  PhysicalActivityTypesOptions,
  SelectedVentilationOption,
} from '@/pages/AirConditionCalculatorPage/components/AirConditionOnlineCalculator/components/AirConditionCalculatorForm/types';
import { SelectedOptions } from '@/pages/VentilationCalculatorPage/components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/types';

export interface IAirConditionEntity {
  id: string;
  insolationType: InsolationTypesOptions;
  physicalActivityType: PhysicalActivityTypesOptions;
  roomNumber: number;
  systemNumber: number;
  selectedOption: SelectedOptions;
  name: string;
  ceilingHeight: number;
  length?: number;
  width?: number;
  area?: number;
  people?: number;
  computers?: number;
  TVs?: number;
  appliances?: number;
  panoramicWindows?: boolean;
  windowArea?: number;
  topFloor?: boolean;
  hotClimate?: boolean;
  powerIncreaseType?: string;
  considerVentilation?: boolean;
  selectedVentilationOption?: SelectedVentilationOption;
  exchangeRate?: number;
  airflowRate?: number;
}

export interface IRoomEntity {
  systemName: string;
  name: string;
  id: string;
  ceilingHeight?: number;
  area?: number;
  Q?: number;
}
