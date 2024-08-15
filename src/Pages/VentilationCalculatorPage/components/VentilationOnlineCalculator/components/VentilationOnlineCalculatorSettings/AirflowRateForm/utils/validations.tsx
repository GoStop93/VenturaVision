import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useAirflowRateSchema = () => {
  const { t } = useTranslation('ventilationCalculator');

  return yup.object().shape({
    airflowRate: yup
      .number()
      .typeError(t('ventilationCalculator:online_calculator.calculator_settings.airflow_rate_form.validations.typeError'))
      .positive(t('ventilationCalculator:online_calculator.calculator_settings.airflow_rate_form.validations.positive'))
      .max(150, t('ventilationCalculator:online_calculator.calculator_settings.airflow_rate_form.validations.max'))
      .required(t('ventilationCalculator:online_calculator.calculator_settings.airflow_rate_form.validations.required')),
  });
};
