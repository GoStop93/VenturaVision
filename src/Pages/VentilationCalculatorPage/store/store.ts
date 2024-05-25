import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IVentilationCalculatorStore } from './types';

export const useVentilationCalculatorStore = create<IVentilationCalculatorStore>()(
  devtools((set) => ({
    airflowRateType: 'max',
    setAirflowRateType: (value) => set(() => ({ airflowRateType: value })),

    airflowRate: 60,
    setAirflowRate: (value) => set(() => ({ airflowRate: value })),

    exchangeRateType: 'max',
    setExchangeRateType: (value) => set(() => ({ exchangeRateType: value })),

    exchangeRate: 2,
    setExchangeRate: (value) => set(() => ({ exchangeRate: value })),
  }))
);
