import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Tab } from '@mui/material';

import { TabPanel, TabsContainer } from '@/components/Tabs';

import transition from '@/utils/transition/transition';

import AirConditionCalculationMethodology from './components/AirConditionCalculationMethodology';
import AirConditionOnlineCalculator from './components/AirConditionOnlineCalculator';

import * as S from './AirConditionCalculatorPage.styles';

const AirConditionCalculatorPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const { t } = useTranslation('airConditionCalculator');

  const translations = {
    first_tab: t('airConditionCalculator:tabs_group.first_tab'),
    second_tab: t('airConditionCalculator:tabs_group.second_tab'),
  };

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  const tabs = [{ label: translations.first_tab }, { label: translations.second_tab }];

  return (
    <S.AirConditionCalculator>
      <TabsContainer
        value={tabValue}
        onChange={handleTabChange}
        variant="scrollable"
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {tabs.map((tab) => (
          <Tab key={tab.label} label={tab.label} />
        ))}
      </TabsContainer>
      <TabPanel value={tabValue} index={0}>
        <AirConditionOnlineCalculator />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <AirConditionCalculationMethodology />
      </TabPanel>
    </S.AirConditionCalculator>
  );
};

export default transition(AirConditionCalculatorPage);
