import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { v4 as uuidv4 } from 'uuid';

import { useAirConditionCalculatorStore } from '@/pages/AirConditionCalculatorPage/store';
import {
  getConsiderVentilation,
  getExchangeRate,
  getHotClimate,
  getPanoramicWindows,
  getPowerIncreaseType,
  getTopFloor,
  getWindowArea,
} from '@/pages/AirConditionCalculatorPage/store/selectors';
import { SELECTED_OPTIONS } from '@/pages/VentilationCalculatorPage/components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/types';

import {
  IAirConditionCalculatorFormProps,
  INSOLATION_TYPES_OPTIONS,
  SELECTED_VENTILATION_OPTIONS,
} from './types';
import { IAirConditionData } from './types';
import AirConditionForm from '../AirConditionForm';

import * as S from './AirConditionCalculatorForm.styles';

const MAX_ROOMS = 30;

const AirConditionCalculatorForm: React.FC<IAirConditionCalculatorFormProps> = (props) => {
  const { rooms, setRooms } = props;

  const [isLoading, setIsLoading] = useState(false);

  const considerVentilation = useAirConditionCalculatorStore(getConsiderVentilation);
  const topFloor = useAirConditionCalculatorStore(getTopFloor);
  const panoramicWindows = useAirConditionCalculatorStore(getPanoramicWindows);
  const hotClimate = useAirConditionCalculatorStore(getHotClimate);
  const powerIncreaseType = useAirConditionCalculatorStore(getPowerIncreaseType);
  const exchangeRate = useAirConditionCalculatorStore(getExchangeRate);
  const windowArea = useAirConditionCalculatorStore(getWindowArea);

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
      selectedOption: SELECTED_OPTIONS.SQUARE,
      name: '',
      ceilingHeight: undefined,
      length: undefined,
      width: undefined,
      area: undefined,
      people: undefined,
      insolationType: INSOLATION_TYPES_OPTIONS.LOW,
      computers: undefined,
      TVs: undefined,
      appliances: undefined,
      topFloor: topFloor,
      panoramicWindows: panoramicWindows,
      hotClimate: hotClimate,
      powerIncreaseType: powerIncreaseType,
      considerVentilation: considerVentilation,
      selectedVentilationOption: SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE,
      exchangeRate: exchangeRate,
      airflowRate: undefined,
      windowArea: windowArea,
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
          selectedOption: SELECTED_OPTIONS.SQUARE,
          name: '',
          ceilingHeight: undefined,
          length: undefined,
          width: undefined,
          area: undefined,
          people: undefined,
          insolationType: INSOLATION_TYPES_OPTIONS.LOW,
          computers: undefined,
          TVs: undefined,
          appliances: undefined,
          topFloor: false,
          panoramicWindows: false,
          hotClimate: false,
          powerIncreaseType: undefined,
          considerVentilation: false,
          selectedVentilationOption: SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE,
          exchangeRate: undefined,
          airflowRate: undefined,
          windowArea: undefined,
        },
      ],
    });
    setRooms([]);
  };

  const onSubmit = (data: IAirConditionData) => {
    setIsLoading(true);
    if (data.rooms) {
      setRooms(data.rooms);
      console.log(rooms);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setRooms([]);
    }
  }, [errors]);

  useEffect(() => {
    if (rooms.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [rooms]);

  return (
    <S.AirConditionCalculator>
      <S.FormsWrapper>
        {fields.map((field, index) => (
          <AirConditionForm
            key={field.id}
            control={control}
            index={index}
            roomNumber={index + 1}
            amountOfRooms={fields.length}
            onRemove={() => removeForm(index)}
            errors={Array.isArray(errors.rooms) ? errors.rooms[index] : undefined}
          />
        ))}
        <S.AddButton
          variant="contained"
          size="large"
          onClick={addForm}
          disabled={fields.length >= MAX_ROOMS}
        >
          + Add room
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
    </S.AirConditionCalculator>
  );
};

export default AirConditionCalculatorForm;
