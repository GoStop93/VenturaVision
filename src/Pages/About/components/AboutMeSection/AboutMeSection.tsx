import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import myPhoto from '@/assets/images/about/my_photo.png';

import * as S from './AboutMeSection.styles';

const AboutMeSection: React.FC = () => {
  const { t } = useTranslation('about');

  const translations = {
    title_first: t('about:about_me.title_first'),
    title_second: t('about:about_me.title_second'),
    description_part_1: t('about:about_me.description_part_1'),
    description_part_2: t('about:about_me.description_part_2'),
    description_part_3: t('about:about_me.description_part_3'),
  };

  return (
    <S.Section>
      <S.Text>
        <S.Title variant="h3">
          <span>{translations.title_first}</span> {translations.title_second}
        </S.Title>
        <Typography variant="h5">
          {translations.description_part_1} <br />
          <br /> {translations.description_part_2} <br />
          <br /> {translations.description_part_3}
        </Typography>
      </S.Text>
      <S.Image src={myPhoto} />
    </S.Section>
  );
};

export default AboutMeSection;
