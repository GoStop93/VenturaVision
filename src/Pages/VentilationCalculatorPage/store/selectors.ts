import { IVentilationCalculatorStore } from './types';

export const getAirflowRateType = (store: IVentilationCalculatorStore) => store.airflowRateType;
export const getSetAirflowRateType = (store: IVentilationCalculatorStore) => store.setAirflowRateType;

export const getAirflowRate = (store: IVentilationCalculatorStore) => store.airflowRate;
export const getSetAirflowRate = (store: IVentilationCalculatorStore) => store.setAirflowRate;

export const getExchangeRateType = (store: IVentilationCalculatorStore) => store.exchangeRateType;
export const getSetExchangeRateType = (store: IVentilationCalculatorStore) => store.setExchangeRateType;

export const getExchangeRate = (store: IVentilationCalculatorStore) => store.exchangeRate;
export const getSetExchangeRate = (store: IVentilationCalculatorStore) => store.setExchangeRate;

export const getExhaustRateType = (store: IVentilationCalculatorStore) => store.exhaustRateType;
export const getSetExhaustRateType = (store: IVentilationCalculatorStore) => store.setExhaustRateType;

export const getBathroomExhaustRate = (store: IVentilationCalculatorStore) => store.bathroomExhaustRate;
export const getSetBathroomExhaustRate = (store: IVentilationCalculatorStore) => store.setBathroomExhaustRate;

export const getToiletExhaustRate = (store: IVentilationCalculatorStore) => store.toiletExhaustRate;
export const getSetToiletExhaustRate = (store: IVentilationCalculatorStore) => store.setToiletExhaustRate;

export const getLaundryRoomExhaustRate = (store: IVentilationCalculatorStore) => store.laundryRoomExhaustRate;
export const getSetLaundryRoomExhaustRate = (store: IVentilationCalculatorStore) => store.setLaundryRoomExhaustRate;
