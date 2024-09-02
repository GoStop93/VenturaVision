import { powerIncreasePercentageTypes } from '../components/AirConditionOnlineCalculator/components/AirConditionForm/AirConditionForm';

export interface IAirConditionCalculatorStore {
  considerVentilation: boolean;
  setConsiderVentilation: (value: boolean) => void;

  topFloor: boolean;
  setTopFloor: (value: boolean) => void;

  panoramicWindows: boolean;
  setPanoramicWindows: (value: boolean) => void;

  hotClimate: boolean;
  setHotClimate: (value: boolean) => void;

  powerIncreaseType: keyof typeof powerIncreasePercentageTypes;
  setPowerIncreaseType: (value: keyof typeof powerIncreasePercentageTypes) => void;

  exchangeRate?: number;
  setExchangeRate: (value: number) => void;

  windowArea?: number;
  setWindowArea: (value: number) => void;
}
