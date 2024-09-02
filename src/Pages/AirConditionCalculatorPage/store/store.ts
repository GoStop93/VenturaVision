import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IAirConditionCalculatorStore } from './types';

export const useAirConditionCalculatorStore = create<IAirConditionCalculatorStore>()(
  devtools((set) => ({
    considerVentilation: false,
    setConsiderVentilation: (value) => set(() => ({ considerVentilation: value })),

    topFloor: false,
    setTopFloor: (value) => set(() => ({ topFloor: value })),

    panoramicWindows: false,
    setPanoramicWindows: (value) => set(() => ({ panoramicWindows: value })),

    hotClimate: false,
    setHotClimate: (value) => set(() => ({ hotClimate: value })),

    powerIncreaseType: '10',
    setPowerIncreaseType: (value) => set(() => ({ powerIncreaseType: value })),

    exchangeRate: 2,
    setExchangeRate: (value) => set(() => ({ exchangeRate: value })),

    windowArea: 5,
    setWindowArea: (value) => set(() => ({ windowArea: value })),
  })),
);
