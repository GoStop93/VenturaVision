import { IVentilationCalculatorStore } from "./types";

export const getAirflowRateType = (store: IVentilationCalculatorStore) => store.airflowRateType;
export const getSetAirflowRateType = (store: IVentilationCalculatorStore) => store.setAirflowRateType;

export const getAirflowRate = (store: IVentilationCalculatorStore) => store.airflowRate;
export const getSetAirflowRate = (store: IVentilationCalculatorStore) => store.setAirflowRate;

export const getExchangeRateType = (store: IVentilationCalculatorStore) => store.exchangeRateType;
export const getSetExchangeRateType = (store: IVentilationCalculatorStore) => store.setExchangeRateType;

export const getExchangeRate = (store: IVentilationCalculatorStore) => store.exchangeRate;
export const getSetExchangeRate = (store: IVentilationCalculatorStore) => store.setExchangeRate;