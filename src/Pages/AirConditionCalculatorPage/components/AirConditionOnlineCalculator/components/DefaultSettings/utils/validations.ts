import { useTranslation } from 'react-i18next';

import * as yup from 'yup';

export const useDefaultSettingsSchema = () => {
  const { t } = useTranslation('airConditionCalculator');

  return yup.object().shape({
    considerVentilation: yup
      .boolean()
      .required(t('airConditionCalculator:online_calculator:validations.consider_ventilation')),
    topFloor: yup
      .boolean()
      .required(t('airConditionCalculator:online_calculator:validations.top_floor')),
    panoramicWindows: yup
      .boolean()
      .required(t('airConditionCalculator:online_calculator:validations.panoramic_windows')),
    hotClimate: yup
      .boolean()
      .required(t('airConditionCalculator:online_calculator:validations.hot_climate')),
    powerIncreaseType: yup
      .string()
      .nullable()
      .when('hotClimate', {
        is: true,
        then: (schema) =>
          schema.required(t('airConditionCalculator:online_calculator:validations.power_increase')),
        otherwise: (schema) => schema.notRequired(),
      }),
    windowArea: yup.number().when('panoramicWindows', {
      is: true,
      then: (schema) =>
        schema
          .typeError(t('airConditionCalculator:online_calculator:validations.window_area.type'))
          .positive(t('airConditionCalculator:online_calculator:validations.window_area.positive'))
          .max(30, t('airConditionCalculator:online_calculator:validations.window_area.max'))
          .min(2.1, t('airConditionCalculator:online_calculator:validations.window_area.min'))
          .required(t('airConditionCalculator:online_calculator:validations.window_area.required')),
      otherwise: (schema) => schema.notRequired(),
    }),
    exchangeRate: yup.number().when('considerVentilation', {
      is: true,
      then: (schema) =>
        schema
          .typeError(t('airConditionCalculator:online_calculator:validations.window_area.type'))
          .positive(t('airConditionCalculator:online_calculator:validations.window_area.positive'))
          .max(20000, t('airConditionCalculator:online_calculator:validations.window_area.max'))
          .required(t('airConditionCalculator:online_calculator:validations.window_area.required')),
      otherwise: (schema) => schema.notRequired(),
    }),
  });
};
