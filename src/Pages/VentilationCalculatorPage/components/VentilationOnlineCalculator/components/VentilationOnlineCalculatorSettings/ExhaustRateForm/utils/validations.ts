import { useTranslation } from 'react-i18next';

import * as yup from 'yup';

export const useExhaustRateSchema = () => {
  const { t } = useTranslation('ventilationCalculator');

  return yup.object().shape({
    bathroomExhaustRate: yup
      .number()
      .typeError(
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.typeError',
        ),
      )
      .positive(
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.positive',
        ),
      )
      .max(
        20,
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.max',
        ),
      )
      .required(
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.required',
        ),
      ),
    toiletExhaustRate: yup
      .number()
      .typeError(
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.typeError',
        ),
      )
      .positive(
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.positive',
        ),
      )
      .max(
        20,
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.max',
        ),
      )
      .required(
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.required',
        ),
      ),
    laundryRoomExhaustRate: yup
      .number()
      .typeError(
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.typeError',
        ),
      )
      .positive(
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.positive',
        ),
      )
      .max(
        20,
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.max',
        ),
      )
      .required(
        t(
          'ventilationCalculator:online_calculator.calculator_settings.exhaust_rate_form.validations.required',
        ),
      ),
  });
};
