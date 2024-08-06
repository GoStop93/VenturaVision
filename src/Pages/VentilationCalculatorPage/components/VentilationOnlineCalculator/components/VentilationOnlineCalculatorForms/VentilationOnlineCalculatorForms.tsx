import { useEffect } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

import { v4 as uuidv4 } from 'uuid';

import VentilationForm from './VentilationForm';
import VentilationCalculationResults from './VentilationCalculationResults';

import { IVentilationData, ROOM_TYPES_OPTIONS, SELECTED_OPTIONS, SYSTEM_TYPES_OPTIONS, IVentilationOnlineCalculatorFormsProps } from './types';

import * as S from './VentilationOnlineCalculatorForms.styles';

const MAX_ROOMS = 30;

const VentilationOnlineCalculatorForms: React.FC<IVentilationOnlineCalculatorFormsProps> = (props) => {
  const { rooms, setRooms } = props;

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rooms',
  });

  const addForm = () => {
    append({
      id: uuidv4(),
      roomNumber: fields.length + 1,
      roomType: ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE,
      systemType: SYSTEM_TYPES_OPTIONS.SUPPLY,
      systemNumber: 1,
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
          systemType: SYSTEM_TYPES_OPTIONS.SUPPLY,
          systemNumber: 1,
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

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setRooms([]);
    }
  }, [errors]);

  return (
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
            errors={Array.isArray(errors.rooms) ? errors.rooms[index] : undefined}
          />
        ))}
        <S.AddButton variant="contained" size="large" onClick={addForm} disabled={fields.length >= MAX_ROOMS}>
          + добавить комнату
        </S.AddButton>
      </S.FormsWrapper>
      {rooms.length > 0 && (!errors || Object.keys(errors).length < 1) && <VentilationCalculationResults rooms={rooms} />}
      <S.ButtonsWrapper>
        <S.MenuButton size="large" onClick={handleSubmit(onSubmit)}>
          Submit
        </S.MenuButton>
        <S.MenuButton variant="outlined" size="large" onClick={resetForms}>
          Reset
        </S.MenuButton>
      </S.ButtonsWrapper>
    </S.VentilationCalculator>
  );
};

export default VentilationOnlineCalculatorForms;
