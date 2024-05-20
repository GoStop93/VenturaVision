import * as yup from 'yup';

export const exchangeRateSchema = yup.object().shape({
  exchangeRate: yup
    .number()
    .typeError('Значение кратности должно быть числом')
    .positive('Значение кратности не может быть отрицательным')
    .max(20, 'Значение кратности не должно превышать 20')
    .required('Это обязательное поле'),
});