import {
  PHYSICAL_ACTIVITY_TYPES_OPTIONS,
  PhysicalActivityTypesOptions,
} from '../../AirConditionCalculatorForm/types';

export const calculateQ2 = (
  people?: number,
  physicalActivityType?: PhysicalActivityTypesOptions,
) => {
  let Q2 = 0;
  let activityMultiplier;

  switch (physicalActivityType) {
    case PHYSICAL_ACTIVITY_TYPES_OPTIONS.LOW:
      activityMultiplier = 0.1;
      break;
    case PHYSICAL_ACTIVITY_TYPES_OPTIONS.MEDIUM:
      activityMultiplier = 0.13;
      break;
    case PHYSICAL_ACTIVITY_TYPES_OPTIONS.HIGH:
      activityMultiplier = 0.2;
      break;
    default:
      activityMultiplier = 0.1;
  }

  if (people && physicalActivityType) {
    Q2 = people * activityMultiplier;
    Q2 = Math.round(Q2 * 100) / 100;
  }

  return Q2;
};
