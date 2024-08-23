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
  getExchangeRate,
  getExchangeRateType,
  getSetExchangeRate,
  getSetExchangeRateType,
} from '@/pages/VentilationCalculatorPage/store/selectors';

import { useExchangeRateSchema } from './utils/validations';

import * as S from './ExchangeRateForm.styles';

const ExchangeRateForm: React.FC = () => {
  const exchangeRateType = useVentilationCalculatorStore(getExchangeRateType);
  const setExchangeRateType = useVentilationCalculatorStore(getSetExchangeRateType);
  const exchangeRate = useVentilationCalculatorStore(getExchangeRate);
  const setExchangeRate = useVentilationCalculatorStore(getSetExchangeRate);

  const exchangeRateSchema = useExchangeRateSchema();

  const {
    control,
    handleSubmit,
    setValue: setFormValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(exchangeRateSchema),
    defaultValues: { exchangeRate: exchangeRate },
  });

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    title: t(
      'ventilationCalculator:online_calculator.calculator_settings.exchange_rate_form.title',
    ),
    label_min: t(
      'ventilationCalculator:online_calculator.calculator_settings.exchange_rate_form.label_min',
    ),
    label_comfort: t(
      'ventilationCalculator:online_calculator.calculator_settings.exchange_rate_form.label_comfort',
    ),
    label_custom: t(
      'ventilationCalculator:online_calculator.calculator_settings.exchange_rate_form.label_custom',
    ),
  };

  const onSubmit = (data: { exchangeRate: number }) => {
    setExchangeRate(data.exchangeRate);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue: 'min' | 'max' | 'custom' = event.target.value as 'min' | 'max' | 'custom';
    setExchangeRateType(selectedValue);

    if (selectedValue === 'min') {
      setFormValue('exchangeRate', 1);
      setExchangeRate(1);
    } else if (selectedValue === 'max') {
      setFormValue('exchangeRate', 2);
      setExchangeRate(2);
    } else if (selectedValue === 'custom') {
      setFormValue('exchangeRate', 3);
    }

    handleSubmit(onSubmit)();
  };

  return (
    <S.Form>
      <Typography variant="h5" style={{ marginBottom: '10px' }}>
        {translations.title}
      </Typography>
      <RadioGroup value={exchangeRateType} onChange={handleRadioChange}>
        <FormControlLabel value="min" control={<Radio />} label={translations.label_min} />
        <FormControlLabel value="max" control={<Radio />} label={translations.label_comfort} />
        <FormControlLabel
          value="custom"
          control={<Radio />}
          label={
            <S.Field>
              {exchangeRateType !== 'custom' && `${translations.label_custom}`}
              {exchangeRateType === 'custom' && (
                <Controller
                  name="exchangeRate"
                  control={control}
                  render={({ field }) => (
                    <S.Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        const value = +e.target.value;
                        if (!isNaN(value)) {
                          if (value !== 0 && value > 0 && value < 21) {
                            setExchangeRate(value);
                          } else {
                            setExchangeRate(2);
                          }
                        }
                      }}
                      size="small"
                      type="number"
                      inputProps={{ min: 1, step: 1, max: 20 }}
                    />
                  )}
                />
              )}
            </S.Field>
          }
        />
        {errors.exchangeRate && <ErrorMessage error={errors.exchangeRate.message} />}
      </RadioGroup>
    </S.Form>
  );
};

export default ExchangeRateForm;
