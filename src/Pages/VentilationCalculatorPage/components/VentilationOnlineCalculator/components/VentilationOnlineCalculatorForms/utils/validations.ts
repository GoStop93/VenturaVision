import * as yup from 'yup';

const roomSchema = yup.object({
  id: yup.string().required('ID обязателен'),
  roomNumber: yup.number().typeError('Номер комнаты должен быть числом').required('Номер комнаты обязателен'),
  roomType: yup.string().required('Тип комнаты обязателен'),
  selectedOption: yup.string().required('Выберите опцию'),
  name: yup.string().required('Наименование помещения обязательно'),
  ceilingHeight: yup
    .number()
    .typeError('Высота потолка должна быть числом')
    .positive('Высота потолка должна быть положительным числом')
    .max(20000, 'Высота потолка не должна превышать 20000 мм')
    .required('Высота потолка обязательна'),
  length: yup
    .number()
    .typeError('Длина помещения должна быть числом')
    .when('selectedOption', {
      is: 'dimensions',
      then: (schema) =>
        schema
          .required('Длина помещения обязательное поле')
          .positive('Длина помещения должна быть положительным числом')
          .max(100000, 'Длина помещения не должна превышать 100000 мм'),
      otherwise: (schema) => schema.notRequired(),
    }),
  width: yup
    .number()
    .typeError('Ширина должна быть числом')
    .when('selectedOption', {
      is: 'dimensions',
      then: (schema) =>
        schema
          .required('Ширина помещения обязательное поле')
          .positive('Ширина помещения должна быть положительным числом')
          .max(100000, 'Ширина помещения не должна превышать 100000 мм'),
      otherwise: (schema) => schema.notRequired(),
    }),
  area: yup
    .number()
    .typeError('Площадь должна быть числом')
    .when('selectedOption', {
      is: 'square',
      then: (schema) => schema.required('Площадь помещения обязательное поле').max(100000, 'Площадь помещения не должна превышать 100000 мм'),
      otherwise: (schema) => schema.notRequired(),
    }),
  people: yup
    .number()
    .typeError('Количество людей должно быть числом')

    .when('roomType', {
      is: 'Жилое помещение',
      then: (schema) =>
        schema
          .required('Количество людей обязательно для жилого помещения')
          .max(20, 'Количество людей  не должно превышать 20')
          .positive('Количество людей должно быть положительным числом'),
      otherwise: (schema) => schema.notRequired(),
    }),
});

const ventilationSchema = yup.object({
  rooms: yup.array().of(roomSchema).required('Список комнат обязателен'),
});

export default ventilationSchema;
