import { useEffect, useState } from 'react';
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
import { useAirConditionCalculatorStore } from './store';
import {
  getConsiderVentilation,
  getExchangeRate,
  getHotClimate,
  getPanoramicWindows,
  getPowerIncreaseType,
  getTopFloor,
  getWindowArea,
} from './store/selectors';
import { SELECTED_OPTIONS } from '../VentilationCalculatorPage/components/VentilationOnlineCalculator/components/VentilationOnlineCalculatorForms/types';

import * as S from './AirConditionCalculatorPage.styles';

const AirConditionCalculatorPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [rooms, setRooms] = useState<IAirConditionEntity[]>([]);

  const considerVentilation = useAirConditionCalculatorStore(getConsiderVentilation);
  const topFloor = useAirConditionCalculatorStore(getTopFloor);
  const panoramicWindows = useAirConditionCalculatorStore(getPanoramicWindows);
  const hotClimate = useAirConditionCalculatorStore(getHotClimate);
  const powerIncreaseType = useAirConditionCalculatorStore(getPowerIncreaseType);
  const exchangeRate = useAirConditionCalculatorStore(getExchangeRate);
  const windowArea = useAirConditionCalculatorStore(getWindowArea);

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
          topFloor: topFloor,
          panoramicWindows: panoramicWindows,
          hotClimate: hotClimate,
          powerIncreaseType: powerIncreaseType,
          considerVentilation: considerVentilation,
          selectedVentilationOption: SELECTED_VENTILATION_OPTIONS.AIR_EXCHANGE_RATE,
          exchangeRate: exchangeRate,
          airflowRate: undefined,
          windowArea: windowArea,
        },
      ],
    },
  });

  const {
    setValue,
    formState: { isDirty },
  } = methods;

  useEffect(() => {
    if (!isDirty) {
      setValue('rooms.0.topFloor', topFloor);
      setValue('rooms.0.considerVentilation', considerVentilation);
      setValue('rooms.0.panoramicWindows', panoramicWindows);
      setValue('rooms.0.hotClimate', hotClimate);
      setValue('rooms.0.powerIncreaseType', powerIncreaseType);
      setValue('rooms.0.exchangeRate', exchangeRate);
      setValue('rooms.0.windowArea', windowArea);
    }
  }, [
    topFloor,
    isDirty,
    setValue,
    considerVentilation,
    panoramicWindows,
    hotClimate,
    powerIncreaseType,
    exchangeRate,
    windowArea,
  ]);

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
