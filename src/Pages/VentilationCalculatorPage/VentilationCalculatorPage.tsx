import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';

import { v4 as uuidv4 } from 'uuid';

import transition from '../../utils/transition/transition';
import { TabPanel, TabsContainer } from '../../components/Tabs';
import { Tab } from '@mui/material';

import VentilationCalculationMethodology from './components/VentilationCalculationMethodology';
import VentilationOnlineCalculator from './components/VentilationOnlineCalculator';
import FormPrompt from '../../components/FormPrompt/FormPrompt';

import { IVentilationEntity } from '../../models/ventilation';
import { ROOM_TYPES_OPTIONS, SELECTED_OPTIONS } from './components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/types';

import { yupResolver } from '@hookform/resolvers/yup';
import ventilationSchema from './components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/utils/validations';

import * as S from './VentilationCalculatorPage.styles';

const VentilationCalculatorPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [rooms, setRooms] = useState<IVentilationEntity[]>([]);

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    first_tab: t('ventilationCalculator:tabs_group.first_tab'),
    second_tab: t('ventilationCalculator:tabs_group.second_tab'),
  };

  const tabs = [{ label: translations.first_tab }, { label: translations.second_tab }];

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  const methods = useForm({
    resolver: yupResolver(ventilationSchema),
    mode: 'onChange',
    defaultValues: {
      rooms: [
        {
          id: uuidv4(),
          roomNumber: 1,
          roomType: ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE,
          selectedOption: SELECTED_OPTIONS.SQUARE,
          name: '',
          ceilingHeight: 0,
          length: 0,
          width: 0,
          area: 0,
          people: 0,
        },
      ],
    },
  });

  return (
    <FormProvider {...methods}>
      <FormPrompt formHandleSubmit={methods.handleSubmit}>
        {({ handleSubmit }) => (
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
              <VentilationOnlineCalculator rooms={rooms} setRooms={setRooms} />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <VentilationCalculationMethodology />
            </TabPanel>
          </S.VentilationCalculator>
        )}
      </FormPrompt>
    </FormProvider>
  );
};

export default transition(VentilationCalculatorPage);
