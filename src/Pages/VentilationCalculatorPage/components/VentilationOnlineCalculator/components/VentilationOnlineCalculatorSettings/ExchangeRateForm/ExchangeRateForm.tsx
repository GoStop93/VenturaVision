import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { useVentilationCalculatorStore } from '../../../../../store/store';
import { getExchangeRate, getExchangeRateType, getSetExchangeRate, getSetExchangeRateType } from '../../../../../store/selectors';

import ErrorMessage from '../../../../../../../components/ErrorMessage';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

import { exchangeRateSchema } from './utils/validations';

import * as S from './ExchangeRateForm.styles';

const ExchangeRateForm: React.FC = () => {
  const exchangeRateType = useVentilationCalculatorStore(getExchangeRateType);
  const setExchangeRateType = useVentilationCalculatorStore(getSetExchangeRateType);
  const exchangeRate = useVentilationCalculatorStore(getExchangeRate);
  const setExchangeRate = useVentilationCalculatorStore(getSetExchangeRate);

  const {
    control,
    handleSubmit,
    setValue: setFormValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(exchangeRateSchema),
    defaultValues: { exchangeRate: exchangeRate },
  });

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
        Кратность воздухообмена:
      </Typography>
      <RadioGroup value={exchangeRateType} onChange={handleRadioChange}>
        <FormControlLabel value="min" control={<Radio />} label="Минимальная (1 кратность)" />
        <FormControlLabel value="max" control={<Radio />} label="Комфортная (2 кратности)" />
        <FormControlLabel
          value="custom"
          control={<Radio />}
          label={
            <S.Field>
              {exchangeRateType !== 'custom' && 'Задать свою кратность'}
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
