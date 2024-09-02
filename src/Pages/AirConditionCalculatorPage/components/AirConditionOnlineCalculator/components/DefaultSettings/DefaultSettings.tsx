import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';

import Dropdown from '@/components/Dropdown';
import ErrorMessage from '@/components/ErrorMessage';
import InfoHelper from '@/components/InfoHelper';
import { useAirConditionCalculatorStore } from '@/pages/AirConditionCalculatorPage/store';
import {
  getConsiderVentilation,
  getExchangeRate,
  getHotClimate,
  getPanoramicWindows,
  getPowerIncreaseType,
  getSetConsiderVentilation,
  getSetExchangeRate,
  getSetHotClimate,
  getSetPanoramicWindows,
  getSetPowerIncreaseType,
  getSetTopFloor,
  getSetWindowArea,
  getTopFloor,
  getWindowArea,
} from '@/pages/AirConditionCalculatorPage/store/selectors';

import { IFormValues } from './types';
import { useDefaultSettingsSchema } from './utils/validations';
import { powerIncreasePercentageTypes } from '../AirConditionForm/AirConditionForm';

import * as S from './DefaultSettings.styles';

const DefaultSettings: React.FC = () => {
  const [isDefaultSettingsActive, setIsDefaultSettingsActive] = useState(false);

  const considerVentilation = useAirConditionCalculatorStore(getConsiderVentilation);
  const setConsiderVentilation = useAirConditionCalculatorStore(getSetConsiderVentilation);

  const topFloor = useAirConditionCalculatorStore(getTopFloor);
  const setTopFloor = useAirConditionCalculatorStore(getSetTopFloor);

  const panoramicWindows = useAirConditionCalculatorStore(getPanoramicWindows);
  const setPanoramicWindows = useAirConditionCalculatorStore(getSetPanoramicWindows);

  const hotClimate = useAirConditionCalculatorStore(getHotClimate);
  const setHotClimate = useAirConditionCalculatorStore(getSetHotClimate);

  const powerIncreaseType = useAirConditionCalculatorStore(getPowerIncreaseType);
  const setPowerIncreaseType = useAirConditionCalculatorStore(getSetPowerIncreaseType);

  const exchangeRate = useAirConditionCalculatorStore(getExchangeRate);
  const setExchangeRate = useAirConditionCalculatorStore(getSetExchangeRate);

  const windowArea = useAirConditionCalculatorStore(getWindowArea);
  const setWindowArea = useAirConditionCalculatorStore(getSetWindowArea);

  const defaultSettingsSchema = useDefaultSettingsSchema();

  const {
    control,
    handleSubmit,
    setValue: setFormValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(defaultSettingsSchema),
    defaultValues: {
      considerVentilation: considerVentilation,
      topFloor: topFloor,
      panoramicWindows: panoramicWindows,
      hotClimate: hotClimate,
      powerIncreaseType: powerIncreaseType,
      windowArea: windowArea,
      exchangeRate: exchangeRate,
    },
  });

  const onSubmit = (data: IFormValues) => {
    setConsiderVentilation(data.considerVentilation);
    setTopFloor(data.topFloor);
    setPanoramicWindows(data.panoramicWindows);
    setHotClimate(data.hotClimate);
  };

  const toggleDefaultSettingsActive = () => {
    setIsDefaultSettingsActive((prevState) => {
      const newState = !prevState;
      if (newState) {
        setFormValue('considerVentilation', considerVentilation);
        setFormValue('topFloor', topFloor);
        setFormValue('panoramicWindows', panoramicWindows);
        setFormValue('hotClimate', hotClimate);
        setFormValue('powerIncreaseType', powerIncreaseType);
        setFormValue('windowArea', windowArea);
        setFormValue('exchangeRate', exchangeRate);
      } else {
        reset({
          considerVentilation: false,
          topFloor: false,
          panoramicWindows: false,
          hotClimate: false,
          powerIncreaseType: '10',
          windowArea: undefined,
          exchangeRate: undefined,
        });
        setConsiderVentilation(false);
        setTopFloor(false);
        setPanoramicWindows(false);
        setHotClimate(false);
        setPowerIncreaseType('10');
        setWindowArea(5);
        setExchangeRate(2);
      }
      handleSubmit(onSubmit)();
      return newState;
    });
  };

  const toggleConsiderVentilation = () => {
    const newValue = !considerVentilation;
    setConsiderVentilation(newValue);
    setFormValue('considerVentilation', newValue);
    handleSubmit(onSubmit)();
  };

  const toggleTopFloor = () => {
    const newValue = !topFloor;
    setTopFloor(newValue);
    setFormValue('topFloor', newValue);
    handleSubmit(onSubmit)();
  };

  const togglePanoramicWindows = () => {
    const newValue = !panoramicWindows;
    setPanoramicWindows(newValue);
    setFormValue('panoramicWindows', newValue);
    handleSubmit(onSubmit)();
  };

  const toggleHotClimate = () => {
    const newValue = !hotClimate;
    setHotClimate(newValue);
    setFormValue('hotClimate', newValue);
    handleSubmit(onSubmit)();
  };

  useEffect(() => {
    if (!isDefaultSettingsActive) {
      reset({
        considerVentilation: false,
        topFloor: false,
        panoramicWindows: false,
        hotClimate: false,
        powerIncreaseType: '10',
        windowArea: undefined,
        exchangeRate: undefined,
      });
      setConsiderVentilation(false);
      setTopFloor(false);
      setPanoramicWindows(false);
      setHotClimate(false);
      setPowerIncreaseType('10');
      setWindowArea(5);
      setExchangeRate(2);
    }
  }, [isDefaultSettingsActive]);

  return (
    <S.DefaultSettings withBackground={isDefaultSettingsActive}>
      <S.MainWrapper>
        <S.Title>Настроить параметры по умолчанию</S.Title>
        <S.FlexWrapper>
          <Switch checked={isDefaultSettingsActive} onChange={toggleDefaultSettingsActive} />
          <InfoHelper
            tooltipText={
              'Укажите параметры, которые будут автоматически устанавливаться для всех новых помещений. В дальнейшем вы сможете изменить их для каждого отдельного помещения'
            }
          />
        </S.FlexWrapper>
      </S.MainWrapper>
      {isDefaultSettingsActive && (
        <S.FormWrapper>
          <S.FormColumns>
            <S.SwitchWrapper withBackground={considerVentilation} isFirst>
              <S.InputWrapper>
                <S.HorizontalWrapper>
                  <Typography>Учитывать вентиляцию</Typography>
                  <S.FlexWrapper>
                    <Switch checked={considerVentilation} onChange={toggleConsiderVentilation} />
                    <InfoHelper tooltipText="При выборе опции мощность кондиционера будет увеличина для компенсации тепловой нагрузки от приточного воздуха. Рекомендуемое значение кратности воздухообмена для жилых помещений - 2" />
                  </S.FlexWrapper>
                </S.HorizontalWrapper>

                {considerVentilation && (
                  <S.InputWrapper>
                    <S.HorizontalWrapper>
                      <Typography>Кратность воздухообмена:</Typography>
                      <Controller
                        name="exchangeRate"
                        control={control}
                        render={({ field }) => (
                          <S.SmallInput
                            type="number"
                            inputProps={{ min: 1, step: 1, max: 10 }}
                            size="small"
                            {...field}
                            placeholder="2"
                            onChange={(e) => {
                              field.onChange(e);
                              const value = +e.target.value;
                              if (!isNaN(value)) {
                                if (value !== 0 && value > 0 && value < 11) {
                                  setExchangeRate(value);
                                } else {
                                  setExchangeRate(2);
                                }
                              }
                            }}
                          />
                        )}
                      />
                    </S.HorizontalWrapper>
                    {errors.exchangeRate && <ErrorMessage error={errors.exchangeRate.message} />}
                  </S.InputWrapper>
                )}
              </S.InputWrapper>
            </S.SwitchWrapper>
            <S.SwitchWrapper>
              <S.HorizontalWrapper>
                <Typography>Верхний этаж</Typography>
                <S.FlexWrapper>
                  <Switch checked={topFloor} onChange={toggleTopFloor} />
                  <InfoHelper tooltipText="При выборе опции мощность кондиционера будет увеличина для компенсации теплопритоков от нагретой крыши (в калькуляторе используется среднее значение - 15%). Выберите данную опцию, если помещение расположено на последнем этаже и сверху нет чердака или технического этажа" />
                </S.FlexWrapper>
              </S.HorizontalWrapper>
            </S.SwitchWrapper>
          </S.FormColumns>
          <S.FormColumns>
            <S.SwitchWrapper withBackground={panoramicWindows}>
              <S.HorizontalWrapper>
                <Typography>Панорамные окна</Typography>
                <S.FlexWrapper>
                  <Switch checked={panoramicWindows} onChange={togglePanoramicWindows} />
                  <InfoHelper tooltipText="При выборе опции мощность кондиционера будет увеличина для компенсации теплопритоков через большие окна. Выберите данную опцию, если площадь остекления превышает значение 2м²" />
                </S.FlexWrapper>
              </S.HorizontalWrapper>

              {panoramicWindows && (
                <S.InputWrapper>
                  <S.HorizontalWrapper>
                    <Typography>Площадь остекления:</Typography>
                    <S.FlexWrapper>
                      <Controller
                        name="windowArea"
                        control={control}
                        render={({ field }) => (
                          <S.Input
                            size="small"
                            {...field}
                            placeholder="5"
                            onChange={(e) => {
                              field.onChange(e);
                              const value = +e.target.value;
                              if (!isNaN(value)) {
                                if (value !== 0 && value > 0 && value < 31) {
                                  setWindowArea(value);
                                } else {
                                  setWindowArea(2);
                                }
                              }
                            }}
                          />
                        )}
                      />
                      м²
                    </S.FlexWrapper>
                  </S.HorizontalWrapper>
                  {errors?.windowArea && <ErrorMessage error={errors.windowArea.message} />}
                </S.InputWrapper>
              )}
            </S.SwitchWrapper>

            <S.SwitchWrapper withBackground={hotClimate}>
              <S.HorizontalWrapper>
                <Typography>Жаркий климат</Typography>
                <S.FlexWrapper>
                  <Switch checked={hotClimate} onChange={toggleHotClimate} />
                  <InfoHelper tooltipText="Выберите опцию, чтобы увеличить мощность кондиционера в случае, если  расчетная температура воздуха в теплый период года может превышать 28,5°С. Рекомендуется увеличить мощность на 10 - 30%, в зависимости от температуры наружного воздуха" />
                </S.FlexWrapper>
              </S.HorizontalWrapper>

              {hotClimate && (
                <S.HorizontalWrapper>
                  <Typography>Увеличение мощности на:</Typography>
                  <Dropdown
                    options={Object.entries(powerIncreasePercentageTypes).map(
                      ([key, optionValue]) => ({
                        key,
                        optionValue,
                      }),
                    )}
                    name="powerIncrease"
                    value={powerIncreasePercentageTypes[powerIncreaseType]}
                    onChange={(filterName: string, value: string) => {
                      if (filterName === 'powerIncrease' && value in powerIncreasePercentageTypes) {
                        setPowerIncreaseType(value as keyof typeof powerIncreasePercentageTypes);
                      }
                    }}
                  />
                </S.HorizontalWrapper>
              )}
            </S.SwitchWrapper>
          </S.FormColumns>
        </S.FormWrapper>
      )}
    </S.DefaultSettings>
  );
};

export default DefaultSettings;
