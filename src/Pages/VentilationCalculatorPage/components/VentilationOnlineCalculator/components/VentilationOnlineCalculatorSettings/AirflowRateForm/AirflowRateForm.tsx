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
  getAirflowRate,
  getAirflowRateType,
  getSetAirflowRate,
  getSetAirflowRateType,
} from '@/pages/VentilationCalculatorPage/store/selectors';

import { useAirflowRateSchema } from './utils/validations';

import * as S from './AirflowRateForm.styles';

const AirflowRateForm: React.FC = () => {
  const airflowRateType = useVentilationCalculatorStore(getAirflowRateType);
  const setAirflowRateType = useVentilationCalculatorStore(getSetAirflowRateType);
  const airflowRate = useVentilationCalculatorStore(getAirflowRate);
  const setAirflowRate = useVentilationCalculatorStore(getSetAirflowRate);

  const airflowRateSchema = useAirflowRateSchema();

  const {
    control,
    handleSubmit,
    setValue: setFormValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(airflowRateSchema),
    defaultValues: { airflowRate: airflowRate },
  });

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    title: t('ventilationCalculator:online_calculator.calculator_settings.airflow_rate_form.title'),
    label_min: t(
      'ventilationCalculator:online_calculator.calculator_settings.airflow_rate_form.label_min',
    ),
    label_comfort: t(
      'ventilationCalculator:online_calculator.calculator_settings.airflow_rate_form.label_comfort',
    ),
    label_custom: t(
      'ventilationCalculator:online_calculator.calculator_settings.airflow_rate_form.label_custom',
    ),
    units: t('ventilationCalculator:online_calculator.calculator_settings.airflow_rate_form.units'),
  };

  const onSubmit = (data: { airflowRate: number }) => {
    setAirflowRate(data.airflowRate);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue: 'min' | 'max' | 'custom' = event.target.value as 'min' | 'max' | 'custom';
    setAirflowRateType(selectedValue);

    if (selectedValue === 'min') {
      setFormValue('airflowRate', 30);
      setAirflowRate(30);
    } else if (selectedValue === 'max') {
      setFormValue('airflowRate', 60);
      setAirflowRate(60);
    } else if (selectedValue === 'custom') {
      setFormValue('airflowRate', 90);
    }

    handleSubmit(onSubmit)();
  };

  return (
    <S.Form>
      <Typography variant="h5" style={{ marginBottom: '10px' }}>
        {translations.title}
      </Typography>
      <RadioGroup value={airflowRateType} onChange={handleRadioChange}>
        <FormControlLabel value="min" control={<Radio />} label={translations.label_min} />
        <FormControlLabel value="max" control={<Radio />} label={translations.label_comfort} />
        <FormControlLabel
          value="custom"
          control={<Radio />}
          label={
            <S.Field>
              {airflowRateType !== 'custom' && `${translations.label_custom}`}
              {airflowRateType === 'custom' && (
                <Controller
                  name="airflowRate"
                  control={control}
                  render={({ field }) => (
                    <>
                      <S.Input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          const value = +e.target.value;
                          if (!isNaN(value)) {
                            if (value !== 0 && value > 0 && value < 151) {
                              setAirflowRate(value);
                            } else {
                              setAirflowRate(60);
                            }
                          }
                        }}
                        size="small"
                        type="number"
                        inputProps={{ min: 1, step: 1 }}
                      />
                      {translations.units}
                    </>
                  )}
                />
              )}
            </S.Field>
          }
        />
        {errors.airflowRate && <ErrorMessage error={errors.airflowRate.message} />}
      </RadioGroup>
    </S.Form>
  );
};

export default AirflowRateForm;
