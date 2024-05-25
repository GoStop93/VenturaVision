import { Control } from 'react-hook-form';

export interface IVentilationFormProps {
  roomNumber: number;
  onRemove: () => void;
  amountOfRooms: number;
  control: Control<any>;
  index: number;
}
