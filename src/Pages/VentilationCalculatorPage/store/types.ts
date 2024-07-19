export interface IVentilationCalculatorStore {
  airflowRateType: 'max' | 'min' | 'custom';
  setAirflowRateType: (value: 'max' | 'min' | 'custom') => void;

  airflowRate: number;
  setAirflowRate: (value: number) => void;

  exchangeRateType: 'max' | 'min' | 'custom';
  setExchangeRateType: (value: 'max' | 'min' | 'custom') => void;

  exchangeRate: number;
  setExchangeRate: (value: number) => void;

  exhaustRateType: 'norm' | 'custom';
  setExhaustRateType: (value: 'norm' | 'custom') => void;

  bathroomExhaustRate: number;
  setBathroomExhaustRate: (value: number) => void;

  toiletExhaustRate: number;
  setToiletExhaustRate: (value: number) => void;

  laundryRoomExhaustRate: number;
  setLaundryRoomExhaustRate: (value: number) => void;
}
