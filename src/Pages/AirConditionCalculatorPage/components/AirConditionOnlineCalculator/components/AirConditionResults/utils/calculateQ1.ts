import {
  INSOLATION_TYPES_OPTIONS,
  InsolationTypesOptions,
} from '../../AirConditionCalculatorForm/types';

export const calculateQ1 = (
  area?: number,
  ceilingHeight?: number,
  insolationType?: InsolationTypesOptions,
  considerVentilation?: boolean,
  exchangeRate?: number,
  airflowRate?: number,
  topFloor?: boolean,
  panoramicWindows?: boolean,
  windowArea?: number,
  hotClimate?: boolean,
  powerIncreaseType?: string,
) => {
  let insolationMultiplier;
  let Q1 = 0;
  let increaseFactor = 1;

  switch (insolationType) {
    case INSOLATION_TYPES_OPTIONS.LOW:
      insolationMultiplier = 30;
      break;
    case INSOLATION_TYPES_OPTIONS.MEDIUM:
      insolationMultiplier = 35;
      break;
    case INSOLATION_TYPES_OPTIONS.HIGH:
      insolationMultiplier = 40;
      break;
    default:
      insolationMultiplier = 30;
  }

  if (area && ceilingHeight && considerVentilation) {
    let rate = 0;
    const volume = area * (ceilingHeight / 1000);
    if (exchangeRate && !airflowRate) {
      rate = exchangeRate;
    } else if (airflowRate) {
      rate = airflowRate / volume;
    }
    increaseFactor += rate / 10;
  }

  if (topFloor) {
    increaseFactor += 0.15;
  }

  if (hotClimate && powerIncreaseType) {
    increaseFactor += Number(powerIncreaseType) / 100;
  }

  if (area && ceilingHeight) {
    Q1 = (area * (ceilingHeight / 1000) * insolationMultiplier) / 1000;
    Q1 = Q1 * increaseFactor;
  }

  if (panoramicWindows && windowArea) {
    Q1 += windowArea * 0.15;
  }

  Q1 = Math.round(Q1 * 100) / 100;

  return Q1;
};
