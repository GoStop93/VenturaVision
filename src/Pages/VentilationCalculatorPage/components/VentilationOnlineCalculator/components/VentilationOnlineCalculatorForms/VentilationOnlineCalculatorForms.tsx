import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import VentilationForm from './VentilationForm';

import { IFormEntity } from './types';

import * as S from './VentilationOnlineCalculatorForms.styles';

const MAX_ROOMS = 30;

const VentilationOnlineCalculatorForms: React.FC = () => {
  const [forms, setForms] = useState<IFormEntity[]>([{ id: uuidv4(), roomNumber: 1 }]);

  const addForm = () => {
    setForms((prevForms) => {
      const newRoomNumber = prevForms.length + 1;
      return [...prevForms, { id: uuidv4(), roomNumber: newRoomNumber }];
    });
  };

  const removeForm = (id: string) => {
    setForms((prevForms) => {
      const updatedForms = prevForms.filter((form) => form.id !== id);
      return updatedForms.map((form, index) => ({
        ...form,
        roomNumber: index + 1,
      }));
    });
  };

  const resetForms = () => {
    setForms([{ id: uuidv4(), roomNumber: 1 }]);
  };

  return (
    <S.VentilationCalculator>
      <S.FormsWrapper>
        {forms.map((form) => (
          <VentilationForm key={form.id} amountOfRooms={forms.length} roomNumber={form.roomNumber} onRemove={() => removeForm(form.id)} />
        ))}
        <S.AddButton variant="contained" size="large" onClick={addForm} disabled={forms.length >= MAX_ROOMS}>
          + добавить комнату
        </S.AddButton>
      </S.FormsWrapper>
      <S.ButtonsWrapper>
        <S.MenuButton size="large">Submit</S.MenuButton>
        <S.MenuButton variant="outlined" size="large" onClick={resetForms}>
          Reset
        </S.MenuButton>
      </S.ButtonsWrapper>
    </S.VentilationCalculator>
  );
};

export default VentilationOnlineCalculatorForms;
