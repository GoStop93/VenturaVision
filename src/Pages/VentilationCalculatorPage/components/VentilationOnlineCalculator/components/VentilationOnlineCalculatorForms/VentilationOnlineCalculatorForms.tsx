import { useState } from 'react';
import { FormProvider, useForm, useFieldArray } from 'react-hook-form';

import { v4 as uuidv4 } from 'uuid';

import VentilationForm from './VentilationForm';
import VentilationCalculationResults from './VentilationCalculationResults';

import { IVentilationData, ROOM_TYPES_OPTIONS, SELECTED_OPTIONS } from './types';

import { yupResolver } from '@hookform/resolvers/yup';
import ventilationSchema from './utils/validations';
import { IVentilationEntity } from '../../../../../../models/ventilation';

import * as S from './VentilationOnlineCalculatorForms.styles';

const MAX_ROOMS = 30;

const VentilationOnlineCalculatorForms: React.FC = () => {
  const [rooms, setRooms] = useState<IVentilationEntity[]>([]);

  const methods = useForm({
    resolver: yupResolver(ventilationSchema),
    mode: 'onChange',
    defaultValues: {
      rooms: [
        {
          id: uuidv4(),
          roomNumber: 1,
          roomType: ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE,
          selectedOption: SELECTED_OPTIONS.SQUARE,
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
      roomType: ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE,
      selectedOption: SELECTED_OPTIONS.SQUARE,
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
          roomType: ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE,
          selectedOption: SELECTED_OPTIONS.SQUARE,
          name: '',
          ceilingHeight: 0,
          length: 0,
          width: 0,
          area: 0,
          people: 0,
        },
      ],
    });
    setRooms([]);
  };

  const onSubmit = (data: IVentilationData) => {
    if (data.rooms) {
      setRooms(data.rooms);
    }
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
        {rooms.length > 0 && <VentilationCalculationResults rooms={rooms} />}
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
