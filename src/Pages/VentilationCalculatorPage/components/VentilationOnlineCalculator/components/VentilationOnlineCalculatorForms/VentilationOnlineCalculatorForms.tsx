import { v4 as uuidv4 } from 'uuid';

import VentilationForm from './VentilationForm';

import * as S from './VentilationOnlineCalculatorForms.styles';
import { FormProvider, useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ventilationSchema from './utils/validations';

const MAX_ROOMS = 30;

const VentilationOnlineCalculatorForms: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(ventilationSchema),
    mode: 'onChange',
    defaultValues: {
      rooms: [
        {
          id: uuidv4(),
          roomNumber: 1,
          roomType: 'Жилое помещение',
          selectedOption: 'square',
          name: '',
          ceilingHeight: 0,
          length: 0,
          width: 0,
          area: 0,
          people: 0,
        },
      ],
    },
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rooms',
  });

  const addForm = () => {
    append({
      id: uuidv4(),
      roomNumber: fields.length + 1,
      roomType: 'Жилое помещение',
      selectedOption: 'square',
      name: '',
      ceilingHeight: 0,
      length: 0,
      width: 0,
      area: 0,
      people: 0,
    });
  };

  const removeForm = (index: number) => {
    remove(index);
  };

  const resetForms = () => {
    reset({
      rooms: [
        {
          id: uuidv4(),
          roomNumber: 1,
          roomType: 'Жилое помещение',
          selectedOption: 'square',
          name: '',
          ceilingHeight: 0,
          length: 0,
          width: 0,
          area: 0,
          people: 0,
        },
      ],
    });
  };
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <S.VentilationCalculator>
        <S.FormsWrapper>
          {fields.map((field, index) => (
            <VentilationForm
              key={field.id}
              control={control}
              index={index}
              roomNumber={index + 1}
              amountOfRooms={fields.length}
              onRemove={() => removeForm(index)}
              errors={errors.rooms?.[index]}
            />
          ))}
          <S.AddButton variant="contained" size="large" onClick={addForm} disabled={fields.length >= MAX_ROOMS}>
            + добавить комнату
          </S.AddButton>
        </S.FormsWrapper>
        <S.ButtonsWrapper>
          <S.MenuButton size="large" onClick={handleSubmit(onSubmit)}>
            Submit
          </S.MenuButton>
          <S.MenuButton variant="outlined" size="large" onClick={resetForms}>
            Reset
          </S.MenuButton>
        </S.ButtonsWrapper>
      </S.VentilationCalculator>
    </FormProvider>
  );
};

export default VentilationOnlineCalculatorForms;
