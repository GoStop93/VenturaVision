import { useTranslation } from 'react-i18next';

import {
  AERODYNAMICS_CALCULATOR,
  AIR_CONDITION_CALCULATOR,
  DUCT_CALCULATOR,
  VENTILATION_CALCULATOR,
} from '@/constants/path';

import { ICalculatorsEntity } from './types';
import CalculatorCard from '../CalculatorCard';

import * as S from './CalculatorsList.styles';

const CalculatorsList: React.FC = () => {
  const { t } = useTranslation('home');

  const translations = {
    ventilation_button: t('home:calculators.ventilation.button'),
    ventilation_description: t('home:calculators.ventilation.description'),
    air_condition_button: t('home:calculators.air-condition.button'),
    air_condition_description: t('home:calculators.air-condition.description'),
    duct_airflow_button: t('home:calculators.duct-airflow.button'),
    duct_airflow_description: t('home:calculators.duct-airflow.description'),
    aerodynamics_button: t('home:calculators.aerodynamics.button'),
    aerodynamics_description: t('home:calculators.aerodynamics.description'),
  };

  const calculatorsData: ICalculatorsEntity = [
    {
      buttonName: translations.ventilation_button,
      url: VENTILATION_CALCULATOR,
      description: translations.ventilation_description,
    },
    {
      buttonName: translations.air_condition_button,
      url: AIR_CONDITION_CALCULATOR,
      description: translations.air_condition_description,
    },
    {
      buttonName: translations.duct_airflow_button,
      url: DUCT_CALCULATOR,
      description: translations.duct_airflow_description,
    },
    {
      buttonName: translations.aerodynamics_button,
      url: AERODYNAMICS_CALCULATOR,
      description: translations.aerodynamics_description,
    },
  ];

  return (
    <S.CalculatorsList>
      {calculatorsData.map((calculator) => (
        <CalculatorCard key={calculator.buttonName} calculator={calculator} />
      ))}
    </S.CalculatorsList>
  );
};

export default CalculatorsList;
