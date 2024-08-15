import * as yup from 'yup';

import { useTranslation } from 'react-i18next';

export const useExchangeRateSchema = () => {
  const { t } = useTranslation('ventilationCalculator');

  return yup.object().shape({
    exchangeRate: yup
      .number()
      .typeError(t('ventilationCalculator:online_calculator.calculator_settings.exchange_rate_form.validations.typeError'))
      .positive(t('ventilationCalculator:online_calculator.calculator_settings.exchange_rate_form.validations.positive'))
      .max(20, t('ventilationCalculator:online_calculator.calculator_settings.exchange_rate_form.validations.max'))
      .required(t('ventilationCalculator:online_calculator.calculator_settings.exchange_rate_form.validations.required')),
  });
};
