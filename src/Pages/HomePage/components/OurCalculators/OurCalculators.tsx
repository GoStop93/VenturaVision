import { useTranslation } from 'react-i18next';

import CalculatorsList from './CalculatorsList';

import * as S from './OurCalculators.styles';

const OurCalculators: React.FC = () => {
  const { t } = useTranslation('home');

  const translations = {
    title_first: t('home:our_calculators.title_first'),
    title_second: t('home:our_calculators.title_second'),
  };

  return (
    <S.Calculators>
      <S.Title variant="h3">
        {translations.title_first} <span>{translations.title_second}</span>
      </S.Title>
      <CalculatorsList />
    </S.Calculators>
  );
};

export default OurCalculators;
