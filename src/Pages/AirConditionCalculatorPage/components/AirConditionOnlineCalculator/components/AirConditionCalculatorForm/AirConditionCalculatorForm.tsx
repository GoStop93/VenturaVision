import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { v4 as uuidv4 } from 'uuid';

import LoadingDecorator from '@/components/LoadingDecorator';
import { useAirConditionCalculatorStore } from '@/pages/AirConditionCalculatorPage/store';
import {
  getConsiderVentilation,
  getExchangeRate,
  getHotClimate,
  getPanoramicWindows,
  getPowerIncreaseType,
  getSetIsDefaultSettingsActive,
  getTopFloor,
  getWindowArea,
} from '@/pages/AirConditionCalculatorPage/store/selectors';
import { SELECTED_OPTIONS } from '@/pages/VentilationCalculatorPage/components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/types';

import {
  IAirConditionCalculatorFormProps,
  INSOLATION_TYPES_OPTIONS,
  PHYSICAL_ACTIVITY_TYPES_OPTIONS,
  SELECTED_VENTILATION_OPTIONS,
} from './types';
import { IAirConditionData } from './types';
import AirConditionForm from '../AirConditionForm';
import AirConditionResults from '../AirConditionResults';

import * as S from './AirConditionCalculatorForm.styles';

const MAX_ROOMS = 30;

const AirConditionCalculatorForm: React.FC<IAirConditionCalculatorFormProps> = (props) => {
  const { rooms, setRooms } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [exitingMap, setExitingMap] = useState<Record<string, boolean>>({});

  const addBtnWrapperRef = useRef<HTMLDivElement | null>(null);
  const prevRectRef = useRef<DOMRect | undefined>(undefined);

  const setIsDefaultSettingsActive = useAirConditionCalculatorStore(getSetIsDefaultSettingsActive);
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

  const { t } = useTranslation('airConditionCalculator');

  const translations = {
    add_button: t('airConditionCalculator:online_calculator.calculator_form.add_button'),
    submit_button: t('airConditionCalculator:online_calculator.calculator_form.submit_button'),
    reset_button: t('airConditionCalculator:online_calculator.calculator_form.reset_button'),
  };

  const addForm = () => {
    append({
      id: uuidv4(),
      roomNumber: fields.length + 1,
      systemNumber: 1,
      selectedOption: SELECTED_OPTIONS.SQUARE,
      name: '',
      ceilingHeight: undefined,
      length: undefined,
      width: undefined,
      area: undefined,
      people: undefined,
      insolationType: INSOLATION_TYPES_OPTIONS.LOW,
      physicalActivityType: PHYSICAL_ACTIVITY_TYPES_OPTIONS.LOW,
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

  const removeWithAnimation = (id: string, index: number) => {
    setExitingMap((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      remove(index);
      setExitingMap((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }, 250);
  };

  const resetForms = () => {
    reset({
      rooms: [
        {
          id: uuidv4(),
          roomNumber: 1,
          systemNumber: 1,
          selectedOption: SELECTED_OPTIONS.SQUARE,
          name: '',
          ceilingHeight: undefined,
          length: undefined,
          width: undefined,
          area: undefined,
          people: undefined,
          insolationType: INSOLATION_TYPES_OPTIONS.LOW,
          physicalActivityType: PHYSICAL_ACTIVITY_TYPES_OPTIONS.LOW,
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
    setIsDefaultSettingsActive(false);
  };

  const onSubmit = (data: IAirConditionData) => {
    setIsLoading(true);
    if (data.rooms) {
      setRooms(data.rooms);
      setTimeout(() => {
        const el = document.getElementById('condition_result');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setRooms([]);
    }
  }, [JSON.stringify(errors)]);

  useEffect(() => {
    if (rooms.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [rooms]);

  useLayoutEffect(() => {
    const el = addBtnWrapperRef.current;
    if (!el) return;

    const last = el.getBoundingClientRect();
    const first = prevRectRef.current;

    if (first) {
      const dx = first.left - last.left;
      const dy = first.top - last.top;

      if (Math.abs(dy) > 50) {
        el.style.transition = 'none';
        el.style.transform = `translate(${dx}px, 0)`;

        requestAnimationFrame(() => {
          el.style.transition = 'transform 220ms ease-in-out';
          el.style.transform = 'translate(0, 0)';
        });

        prevRectRef.current = last;
        return;
      }

      if (dx !== 0 || dy !== 0) {
        el.style.transition = 'none';
        el.style.transform = `translate(${dx}px, ${dy}px)`;

        requestAnimationFrame(() => {
          el.style.transition = 'transform 220ms ease-in-out';
          el.style.transform = 'translate(0, 0)';
        });
      }
    }

    prevRectRef.current = last;
  }, [fields.length]);

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
            onRemove={() => removeWithAnimation(field.id, index)}
            errors={Array.isArray(errors.rooms) ? errors.rooms[index] : undefined}
            isExiting={!!exitingMap[field.id]}
          />
        ))}
        <S.AddButtonWrapper ref={addBtnWrapperRef}>
          <S.AddButton
            variant="contained"
            size="large"
            onClick={addForm}
            disabled={fields.length >= MAX_ROOMS}
          >
            {translations.add_button}
          </S.AddButton>
        </S.AddButtonWrapper>
      </S.FormsWrapper>
      {rooms.length > 0 && (!errors || Object.keys(errors).length < 1) && (
        <div id="condition_result">
          <LoadingDecorator data={rooms} loading={isLoading} size={60} padding="200px 0">
            {() => <AirConditionResults rooms={rooms} />}
          </LoadingDecorator>
        </div>
      )}
      <S.ButtonsWrapper>
        <S.MenuButton size="large" onClick={handleSubmit(onSubmit)}>
          {translations.submit_button}
        </S.MenuButton>
        <S.MenuButton variant="outlined" size="large" onClick={resetForms}>
          {translations.reset_button}
        </S.MenuButton>
      </S.ButtonsWrapper>
    </S.AirConditionCalculator>
  );
};

export default AirConditionCalculatorForm;
