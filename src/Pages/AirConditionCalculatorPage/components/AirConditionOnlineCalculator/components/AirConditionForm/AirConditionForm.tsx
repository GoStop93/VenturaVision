import { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

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

  const translatedInsolationTypes = {
    [INSOLATION_TYPES_OPTIONS.LOW]: 'Слабая',
    [INSOLATION_TYPES_OPTIONS.MEDIUM]: 'Средняя',
    [INSOLATION_TYPES_OPTIONS.HIGH]: 'Сильная',
  }; //TODO: add translations

  const translatedPhysicalActivityTypes = {
    [PHYSICAL_ACTIVITY_TYPES_OPTIONS.LOW]: 'Отдых',
    [PHYSICAL_ACTIVITY_TYPES_OPTIONS.MEDIUM]: 'Работа',
    [PHYSICAL_ACTIVITY_TYPES_OPTIONS.HIGH]: 'Тренировка',
  }; //TODO: add translations

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
        <Typography variant="h6">Комната {roomNumber}</Typography>
        {isVisibleDeleteButton && (
          <IconButton onClick={onRemove}>
            <DeleteIcon sx={{ fontSize: '18px', color: colors.orange }} />
          </IconButton>
        )}
        <S.Image src={airConditionImage} />
      </S.Header>
      <S.VerticalWrapper>
        <Typography>Наименование помещения:</Typography>
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
              <Typography>Номер системы:</Typography>
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
                  tooltipText={
                    'Укажите номер системы кондиционирования (по умолчанию 1). Используйте разные номера для разделения проекта на несколько отдельных систем, если это необходимо'
                  }
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
                label={'Площадь'} //TODO: add translation</S.SwitchWrapper>
              />
              <FormControlLabel
                value={SELECTED_OPTIONS.DIMENSIONS}
                control={<Radio />}
                label={'Размеры'} //TODO: add translation
              />
            </RadioGroup>
            {selectedOption === SELECTED_OPTIONS.DIMENSIONS && (
              <>
                <S.InputWrapper>
                  <S.HorizontalWrapper>
                    <Typography>Длина помещения:</Typography>
                    <S.FlexWrapper>
                      <Controller
                        name={`rooms.${index}.length`}
                        control={control}
                        render={({ field }) => (
                          <S.Input size="small" {...field} placeholder="2000" />
                        )}
                      />
                      мм
                    </S.FlexWrapper>
                  </S.HorizontalWrapper>
                  {errors?.length && <ErrorMessage error={errors.length.message} />}
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.HorizontalWrapper>
                    <Typography>Ширина помещения:</Typography>
                    <S.FlexWrapper>
                      <Controller
                        name={`rooms.${index}.width`}
                        control={control}
                        render={({ field }) => (
                          <S.Input size="small" {...field} placeholder="3000" />
                        )}
                      />
                      мм
                    </S.FlexWrapper>
                  </S.HorizontalWrapper>
                  {errors?.width && <ErrorMessage error={errors.width.message} />}
                </S.InputWrapper>
              </>
            )}

            {selectedOption === SELECTED_OPTIONS.SQUARE && (
              <S.InputWrapper>
                <S.HorizontalWrapper>
                  <Typography>Площадь помещения:</Typography>
                  <S.FlexWrapper>
                    <Controller
                      name={`rooms.${index}.area`}
                      control={control}
                      render={({ field }) => <S.Input size="small" {...field} placeholder="24" />}
                    />
                    м²&nbsp;
                  </S.FlexWrapper>
                </S.HorizontalWrapper>
                {errors?.area && <ErrorMessage error={errors.area.message} />}
              </S.InputWrapper>
            )}
          </S.SwitchWrapper>
          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>Высота потолка:</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.ceilingHeight`}
                  control={control}
                  render={({ field }) => <S.Input size="small" {...field} placeholder="3200" />}
                />
                мм
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.ceilingHeight && <ErrorMessage error={errors.ceilingHeight.message} />}
          </S.InputWrapper>

          <S.HorizontalWrapper>
            <Typography>Инсоляция:</Typography>
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
              <InfoHelper tooltipText={'Освещенность солнцем'} />
            </S.FlexWrapper>
          </S.HorizontalWrapper>

          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>Количество людей:</Typography>
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
                шт
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.people && <ErrorMessage error={errors.people.message} />}
          </S.InputWrapper>

          {watch(`rooms.${index}.people`, 0) > 0 && (
            <S.HorizontalWrapper>
              <Typography style={{ width: '130px' }}>Уровень физичекой нагрузки:</Typography>
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
              <Typography>Количество компьютеров:</Typography>
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
                шт
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.computers && <ErrorMessage error={errors.computers.message} />}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>Количество телевизоров:</Typography>
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
                шт
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.TVs && <ErrorMessage error={errors.TVs.message} />}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>Мощность остальной техники:</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.appliances`}
                  control={control}
                  render={({ field }) => <S.Input size="small" {...field} placeholder="5" />}
                />
                кВт
                <InfoHelper
                  tooltipText={
                    'Для других приборов можно считать, что они выделяют в виде тепла 30% от максимальной потребляемой мощности. Укажите суммарную потребляемую мощность остальной бытовой техники'
                  }
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
                <Typography>Учитывать вентиляцию</Typography>
                <S.FlexWrapper>
                  <Switch checked={considerVentilation} onChange={toggleConsiderVentilation} />
                  <InfoHelper tooltipText="При выборе опции мощность кондиционера будет увеличина для компенсации тепловой нагрузки от приточного воздуха. Рекомендуемое значение кратности воздухообмена для жилых помещений - 2" />
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
                    label={'Кратность'} //TODO: add translation
                  />
                  <FormControlLabel
                    value={SELECTED_VENTILATION_OPTIONS.AIRFLOW_RATE}
                    control={<Radio />}
                    label={'Расход'} //TODO: add translation
                  />
                </RadioGroup>
              )}
              {considerVentilation &&
                selectedVentilationOption === SELECTED_VENTILATION_OPTIONS.AIRFLOW_RATE && (
                  <S.InputWrapper>
                    <S.HorizontalWrapper>
                      <Typography>Расход воздуха:</Typography>
                      <S.FlexWrapper>
                        <Controller
                          name={`rooms.${index}.airflowRate`}
                          control={control}
                          render={({ field }) => (
                            <S.Input size="small" {...field} placeholder="120" />
                          )}
                        />
                        м³/ч
                      </S.FlexWrapper>
                    </S.HorizontalWrapper>
                    {errors?.airflowRate && <ErrorMessage error={errors.airflowRate.message} />}
                  </S.InputWrapper>
                )}
              {considerVentilation &&
                selectedVentilationOption === SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE && (
                  <S.InputWrapper>
                    <S.HorizontalWrapper>
                      <Typography>Кратность воздухообмена:</Typography>
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
              <Typography>Верхний этаж</Typography>
              <S.FlexWrapper>
                <Switch checked={topFloor} onChange={toggleTopFloor} />
                <InfoHelper tooltipText="При выборе опции мощность кондиционера будет увеличина для компенсации теплопритоков от нагретой крыши (в калькуляторе используется среднее значение - 15%). Выберите данную опцию, если помещение расположено на последнем этаже и сверху нет чердака или технического этажа" />
              </S.FlexWrapper>
            </S.HorizontalWrapper>
          </S.SwitchWrapper>

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
                      name={`rooms.${index}.windowArea`}
                      control={control}
                      render={({ field }) => <S.Input size="small" {...field} placeholder="5" />}
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
