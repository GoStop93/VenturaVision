import { useTranslation } from 'react-i18next';

import * as yup from 'yup';

import { SELECTED_OPTIONS } from '@/pages/VentilationCalculatorPage/components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/types';

import { SELECTED_VENTILATION_OPTIONS } from '../types';

export const useRoomAirConditionSchema = () => {
  const { t } = useTranslation('airConditionCalculator');

  return yup.object({
    id: yup.string().required(t('airConditionCalculator:online_calculator:validations.id')),
    insolationType: yup
      .string()
      .required(t('airConditionCalculator:online_calculator:validations.insolationType')),
    roomNumber: yup
      .number()
      .typeError(t('airConditionCalculator:online_calculator:validations.room_number.type'))
      .required(t('airConditionCalculator:online_calculator:validations.room_number.required')),
    selectedOption: yup
      .string()
      .required(t('airConditionCalculator:online_calculator:validations.selected_option')),
    name: yup.string().required(t('airConditionCalculator:online_calculator:validations.name')),
    length: yup
      .number()
      .typeError(t('airConditionCalculator:online_calculator:validations.length.type'))
      .when('selectedOption', {
        is: SELECTED_OPTIONS.DIMENSIONS,
        then: (schema) =>
          schema
            .required(t('airConditionCalculator:online_calculator:validations.length.required'))
            .positive(t('airConditionCalculator:online_calculator:validations.length.positive'))
            .max(100000, t('airConditionCalculator:online_calculator:validations.length.max')),
        otherwise: (schema) => schema.notRequired(),
      }),
    width: yup
      .number()
      .typeError(t('airConditionCalculator:online_calculator:validations.width.type'))
      .when('selectedOption', {
        is: SELECTED_OPTIONS.DIMENSIONS,
        then: (schema) =>
          schema
            .required(t('airConditionCalculator:online_calculator:validations.width.required'))
            .positive(t('airConditionCalculator:online_calculator:validations.width.positive'))
            .max(100000, t('airConditionCalculator:online_calculator:validations.width.max')),
        otherwise: (schema) => schema.notRequired(),
      }),
    area: yup
      .number()
      .typeError(t('airConditionCalculator:online_calculator:validations.area.type'))
      .when('selectedOption', {
        is: SELECTED_OPTIONS.SQUARE,
        then: (schema) =>
          schema
            .required(t('airConditionCalculator:online_calculator:validations.area.required'))
            .positive(t('airConditionCalculator:online_calculator:validations.area.positive'))
            .max(1000, t('airConditionCalculator:online_calculator:validations.area.max')),
        otherwise: (schema) => schema.notRequired(),
      }),
    ceilingHeight: yup
      .number()
      .typeError(t('airConditionCalculator:online_calculator:validations.ceiling_height.type'))
      .positive(t('airConditionCalculator:online_calculator:validations.ceiling_height.positive'))
      .max(20000, t('airConditionCalculator:online_calculator:validations.ceiling_height.max'))
      .required(t('airConditionCalculator:online_calculator:validations.ceiling_height.required')),
    people: yup
      .number()
      .nullable()
      .transform((value, originalValue) => (originalValue === '' ? undefined : value))
      .typeError(t('airConditionCalculator:online_calculator:validations.people.type'))
      .positive(t('airConditionCalculator:online_calculator:validations.people.positive'))
      .max(20, t('airConditionCalculator:online_calculator:validations.people.max')),
    computers: yup
      .number()
      .nullable()
      .transform((value, originalValue) => (originalValue === '' ? undefined : value))
      .typeError(t('airConditionCalculator:online_calculator:validations.computers.type'))
      .positive(t('airConditionCalculator:online_calculator:validations.computers.positive'))
      .max(10, t('airConditionCalculator:online_calculator:validations.computers.max')),
    TVs: yup
      .number()
      .nullable()
      .transform((value, originalValue) => (originalValue === '' ? undefined : value))
      .typeError(t('airConditionCalculator:online_calculator:validations.TVs.type'))
      .positive(t('airConditionCalculator:online_calculator:validations.TVs.positive'))
      .max(10, t('airConditionCalculator:online_calculator:validations.TVs.max')),
    appliances: yup
      .number()
      .nullable()
      .transform((value, originalValue) => (originalValue === '' ? undefined : value))
      .typeError(t('airConditionCalculator:online_calculator:validations.appliances.type'))
      .positive(t('airConditionCalculator:online_calculator:validations.appliances.positive'))
      .max(10, t('airConditionCalculator:online_calculator:validations.appliances.max')),
    panoramicWindows: yup
      .boolean()
      .required(t('airConditionCalculator:online_calculator:validations.panoramic_windows')),
    windowArea: yup.number().when('panoramicWindows', {
      is: true,
      then: (schema) =>
        schema
          .typeError(t('airConditionCalculator:online_calculator:validations.window_area.type'))
          .positive(t('airConditionCalculator:online_calculator:validations.window_area.positive'))
          .max(30, t('airConditionCalculator:online_calculator:validations.window_area.max'))
          .required(t('airConditionCalculator:online_calculator:validations.window_area.required')),
      otherwise: (schema) => schema.notRequired(),
    }),
    topFloor: yup
      .boolean()
      .required(t('airConditionCalculator:online_calculator:validations.top_floor')),
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
    considerVentilation: yup
      .boolean()
      .required(t('airConditionCalculator:online_calculator:validations.consider_ventilation')),
    selectedVentilationOption: yup
      .string()
      .required(
        t('airConditionCalculator:online_calculator:validations.selected_ventilation_option'),
      ),
    exchangeRate: yup.number().when(['considerVentilation', 'selectedVentilationOption'], {
      is: (considerVentilation: boolean, selectedVentilationOption: string) =>
        considerVentilation === true &&
        selectedVentilationOption === SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE,
      then: (schema) =>
        schema
          .required(
            t('airConditionCalculator:online_calculator:validations.exchange_rate.required'),
          )
          .typeError(t('airConditionCalculator:online_calculator:validations.exchange_rate.type'))
          .positive(
            t('airConditionCalculator:online_calculator:validations.exchange_rate.positive'),
          )
          .max(20, t('airConditionCalculator:online_calculator:validations.exchange_rate.max')),
      otherwise: (schema) => schema.notRequired(),
    }),
    airflowRate: yup.number().when(['considerVentilation', 'selectedVentilationOption'], {
      is: (considerVentilation: boolean, selectedVentilationOption: string) =>
        considerVentilation === true &&
        selectedVentilationOption === SELECTED_VENTILATION_OPTIONS.AIRFLOW_RATE,
      then: (schema) =>
        schema
          .required(t('airConditionCalculator:online_calculator:validations.airflow_rate.required'))
          .typeError(t('airConditionCalculator:online_calculator:validations.airflow_rate.type'))
          .positive(t('airConditionCalculator:online_calculator:validations.airflow_rate.positive'))
          .max(1000, t('airConditionCalculator:online_calculator:validations.airflow_rate.max')),
      otherwise: (schema) => schema.notRequired(),
    }),
  });
};

export const useAirConditionSchema = () => {
  const { t } = useTranslation('airConditionCalculator');
  const roomSchema = useRoomAirConditionSchema();

  return yup.object({
    rooms: yup
      .array()
      .of(roomSchema)
      .required(t('airConditionCalculator:online_calculator:validations.list_of_rooms')),
  });
};
