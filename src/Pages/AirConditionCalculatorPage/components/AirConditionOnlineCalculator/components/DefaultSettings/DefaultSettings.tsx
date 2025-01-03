import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
  getIsDefaultSettingsActive,
  getPanoramicWindows,
  getPowerIncreaseType,
  getSetConsiderVentilation,
  getSetExchangeRate,
  getSetHotClimate,
  getSetIsDefaultSettingsActive,
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

  const isDefaultSettingsActive = useAirConditionCalculatorStore(getIsDefaultSettingsActive);
  const setIsDefaultSettingsActive = useAirConditionCalculatorStore(getSetIsDefaultSettingsActive);

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

  const { t } = useTranslation('airConditionCalculator');

  const translations = {
    title: t('airConditionCalculator:online_calculator.default_settings.title'),
    ventilation: t('airConditionCalculator:online_calculator.default_settings.ventilation'),
    top_floor: t('airConditionCalculator:online_calculator.default_settings.top_floor'),
    panoramic_windows: t('airConditionCalculator:online_calculator.default_settings.panoramic_windows'),
    hot_climate: t('airConditionCalculator:online_calculator.default_settings.hot_climate'),
    air_exchange_rate: t('airConditionCalculator:online_calculator.default_settings.air_exchange_rate'),
    glazing_area: t('airConditionCalculator:online_calculator.default_settings.glazing_area'),
    power_increase: t('airConditionCalculator:online_calculator.default_settings.power_increase'),
    settings_tooltip: t('airConditionCalculator:online_calculator.default_settings.tooltips.settings'),
    ventilation_tooltip: t('airConditionCalculator:online_calculator.default_settings.tooltips.ventilation'),
    top_floor_tooltip: t('airConditionCalculator:online_calculator.default_settings.tooltips.top_floor'),
    panoramic_windows_tooltip: t('airConditionCalculator:online_calculator.default_settings.tooltips.panoramic_windows'),
    hot_climate_tooltip: t('airConditionCalculator:online_calculator.default_settings.tooltips.hot_climate'),
    square_meter: t('airConditionCalculator:online_calculator.default_settings.square_meter'),
  };

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
    const newState = !isDefaultSettingsActive;
    setIsDefaultSettingsActive(newState);
  
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
        <S.Title>{translations.title}</S.Title>
        <S.FlexWrapper withPadding >
          <Switch checked={isDefaultSettingsActive} onChange={toggleDefaultSettingsActive} />
          <InfoHelper
            tooltipText={translations.settings_tooltip}
          />
        </S.FlexWrapper>
      </S.MainWrapper>
      {isDefaultSettingsActive && (
        <S.FormWrapper>
          <S.FormColumns>
            <S.SwitchWrapper withBackground={considerVentilation} isFirst>
              <S.InputWrapper>
                <S.HorizontalWrapper>
                  <Typography>{translations.ventilation}</Typography>
                  <S.FlexWrapper>
                    <Switch checked={considerVentilation} onChange={toggleConsiderVentilation} />
                    <InfoHelper tooltipText={translations.ventilation_tooltip} />
                  </S.FlexWrapper>
                </S.HorizontalWrapper>

                {considerVentilation && (
                  <S.InputWrapper>
                    <S.HorizontalWrapper>
                      <Typography>{translations.air_exchange_rate}</Typography>
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
                <Typography>{translations.top_floor}</Typography>
                <S.FlexWrapper>
                  <Switch checked={topFloor} onChange={toggleTopFloor} />
                  <InfoHelper tooltipText={translations.top_floor_tooltip} />
                </S.FlexWrapper>
              </S.HorizontalWrapper>
            </S.SwitchWrapper>
          </S.FormColumns>
          <S.FormColumns>
            <S.SwitchWrapper withBackground={panoramicWindows}>
              <S.HorizontalWrapper>
                <Typography>{translations.panoramic_windows}</Typography>
                <S.FlexWrapper>
                  <Switch checked={panoramicWindows} onChange={togglePanoramicWindows} />
                  <InfoHelper tooltipText={translations.panoramic_windows_tooltip} />
                </S.FlexWrapper>
              </S.HorizontalWrapper>

              {panoramicWindows && (
                <S.InputWrapper>
                  <S.HorizontalWrapper>
                    <Typography>{translations.glazing_area}</Typography>
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
                      {translations.square_meter}
                    </S.FlexWrapper>
                  </S.HorizontalWrapper>
                  {errors?.windowArea && <ErrorMessage error={errors.windowArea.message} />}
                </S.InputWrapper>
              )}
            </S.SwitchWrapper>

            <S.SwitchWrapper withBackground={hotClimate}>
              <S.HorizontalWrapper>
                <Typography>{translations.hot_climate}</Typography>
                <S.FlexWrapper>
                  <Switch checked={hotClimate} onChange={toggleHotClimate} />
                  <InfoHelper tooltipText={translations.hot_climate_tooltip} />
                </S.FlexWrapper>
              </S.HorizontalWrapper>

              {hotClimate && (
                <S.HorizontalWrapper>
                  <Typography>{translations.power_increase}</Typography>
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
