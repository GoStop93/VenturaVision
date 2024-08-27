import { useTranslation } from 'react-i18next';

import * as S from './AirConditionCalculationMethodology.styles';

const AirConditionCalculationMethodology: React.FC = () => {
  const { t } = useTranslation('airConditionCalculator');

  const translations = {
    title_first: t('airConditionCalculator:methodology.title_first'),
    title_second: t('airConditionCalculator:methodology.title_second'),
    text_1: t('airConditionCalculator:methodology.text_1'),
    text_2: t('airConditionCalculator:methodology.text_2'),
    first_item_title: t('airConditionCalculator:methodology.item_1.title'),
    first_item_part_1: t('airConditionCalculator:methodology.item_1.part_1'),
    first_item_part_2: t('airConditionCalculator:methodology.item_1.part_2'),
    first_item_part_3: t('airConditionCalculator:methodology.item_1.part_3'),
    first_item_part_4: t('airConditionCalculator:methodology.item_1.part_4'),
    first_item_sub_1: t('airConditionCalculator:methodology.item_1.sub_1'),
    first_item_sub_2: t('airConditionCalculator:methodology.item_1.sub_2'),
    first_item_sub_3: t('airConditionCalculator:methodology.item_1.sub_3'),
    second_item_title: t('airConditionCalculator:methodology.item_2.title'),
    second_item_subtitle: t('airConditionCalculator:methodology.item_2.subtitle'),
    second_item_sub_1: t('airConditionCalculator:methodology.item_2.sub_1'),
    second_item_sub_2: t('airConditionCalculator:methodology.item_2.sub_2'),
    second_item_sub_3: t('airConditionCalculator:methodology.item_2.sub_3'),
    second_item_sub_4: t('airConditionCalculator:methodology.item_2.sub_4'),
    second_item_sub_5: t('airConditionCalculator:methodology.item_2.sub_5'),
    second_item_sub_6: t('airConditionCalculator:methodology.item_2.sub_6'),
    third_item_title: t('airConditionCalculator:methodology.item_3.title'),
    third_item_subtitle: t('airConditionCalculator:methodology.item_3.subtitle'),
    third_item_sub_1: t('airConditionCalculator:methodology.item_3.sub_1'),
    third_item_sub_2: t('airConditionCalculator:methodology.item_3.sub_2'),
    third_item_sub_3: t('airConditionCalculator:methodology.item_3.sub_3'),
    third_item_sub_4: t('airConditionCalculator:methodology.item_3.sub_4'),
    third_item_sub_5: t('airConditionCalculator:methodology.item_3.sub_5'),
  };

  return (
    <S.CalculationMethodology>
      <S.Title variant="h3">
        {translations.title_first}
        <span>{translations.title_second}</span>
      </S.Title>
      <S.Text>
        {translations.text_1}
        <br />
        <br />
        <strong>Q = Q1 + Q2 + Q3</strong>
        {translations.text_2}
        <ul>
          <li>
            <strong>Q1</strong>
            {translations.first_item_title}
            <br />
            <br />
            <ul>
              <strong>Q1 = S * h * q / 1000</strong>
              {translations.first_item_part_1}
              <ul>
                <strong>S</strong>
                {translations.first_item_part_2}
                <br />
                <strong>h</strong>
                {translations.first_item_part_3}
                <br />
                <strong>q</strong>
                {translations.first_item_part_4}
                <ul>
                  {translations.first_item_sub_1}
                  <br />
                  {translations.first_item_sub_2}
                  <br />
                  {translations.first_item_sub_3}
                </ul>
              </ul>
            </ul>
          </li>
          <br />
          <br />
          <li>
            <strong>Q2</strong>
            {translations.second_item_title}
            <br />
            <br />
            <ul>
              {translations.second_item_subtitle}
              <ul>
                <strong>{translations.second_item_sub_1}</strong>
                {translations.second_item_sub_2}
                <br />
                <strong>{translations.second_item_sub_3}</strong>
                {translations.second_item_sub_4}
                <br />
                <strong>{translations.second_item_sub_5}</strong>
                {translations.second_item_sub_6}
              </ul>
            </ul>
          </li>
          <br />
          <br />
          <li>
            <strong>Q3</strong>
            {translations.third_item_title}
            <br />
            <br />
            <ul>
              {translations.third_item_subtitle}
              <ul>
                <strong>{translations.third_item_sub_1}</strong>
                {translations.third_item_sub_2}
                <br />
                <strong>{translations.third_item_sub_3}</strong>
                {translations.third_item_sub_4}
                <br />
                {translations.third_item_sub_5}
              </ul>
            </ul>
          </li>
        </ul>
      </S.Text>
    </S.CalculationMethodology>
  );
};

export default AirConditionCalculationMethodology;
