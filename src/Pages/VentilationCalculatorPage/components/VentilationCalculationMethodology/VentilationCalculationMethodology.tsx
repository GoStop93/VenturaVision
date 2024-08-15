import { useTranslation } from 'react-i18next';

import * as S from './VentilationCalculationMethodology.styles';

const VentilationCalculationMethodology: React.FC = () => {
  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    title_first: t('ventilationCalculator:methodology.title_first'),
    title_second: t('ventilationCalculator:methodology.title_second'),
    text_1: t('ventilationCalculator:methodology.text_1'),
    text_2: t('ventilationCalculator:methodology.text_2'),
    text_3: t('ventilationCalculator:methodology.text_3'),
    first_calculation_title: t('ventilationCalculator:methodology.first_calculation.title'),
    first_calculation_formula: t('ventilationCalculator:methodology.first_calculation.formula'),
    first_calculation_description_1: t('ventilationCalculator:methodology.first_calculation.description_1'),
    first_calculation_description_2: t('ventilationCalculator:methodology.first_calculation.description_2'),
    first_calculation_description_3: t('ventilationCalculator:methodology.first_calculation.description_3'),
    first_calculation_description_4: t('ventilationCalculator:methodology.first_calculation.description_4'),
    first_calculation_description_5: t('ventilationCalculator:methodology.first_calculation.description_5'),
    second_calculation_title: t('ventilationCalculator:methodology.second_calculation.title'),
    second_calculation_formula: t('ventilationCalculator:methodology.second_calculation.formula'),
    second_calculation_description_1: t('ventilationCalculator:methodology.second_calculation.description_1'),
    second_calculation_description_2: t('ventilationCalculator:methodology.second_calculation.description_2'),
    second_calculation_description_3: t('ventilationCalculator:methodology.second_calculation.description_3'),
    second_calculation_description_4: t('ventilationCalculator:methodology.second_calculation.description_4'),
    exhaust_title: t('ventilationCalculator:methodology.exhaust.title'),
    exhaust_description_1: t('ventilationCalculator:methodology.exhaust.description_1'),
    exhaust_description_2: t('ventilationCalculator:methodology.exhaust.description_2'),
    exhaust_description_3: t('ventilationCalculator:methodology.exhaust.description_3'),
  };

  return (
    <S.CalculationMethodology>
      <S.Title variant="h3">
        {translations.title_first}
        <span> {translations.title_second}</span>
      </S.Title>
      <S.Text>
        {translations.text_1}
        <br />
        <br />
        {translations.text_2}
        <br />
        <br />
        {translations.text_3}
        <br />
        <br />
        <ol>
          <li>
            {translations.first_calculation_title}
            <br />
            <strong>
              L = N * L<sub>norm</sub>
            </strong>
            {translations.first_calculation_formula}
            <br />
            <ul>
              <strong>L</strong>
              {translations.first_calculation_description_1}
              <br />
              <strong>N</strong>
              {translations.first_calculation_description_2}
              <br />
              <strong>
                L<sub>norm</sub>
              </strong>
              {translations.first_calculation_description_3}
              <br />
              <ul>
                <li>{translations.first_calculation_description_4}</li>
                <li>{translations.first_calculation_description_5}</li>
              </ul>
            </ul>
          </li>
          <br />
          <li>
            {translations.second_calculation_title}
            <br />
            <strong>L = n * S * h</strong>
            {translations.second_calculation_formula}
            <br />
            <ul>
              <strong>L</strong>
              {translations.second_calculation_description_1}
              <br />
              <strong>n</strong>
              {translations.second_calculation_description_2}
              <br />
              <strong>S</strong>
              {translations.second_calculation_description_3}
              <br />
              <strong>h</strong>
              {translations.second_calculation_description_4}
            </ul>
          </li>
        </ol>
        <br />
        <br />
        {translations.exhaust_title}
        <br />
        <S.List>
          <li>{translations.exhaust_description_1}</li>
          <li>{translations.exhaust_description_2}</li>
          <li>{translations.exhaust_description_3}</li>
        </S.List>
      </S.Text>
    </S.CalculationMethodology>
  );
};

export default VentilationCalculationMethodology;
