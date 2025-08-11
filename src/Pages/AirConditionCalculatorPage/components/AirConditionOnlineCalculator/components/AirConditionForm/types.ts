import { Control, DeepMap, FieldError, FieldValues } from 'react-hook-form';

export interface IAirConditionFormProps {
  roomNumber: number;
  onRemove: () => void;
  amountOfRooms: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  errors?: DeepMap<FieldValues, FieldError>;
  isExiting?: boolean;
}
