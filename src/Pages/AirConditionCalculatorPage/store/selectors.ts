import { IAirConditionCalculatorStore } from './types';

export const getIsDefaultSettingsActive = (store: IAirConditionCalculatorStore) => 
  store.isDefaultSettingsActive;
export const getSetIsDefaultSettingsActive = (store: IAirConditionCalculatorStore) =>
  store.setIsDefaultSettingsActive;

export const getConsiderVentilation = (store: IAirConditionCalculatorStore) =>
  store.considerVentilation;
export const getSetConsiderVentilation = (store: IAirConditionCalculatorStore) =>
  store.setConsiderVentilation;

export const getTopFloor = (store: IAirConditionCalculatorStore) => store.topFloor;
export const getSetTopFloor = (store: IAirConditionCalculatorStore) => store.setTopFloor; 

export const getPanoramicWindows = (store: IAirConditionCalculatorStore) => store.panoramicWindows;
export const getSetPanoramicWindows = (store: IAirConditionCalculatorStore) =>
  store.setPanoramicWindows;

export const getHotClimate = (store: IAirConditionCalculatorStore) => store.hotClimate;
export const getSetHotClimate = (store: IAirConditionCalculatorStore) => store.setHotClimate;

export const getPowerIncreaseType = (store: IAirConditionCalculatorStore) =>
  store.powerIncreaseType;
export const getSetPowerIncreaseType = (store: IAirConditionCalculatorStore) =>
  store.setPowerIncreaseType;

export const getExchangeRate = (store: IAirConditionCalculatorStore) => store.exchangeRate;
export const getSetExchangeRate = (store: IAirConditionCalculatorStore) => store.setExchangeRate;

export const getWindowArea = (store: IAirConditionCalculatorStore) => store.windowArea;
export const getSetWindowArea = (store: IAirConditionCalculatorStore) => store.setWindowArea;
