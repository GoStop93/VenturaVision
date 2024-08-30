import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import { Tab } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import FormPrompt from '@/components/FormPrompt/FormPrompt';
import { TabPanel, TabsContainer } from '@/components/Tabs';

import { IAirConditionEntity } from '@/models/air-condition';
import transition from '@/utils/transition/transition';

import AirConditionCalculationMethodology from './components/AirConditionCalculationMethodology';
import AirConditionOnlineCalculator from './components/AirConditionOnlineCalculator';
import {
  INSOLATION_TYPES_OPTIONS,
  SELECTED_VENTILATION_OPTIONS,
} from './components/AirConditionOnlineCalculator/components/AirConditionCalculatorForm/types';
import { useAirConditionSchema } from './components/AirConditionOnlineCalculator/components/AirConditionCalculatorForm/utils/validations';
import { powerIncreasePercentageTypes } from './components/AirConditionOnlineCalculator/components/AirConditionForm/AirConditionForm';
import { SELECTED_OPTIONS } from '../VentilationCalculatorPage/components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/types';

import * as S from './AirConditionCalculatorPage.styles';

const AirConditionCalculatorPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [rooms, setRooms] = useState<IAirConditionEntity[]>([]);

  const { t } = useTranslation('airConditionCalculator');

  const airConditionSchema = useAirConditionSchema();

  const translations = {
    first_tab: t('airConditionCalculator:tabs_group.first_tab'),
    second_tab: t('airConditionCalculator:tabs_group.second_tab'),
  };

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  const tabs = [{ label: translations.first_tab }, { label: translations.second_tab }];

  const methods = useForm({
    resolver: yupResolver(airConditionSchema),
    defaultValues: {
      rooms: [
        {
          id: uuidv4(),
          roomNumber: 1,
          selectedOption: SELECTED_OPTIONS.SQUARE,
          name: '',
          ceilingHeight: undefined,
          length: undefined,
          width: undefined,
          area: undefined,
          people: undefined,
          insolationType: INSOLATION_TYPES_OPTIONS.LOW,
          computers: undefined,
          TVs: undefined,
          appliances: undefined,
          topFloor: false,
          panoramicWindows: false,
          hotClimate: false,
          powerIncreaseType: undefined,
          considerVentilation: false,
          selectedVentilationOption: SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE,
          exchangeRate: undefined,
          airflowRate: undefined,
        },
      ],
    },
  });

  return (
    <FormProvider {...methods}>
      <FormPrompt formHandleSubmit={methods.handleSubmit}>
        {() => (
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
              <AirConditionOnlineCalculator rooms={rooms} setRooms={setRooms} />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <AirConditionCalculationMethodology />
            </TabPanel>
          </S.AirConditionCalculator>
        )}
      </FormPrompt>
    </FormProvider>
  );
};

export default transition(AirConditionCalculatorPage);
