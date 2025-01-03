import { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';

import Dropdown from '@/components/Dropdown';
import ErrorMessage from '@/components/ErrorMessage';
import InfoHelper from '@/components/InfoHelper';
import { SELECTED_OPTIONS } from '@/pages/VentilationCalculatorPage/components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/types';

import { colors } from '@/styles/colors';

import { IAirConditionFormProps } from './types';
import airConditionImage from '../../../../../../assets/images/systemIcons/air-condition-icon.png';
import {
  INSOLATION_TYPES_OPTIONS,
  PHYSICAL_ACTIVITY_TYPES_OPTIONS,
  SELECTED_VENTILATION_OPTIONS,
} from '../AirConditionCalculatorForm/types';

import * as S from './AirConditionForm.styles';

export const powerIncreasePercentageTypes = {
  ['10']: '10%',
  ['20']: '20%',
  ['30']: '30%',
};

const AirConditionForm: React.FC<IAirConditionFormProps> = (props) => {
  const { roomNumber, onRemove, amountOfRooms, control, index, errors } = props;

  const { resetField, setValue, watch } = useFormContext();

  const { t } = useTranslation('airConditionCalculator');

  const translations = {
    insolation_low: t('airConditionCalculator:online_calculator.air_condition_form.insolation_types.low'),
    insolation_medium: t('airConditionCalculator:online_calculator.air_condition_form.insolation_types.medium'),
    insolation_high: t('airConditionCalculator:online_calculator.air_condition_form.insolation_types.high'),
    physical_activity_low: t('airConditionCalculator:online_calculator.air_condition_form.physical_activity_types.low'),
    physical_activity_medium: t('airConditionCalculator:online_calculator.air_condition_form.physical_activity_types.medium'),
    physical_activity_high: t('airConditionCalculator:online_calculator.air_condition_form.physical_activity_types.high'),
    room_number_label: t('airConditionCalculator:online_calculator.air_condition_form.room_number_label'),
    room_name_label: t('airConditionCalculator:online_calculator.air_condition_form.room_name_label'),
    system_number_label: t('airConditionCalculator:online_calculator.air_condition_form.system_number_label'),
    area_label: t('airConditionCalculator:online_calculator.air_condition_form.area_label'),
    radio_square_label: t('airConditionCalculator:online_calculator.air_condition_form.radio_square_label'),
    radio_dimensions_label: t('airConditionCalculator:online_calculator.air_condition_form.radio_dimensions_label'),
    length_label: t('airConditionCalculator:online_calculator.air_condition_form.length_label'),
    width_label: t('airConditionCalculator:online_calculator.air_condition_form.width_label'),
    ceiling_height_label: t('airConditionCalculator:online_calculator.air_condition_form.ceiling_height_label'),
    insolation_type_label: t('airConditionCalculator:online_calculator.air_condition_form.insolation_type_label'),
    physical_activity_type_label: t('airConditionCalculator:online_calculator.air_condition_form.physical_activity_type_label'),
    people_label: t('airConditionCalculator:online_calculator.air_condition_form.people_label'),
    computers_label: t('airConditionCalculator:online_calculator.air_condition_form.computers_label'),
    TVs_label: t('airConditionCalculator:online_calculator.air_condition_form.TVs_label'),
    appliances_label: t('airConditionCalculator:online_calculator.air_condition_form.appliances_label'),
    system_number_tooltip:  t('airConditionCalculator:online_calculator.air_condition_form.tooltips.system_number'),
    insolation_type_tooltip:  t('airConditionCalculator:online_calculator.air_condition_form.tooltips.insolation_type'),
    appliances_tooltip:  t('airConditionCalculator:online_calculator.air_condition_form.tooltips.appliances'),
    millimeter: t('airConditionCalculator:online_calculator.air_condition_form.units_of_measurement.millimeter'),
    unit: t('airConditionCalculator:online_calculator.air_condition_form.units_of_measurement.unit'),
    square_meter: t('airConditionCalculator:online_calculator.air_condition_form.units_of_measurement.square_meter'),
    kilowatt: t('airConditionCalculator:online_calculator.air_condition_form.units_of_measurement.kilowatt'),
    cubic_meter_per_hour: t('airConditionCalculator:online_calculator.air_condition_form.units_of_measurement.cubic_meter_per_hour'),
    air_exchange_rate_short: t('airConditionCalculator:online_calculator.air_condition_form.air_exchange_rate_short'),
    airflow_capacity: t('airConditionCalculator:online_calculator.air_condition_form.airflow_capacity'),
    airflow_capacity_short: t('airConditionCalculator:online_calculator.air_condition_form.airflow_capacity_short'),
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
  };

  const translatedInsolationTypes = {
    [INSOLATION_TYPES_OPTIONS.LOW]: translations.insolation_low,
    [INSOLATION_TYPES_OPTIONS.MEDIUM]: translations.insolation_medium,
    [INSOLATION_TYPES_OPTIONS.HIGH]: translations.insolation_high,
  };

  const translatedPhysicalActivityTypes = {
    [PHYSICAL_ACTIVITY_TYPES_OPTIONS.LOW]: translations.physical_activity_low,
    [PHYSICAL_ACTIVITY_TYPES_OPTIONS.MEDIUM]: translations.physical_activity_medium,
    [PHYSICAL_ACTIVITY_TYPES_OPTIONS.HIGH]: translations.physical_activity_high,
  };

  const selectedOption = watch(`rooms.${index}.selectedOption`, SELECTED_OPTIONS.SQUARE);
  const insolationType = watch(`rooms.${index}.insolationType`, INSOLATION_TYPES_OPTIONS.LOW);
  const physicalActivityType = watch(
    `rooms.${index}.physicalActivityType`,
    PHYSICAL_ACTIVITY_TYPES_OPTIONS.LOW,
  );
  const selectedVentilationOption = watch(
    `rooms.${index}.selectedVentilationOption`,
    SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE,
  );
  const powerIncreaseType = watch(
    `rooms.${index}.powerIncreaseType`,
    Object.keys(powerIncreasePercentageTypes)[0],
  ) as keyof typeof powerIncreasePercentageTypes;

  const panoramicWindows = watch(`rooms.${index}.panoramicWindows`, false);
  const topFloor = watch(`rooms.${index}.topFloor`, false);
  const hotClimate = watch(`rooms.${index}.hotClimate`, false);
  const considerVentilation = watch(`rooms.${index}.considerVentilation`, false);

  const onInsolationTypeChange = (_: string, value: string) => {
    setValue(`rooms.${index}.insolationType`, value);
  };

  const onPhysicalActivityTypeChange = (_: string, value: string) => {
    setValue(`rooms.${index}.physicalActivityType`, value);
  };

  const onPowerIncreaseTypeChange = (_: string, value: string) => {
    setValue(`rooms.${index}.powerIncreaseType`, value);
  };

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(`rooms.${index}.selectedOption`, value);
    if (value === SELECTED_OPTIONS.SQUARE) {
      resetField(`rooms.${index}.length`);
      resetField(`rooms.${index}.width`);
    } else if (value === SELECTED_OPTIONS.DIMENSIONS) {
      resetField(`rooms.${index}.area`);
    }
  };

  const handleVentilationOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(`rooms.${index}.selectedVentilationOption`, value);
    if (value === SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE) {
      resetField(`rooms.${index}.airflowRate`);
    } else if (value === SELECTED_VENTILATION_OPTIONS.AIRFLOW_RATE) {
      resetField(`rooms.${index}.exchangeRate`);
    }
  };

  const toggleConsiderVentilation = () => {
    const newConsiderVentilationValue = !considerVentilation;
    setValue(`rooms.${index}.considerVentilation`, newConsiderVentilationValue);

    if (!newConsiderVentilationValue) {
      resetField(`rooms.${index}.airflowRate`);
      resetField(`rooms.${index}.exchangeRate`);
    }
  };

  const toggleTopFloor = () => {
    const newTopFloorValue = !topFloor;
    setValue(`rooms.${index}.topFloor`, newTopFloorValue);
  };

  const togglePanoramicWindows = () => {
    const newPanoramicWindowsValue = !panoramicWindows;
    setValue(`rooms.${index}.panoramicWindows`, newPanoramicWindowsValue);

    if (!newPanoramicWindowsValue) {
      resetField(`rooms.${index}.windowArea`);
    }
  };

  const toggleHotClimate = () => {
    const newHotClimateValue = !hotClimate;
    setValue(`rooms.${index}.hotClimate`, newHotClimateValue);

    if (!newHotClimateValue) {
      setValue(`rooms.${index}.powerIncreaseType`, undefined);
    } else {
      setValue(`rooms.${index}.powerIncreaseType`, Object.keys(powerIncreasePercentageTypes)[0]);
    }
  };

  const isVisibleDeleteButton = amountOfRooms > 1;

  return (
    <S.Form>
      <S.Header>
        <Typography variant="h6">{translations.room_number_label} {roomNumber}</Typography>
        {isVisibleDeleteButton && (
          <IconButton onClick={onRemove}>
            <DeleteIcon sx={{ fontSize: '18px', color: colors.orange }} />
          </IconButton>
        )}
        <S.Image src={airConditionImage} />
      </S.Header>
      <S.VerticalWrapper>
        <Typography>{translations.room_name_label}</Typography>
        <Controller
          name={`rooms.${index}.name`}
          control={control}
          render={({ field }) => (
            <>
              <S.BigInput size="small" {...field} />
              {errors?.name && <ErrorMessage error={errors.name.message} />}
            </>
          )}
        />
      </S.VerticalWrapper>
      <S.FormWrapper>
        <S.FormColumns>
          <S.InputWrapper style={{ marginTop: '10px' }}>
            <S.HorizontalWrapper>
              <Typography>{translations.system_number_label}</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.systemNumber`}
                  control={control}
                  render={({ field }) => (
                    <S.SmallInput
                      type="number"
                      inputProps={{ min: 1, step: 1, max: 10 }}
                      size="small"
                      {...field}
                    />
                  )}
                />
                <InfoHelper
                  tooltipText={translations.system_number_tooltip}
                />
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.systemNumber && <ErrorMessage error={errors.systemNumber.message} />}
          </S.InputWrapper>
          <S.SwitchWrapper withBackground={true}>
            <RadioGroup row value={selectedOption} onChange={handleOptionChange}>
              <FormControlLabel
                value={SELECTED_OPTIONS.SQUARE}
                control={<Radio />}
                label={translations.radio_square_label}
              />
              <FormControlLabel
                value={SELECTED_OPTIONS.DIMENSIONS}
                control={<Radio />}
                label={translations.radio_dimensions_label}
              />
            </RadioGroup>
            {selectedOption === SELECTED_OPTIONS.DIMENSIONS && (
              <>
                <S.InputWrapper>
                  <S.HorizontalWrapper>
                    <Typography>{translations.length_label}</Typography>
                    <S.FlexWrapper>
                      <Controller
                        name={`rooms.${index}.length`}
                        control={control}
                        render={({ field }) => (
                          <S.Input size="small" {...field} placeholder="2000" />
                        )}
                      />
                      {translations.millimeter}
                    </S.FlexWrapper>
                  </S.HorizontalWrapper>
                  {errors?.length && <ErrorMessage error={errors.length.message} />}
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.HorizontalWrapper>
                    <Typography>{translations.width_label}</Typography>
                    <S.FlexWrapper>
                      <Controller
                        name={`rooms.${index}.width`}
                        control={control}
                        render={({ field }) => (
                          <S.Input size="small" {...field} placeholder="3000" />
                        )}
                      />
                      {translations.millimeter}
                    </S.FlexWrapper>
                  </S.HorizontalWrapper>
                  {errors?.width && <ErrorMessage error={errors.width.message} />}
                </S.InputWrapper>
              </>
            )}

            {selectedOption === SELECTED_OPTIONS.SQUARE && (
              <S.InputWrapper>
                <S.HorizontalWrapper>
                  <Typography>{translations.area_label}</Typography>
                  <S.FlexWrapper>
                    <Controller
                      name={`rooms.${index}.area`}
                      control={control}
                      render={({ field }) => <S.Input size="small" {...field} placeholder="24" />}
                    />
                    {translations.square_meter}&nbsp;
                  </S.FlexWrapper>
                </S.HorizontalWrapper>
                {errors?.area && <ErrorMessage error={errors.area.message} />}
              </S.InputWrapper>
            )}
          </S.SwitchWrapper>
          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>{translations.ceiling_height_label}</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.ceilingHeight`}
                  control={control}
                  render={({ field }) => <S.Input size="small" {...field} placeholder="3200" />}
                />
                {translations.millimeter}
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.ceilingHeight && <ErrorMessage error={errors.ceilingHeight.message} />}
          </S.InputWrapper>

          <S.HorizontalWrapper>
            <Typography>{translations.insolation_type_label}</Typography>
            <S.FlexWrapper>
              <Dropdown
                options={Object.entries(translatedInsolationTypes).map(([key, optionValue]) => ({
                  key,
                  optionValue,
                }))}
                name={`rooms.${index}.insolationType`}
                value={translatedInsolationTypes[insolationType]}
                onChange={onInsolationTypeChange}
              />
              <InfoHelper tooltipText={translations.insolation_type_tooltip} />
            </S.FlexWrapper>
          </S.HorizontalWrapper>

          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>{translations.people_label}</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.people`}
                  control={control}
                  render={({ field }) => (
                    <S.SmallInput
                      type="number"
                      inputProps={{ min: 1, step: 1, max: 20 }}
                      size="small"
                      {...field}
                      placeholder="1"
                    />
                  )}
                />
                {translations.unit}
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.people && <ErrorMessage error={errors.people.message} />}
          </S.InputWrapper>

          {watch(`rooms.${index}.people`, 0) > 0 && (
            <S.HorizontalWrapper>
              <Typography style={{ width: '130px' }}>{translations.physical_activity_type_label}</Typography>
              <Dropdown
                options={Object.entries(translatedPhysicalActivityTypes).map(
                  ([key, optionValue]) => ({
                    key,
                    optionValue,
                  }),
                )}
                name={`rooms.${index}.physicalActivityType`}
                value={translatedPhysicalActivityTypes[physicalActivityType]}
                onChange={onPhysicalActivityTypeChange}
              />
            </S.HorizontalWrapper>
          )}
          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>{translations.computers_label}</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.computers`}
                  control={control}
                  render={({ field }) => (
                    <S.SmallInput
                      type="number"
                      inputProps={{ min: 1, step: 1, max: 10 }}
                      size="small"
                      {...field}
                      placeholder="1"
                    />
                  )}
                />
                {translations.unit}
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.computers && <ErrorMessage error={errors.computers.message} />}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>{translations.TVs_label}</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.TVs`}
                  control={control}
                  render={({ field }) => (
                    <S.SmallInput
                      type="number"
                      inputProps={{ min: 1, step: 1, max: 10 }}
                      size="small"
                      {...field}
                      placeholder="1"
                    />
                  )}
                />
                {translations.unit}
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.TVs && <ErrorMessage error={errors.TVs.message} />}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>{translations.appliances_label}</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.appliances`}
                  control={control}
                  render={({ field }) => <S.Input size="small" {...field} placeholder="5" />}
                />
                {translations.kilowatt}
                <InfoHelper
                  tooltipText={translations.appliances_tooltip}
                />
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.appliances && <ErrorMessage error={errors.appliances.message} />}
          </S.InputWrapper>
        </S.FormColumns>

        <S.FormColumns small>
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
                <RadioGroup
                  row
                  value={selectedVentilationOption}
                  onChange={handleVentilationOptionChange}
                >
                  <FormControlLabel
                    value={SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE}
                    control={<Radio />}
                    label={translations.air_exchange_rate_short}
                  />
                  <FormControlLabel
                    value={SELECTED_VENTILATION_OPTIONS.AIRFLOW_RATE}
                    control={<Radio />}
                    label={translations.airflow_capacity_short}
                  />
                </RadioGroup>
              )}
              {considerVentilation &&
                selectedVentilationOption === SELECTED_VENTILATION_OPTIONS.AIRFLOW_RATE && (
                  <S.InputWrapper>
                    <S.HorizontalWrapper>
                      <Typography>{translations.airflow_capacity}</Typography>
                      <S.FlexWrapper>
                        <Controller
                          name={`rooms.${index}.airflowRate`}
                          control={control}
                          render={({ field }) => (
                            <S.Input size="small" {...field} placeholder="120" />
                          )}
                        />
                        {translations.cubic_meter_per_hour}
                      </S.FlexWrapper>
                    </S.HorizontalWrapper>
                    {errors?.airflowRate && <ErrorMessage error={errors.airflowRate.message} />}
                  </S.InputWrapper>
                )}
              {considerVentilation &&
                selectedVentilationOption === SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE && (
                  <S.InputWrapper>
                    <S.HorizontalWrapper>
                      <Typography>{translations.air_exchange_rate}</Typography>
                      <Controller
                        name={`rooms.${index}.exchangeRate`}
                        control={control}
                        render={({ field }) => (
                          <S.SmallInput
                            type="number"
                            inputProps={{ min: 1, step: 1, max: 10 }}
                            size="small"
                            {...field}
                            placeholder="2"
                          />
                        )}
                      />
                    </S.HorizontalWrapper>
                    {errors?.exchangeRate && <ErrorMessage error={errors.exchangeRate.message} />}
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
                      name={`rooms.${index}.windowArea`}
                      control={control}
                      render={({ field }) => <S.Input size="small" {...field} placeholder="5" />}
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
                  name={`rooms.${index}.powerIncrease`}
                  value={powerIncreasePercentageTypes[powerIncreaseType]}
                  onChange={onPowerIncreaseTypeChange}
                />
              </S.HorizontalWrapper>
            )}
          </S.SwitchWrapper>
        </S.FormColumns>
      </S.FormWrapper>
    </S.Form>
  );
};

export default AirConditionForm;
