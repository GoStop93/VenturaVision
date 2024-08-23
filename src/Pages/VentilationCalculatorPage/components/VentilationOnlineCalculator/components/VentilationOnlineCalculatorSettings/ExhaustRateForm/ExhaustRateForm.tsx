import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import ErrorMessage from '@/components/ErrorMessage';
import { useVentilationCalculatorStore } from '@/pages/VentilationCalculatorPage/store';
import {
  getBathroomExhaustRate,
  getExhaustRateType,
  getLaundryRoomExhaustRate,
  getSetBathroomExhaustRate,
  getSetExhaustRateType,
  getSetLaundryRoomExhaustRate,
  getSetToiletExhaustRate,
  getToiletExhaustRate,
} from '@/pages/VentilationCalculatorPage/store/selectors';

import { useExhaustRateSchema } from './utils/validations';

import * as S from './ExhaustRateForm.styles';

const ExhaustRateForm: React.FC = () => {
  const exhaustRateType = useVentilationCalculatorStore(getExhaustRateType);
  const setExhaustRateType = useVentilationCalculatorStore(getSetExhaustRateType);

  const bathroomExhaustRate = useVentilationCalculatorStore(getBathroomExhaustRate);
  const setBathroomExhaustRate = useVentilationCalculatorStore(getSetBathroomExhaustRate);

  const toiletExhaustRate = useVentilationCalculatorStore(getToiletExhaustRate);
  const setToiletExhaustRate = useVentilationCalculatorStore(getSetToiletExhaustRate);

  const laundryRoomExhaustRate = useVentilationCalculatorStore(getLaundryRoomExhaustRate);
  const setLaundryRoomExhaustRate = useVentilationCalculatorStore(getSetLaundryRoomExhaustRate);

  const exhaustRateSchema = useExhaustRateSchema();

  const {
    control,
    handleSubmit,
    setValue: setFormValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(exhaustRateSchema),
    defaultValues: {
      bathroomExhaustRate: bathroomExhaustRate,
      toiletExhaustRate: toiletExhaustRate,
      laundryRoomExhaustRate: laundryRoomExhaustRate,
    },
  });

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    title: t('ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.title'),
    label_norm: t(
      'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.label_norm',
    ),
    label_custom: t(
      'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.label_custom',
    ),
    label_bathroom: t(
      'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.label_bathroom',
    ),
    label_toilet: t(
      'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.label_toilet',
    ),
    label_laundry_room: t(
      'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.label_laundry_room',
    ),
  };

  const onSubmit = (data: {
    bathroomExhaustRate: number;
    toiletExhaustRate: number;
    laundryRoomExhaustRate: number;
  }) => {
    setBathroomExhaustRate(data.bathroomExhaustRate);
    setToiletExhaustRate(data.toiletExhaustRate);
    setLaundryRoomExhaustRate(data.laundryRoomExhaustRate);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue: 'norm' | 'custom' = event.target.value as 'norm' | 'custom';
    setExhaustRateType(selectedValue);

    if (selectedValue === 'norm') {
      setFormValue('bathroomExhaustRate', 8);
      setFormValue('toiletExhaustRate', 9);
      setFormValue('laundryRoomExhaustRate', 7);
      setBathroomExhaustRate(8);
      setToiletExhaustRate(9);
      setLaundryRoomExhaustRate(7);
    } else if (selectedValue === 'custom') {
      setFormValue('bathroomExhaustRate', 8);
      setFormValue('toiletExhaustRate', 9);
      setFormValue('laundryRoomExhaustRate', 7);
    }

    handleSubmit(onSubmit)();
  };

  return (
    <S.Form>
      <Typography variant="h5" style={{ marginBottom: '10px' }}>
        {translations.title}
      </Typography>
      <RadioGroup value={exhaustRateType} onChange={handleRadioChange}>
        <FormControlLabel value="norm" control={<Radio />} label={translations.label_norm} />
        <FormControlLabel
          value="custom"
          control={<Radio />}
          label={
            <S.Field>
              {exhaustRateType !== 'custom' && `${translations.label_custom}`}
              {exhaustRateType === 'custom' && (
                <S.InputsWrapper>
                  <Controller
                    name="bathroomExhaustRate"
                    control={control}
                    render={({ field }) => (
                      <S.InputWithLabel>
                        <Typography>{translations.label_bathroom}</Typography>
                        <S.Input
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            const value = +e.target.value;
                            if (!isNaN(value)) {
                              if (value !== 0 && value > 0 && value < 21) {
                                setBathroomExhaustRate(value);
                              } else {
                                setBathroomExhaustRate(8);
                              }
                            }
                          }}
                          size="small"
                          type="number"
                          inputProps={{ min: 1, step: 1, max: 20 }}
                        />
                      </S.InputWithLabel>
                    )}
                  />
                  <Controller
                    name="toiletExhaustRate"
                    control={control}
                    render={({ field }) => (
                      <S.InputWithLabel>
                        <Typography>{translations.label_toilet}</Typography>
                        <S.Input
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            const value = +e.target.value;
                            if (!isNaN(value)) {
                              if (value !== 0 && value > 0 && value < 21) {
                                setToiletExhaustRate(value);
                              } else {
                                setToiletExhaustRate(9);
                              }
                            }
                          }}
                          size="small"
                          type="number"
                          inputProps={{ min: 1, step: 1, max: 20 }}
                        />
                      </S.InputWithLabel>
                    )}
                  />
                  <Controller
                    name="laundryRoomExhaustRate"
                    control={control}
                    render={({ field }) => (
                      <S.InputWithLabel>
                        <Typography>{translations.label_laundry_room}</Typography>
                        <S.Input
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            const value = +e.target.value;
                            if (!isNaN(value)) {
                              if (value !== 0 && value > 0 && value < 21) {
                                setLaundryRoomExhaustRate(value);
                              } else {
                                setLaundryRoomExhaustRate(7);
                              }
                            }
                          }}
                          size="small"
                          type="number"
                          inputProps={{ min: 1, step: 1, max: 20 }}
                        />
                      </S.InputWithLabel>
                    )}
                  />
                </S.InputsWrapper>
              )}
            </S.Field>
          }
        />
        {(errors.toiletExhaustRate ||
          errors.bathroomExhaustRate ||
          errors.laundryRoomExhaustRate) && (
          <ErrorMessage
            error={
              errors?.bathroomExhaustRate?.message ||
              errors?.toiletExhaustRate?.message ||
              errors?.laundryRoomExhaustRate?.message
            }
          />
        )}
      </RadioGroup>
    </S.Form>
  );
};

export default ExhaustRateForm;
