import * as yup from 'yup';

export const airflowRateSchema = yup.object().shape({
  airflowRate: yup
    .number()
    .typeError('Значение расхода должно быть числом')
    .positive('Значение расхода не может быть отрицательным')
    .max(150, 'Значение расхода не должно превышать 150')
    .required('Это обязательное поле'),
});