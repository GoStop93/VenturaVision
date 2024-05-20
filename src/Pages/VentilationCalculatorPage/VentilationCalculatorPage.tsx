import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import transition from '../../utils/transition/transition';
import { TabPanel, TabsContainer } from '../../components/Tabs';
import { Tab } from '@mui/material';

import VentilationCalculationMethodology from './components/VentilationCalculationMethodology';
import VentilationOnlineCalculator from './components/VentilationOnlineCalculator';

import * as S from './VentilationCalculatorPage.styles';

const VentilationCalculatorPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    first_tab: t('ventilationCalculator:tabs_group.first_tab'),
    second_tab: t('ventilationCalculator:tabs_group.second_tab'),
  };

  const tabs = [{ label: translations.first_tab }, { label: translations.second_tab }];

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <S.VentilationCalculator>
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
        <VentilationOnlineCalculator />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <VentilationCalculationMethodology />
      </TabPanel>
    </S.VentilationCalculator>
  );
};

export default transition(VentilationCalculatorPage);
