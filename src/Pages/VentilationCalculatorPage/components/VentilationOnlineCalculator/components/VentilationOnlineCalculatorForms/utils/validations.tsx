import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import { ROOM_TYPES_OPTIONS, SELECTED_OPTIONS } from '../types';

export const useRoomSchema = () => {
  const { t } = useTranslation('ventilationCalculator');

  return yup.object({
    id: yup.string().required(t('ventilationCalculator:online_calculator:validations.id')),
    roomNumber: yup
      .number()
      .typeError(t('ventilationCalculator:online_calculator:validations.room_number.type'))
      .required(t('ventilationCalculator:online_calculator:validations.room_number.required')),
    roomType: yup.string().required(t('ventilationCalculator:online_calculator:validations.room_type')),
    systemType: yup.string().required(t('ventilationCalculator:online_calculator:validations.system_type')),
    selectedOption: yup.string().required(t('ventilationCalculator:online_calculator:validations.selected_option')),
    name: yup.string().required(t('ventilationCalculator:online_calculator:validations.name')),
    systemNumber: yup
      .number()
      .typeError(t('ventilationCalculator:online_calculator:validations.system_number.type'))
      .when('roomType', {
        is: ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE,
        then: (schema) =>
          schema
            .required(t('ventilationCalculator:online_calculator:validations.system_number.required'))
            .positive(t('ventilationCalculator:online_calculator:validations.system_number.positive'))
            .max(10, t('ventilationCalculator:online_calculator:validations.system_number.max')),
        otherwise: (schema) => schema.notRequired(),
      }),
    ceilingHeight: yup
      .number()
      .typeError(t('ventilationCalculator:online_calculator:validations.ceiling_height.type'))
      .positive(t('ventilationCalculator:online_calculator:validations.ceiling_height.positive'))
      .max(20000, t('ventilationCalculator:online_calculator:validations.ceiling_height.max'))
      .required(t('ventilationCalculator:online_calculator:validations.ceiling_height.required')),
    length: yup
      .number()
      .typeError(t('ventilationCalculator:online_calculator:validations.length.type'))
      .when('selectedOption', {
        is: SELECTED_OPTIONS.DIMENSIONS,
        then: (schema) =>
          schema
            .required(t('ventilationCalculator:online_calculator:validations.length.required'))
            .positive(t('ventilationCalculator:online_calculator:validations.length.positive'))
            .max(100000, t('ventilationCalculator:online_calculator:validations.length.max')),
        otherwise: (schema) => schema.notRequired(),
      }),
    width: yup
      .number()
      .typeError(t('ventilationCalculator:online_calculator:validations.width.type'))
      .when('selectedOption', {
        is: SELECTED_OPTIONS.DIMENSIONS,
        then: (schema) =>
          schema
            .required(t('ventilationCalculator:online_calculator:validations.width.required'))
            .positive(t('ventilationCalculator:online_calculator:validations.width.positive'))
            .max(100000, t('ventilationCalculator:online_calculator:validations.width.max')),
        otherwise: (schema) => schema.notRequired(),
      }),
    area: yup
      .number()
      .typeError(t('ventilationCalculator:online_calculator:validations.area.type'))
      .when('selectedOption', {
        is: SELECTED_OPTIONS.SQUARE,
        then: (schema) =>
          schema
            .required(t('ventilationCalculator:online_calculator:validations.area.required'))
            .positive(t('ventilationCalculator:online_calculator:validations.area.positive'))
            .max(1000, t('ventilationCalculator:online_calculator:validations.area.max')),
        otherwise: (schema) => schema.notRequired(),
      }),
    people: yup
      .number()
      .typeError(t('ventilationCalculator:online_calculator:validations.people.type'))
      .when('roomType', {
        is: ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE,
        then: (schema) =>
          schema
            .required(t('ventilationCalculator:online_calculator:validations.people.required'))
            .positive(t('ventilationCalculator:online_calculator:validations.people.positive'))
            .max(20, t('ventilationCalculator:online_calculator:validations.people.max')),
        otherwise: (schema) => schema.notRequired(),
      }),
  });
};

export const useVentilationSchema = () => {
  const { t } = useTranslation('ventilationCalculator');
  const roomSchema = useRoomSchema();

  return yup.object({
    rooms: yup.array().of(roomSchema).required(t('ventilationCalculator:online_calculator:validations.list_of_rooms')),
  });
};
