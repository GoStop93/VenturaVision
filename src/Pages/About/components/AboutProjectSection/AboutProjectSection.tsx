import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import projectImage from '@/assets/images/about/venturaVision.png';

import * as S from './AboutProjectSection.styles';

const AboutProjectSection: React.FC = () => {
  const { t } = useTranslation('about');

  const translations = {
    title_first: t('about:about_project.title_first'),
    title_second: t('about:about_project.title_second'),
    description_part_1: t('about:about_project.description_part_1'),
    description_part_2: t('about:about_project.description_part_2'),
    description_part_3: t('about:about_project.description_part_3'),
    list_item_1: t('about:about_project.list_item_1'),
    list_item_2: t('about:about_project.list_item_2'),
    list_item_3: t('about:about_project.list_item_3'),
  };

  return (
    <S.Section>
      <S.Image src={projectImage} />
      <S.Text>
        <S.Title variant="h3">
          {translations.title_first} <span>{translations.title_second}</span>
        </S.Title>
        <Typography variant="h5">
          {translations.description_part_1} <br />
          <br /> {translations.description_part_2}
          <S.List>
            <S.Item>{translations.list_item_1}</S.Item>
            <S.Item>{translations.list_item_2}</S.Item>
            <S.Item>{translations.list_item_3}</S.Item>
          </S.List>
          {translations.description_part_3}
        </Typography>
      </S.Text>
    </S.Section>
  );
};

export default AboutProjectSection;
