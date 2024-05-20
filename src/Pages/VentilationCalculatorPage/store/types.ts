export interface IVentilationCalculatorStore {
  airflowRateType: 'max' | 'min' | 'custom';
  setAirflowRateType: (value: 'max' | 'min' | 'custom') => void;

  airflowRate: number;
  setAirflowRate: (value: number) => void;

  exchangeRateType: 'max' | 'min' | 'custom';
  setExchangeRateType: (value: 'max' | 'min' | 'custom') => void;

  exchangeRate: number;
  setExchangeRate: (value: number) => void;
}
