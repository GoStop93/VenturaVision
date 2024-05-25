import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { useVentilationCalculatorStore } from '../../../../../store/store';
import { getAirflowRate, getAirflowRateType, getSetAirflowRate, getSetAirflowRateType } from '../../../../../store/selectors';

import ErrorMessage from '../../../../../../../components/ErrorMessage';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

import { airflowRateSchema } from './utils/validations';

import * as S from './AirflowRateForm.styles';

const AirflowRateForm: React.FC = () => {
  const airflowRateType = useVentilationCalculatorStore(getAirflowRateType);
  const setAirflowRateType = useVentilationCalculatorStore(getSetAirflowRateType);
  const airflowRate = useVentilationCalculatorStore(getAirflowRate);
  const setAirflowRate = useVentilationCalculatorStore(getSetAirflowRate);

  const {
    control,
    handleSubmit,
    setValue: setFormValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(airflowRateSchema),
    defaultValues: { airflowRate: airflowRate },
  });

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
        Расход воздуха на одного человека:
      </Typography>
      <RadioGroup value={airflowRateType} onChange={handleRadioChange}>
        <FormControlLabel value="min" control={<Radio />} label="Минимальный (30 м³/ч)" />
        <FormControlLabel value="max" control={<Radio />} label="Комфортный (60 м³/ч)" />
        <FormControlLabel
          value="custom"
          control={<Radio />}
          label={
            <S.Field>
              {airflowRateType !== 'custom' && 'Задать свой расход'}
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
                      м³/ч
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
