import * as yup from 'yup';

export const exhaustRateSchema = yup.object().shape({
  bathroomExhaustRate: yup
    .number()
    .typeError('Значение кратности должно быть числом')
    .positive('Значение кратности не может быть отрицательным')
    .max(20, 'Значение кратности не должно превышать 20')
    .required('Это обязательное поле'),
  toiletExhaustRate: yup
    .number()
    .typeError('Значение кратности должно быть числом')
    .positive('Значение кратности не может быть отрицательным')
    .max(20, 'Значение кратности не должно превышать 20')
    .required('Это обязательное поле'),
  laundryRoomExhaustRate: yup
    .number()
    .typeError('Значение кратности должно быть числом')
    .positive('Значение кратности не может быть отрицательным')
    .max(20, 'Значение кратности не должно превышать 20')
    .required('Это обязательное поле'),
});
