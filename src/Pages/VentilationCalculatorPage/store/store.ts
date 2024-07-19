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

    exhaustRateType: 'norm',
    setExhaustRateType: (value) => set(() => ({ exhaustRateType: value })),

    bathroomExhaustRate: 8,
    setBathroomExhaustRate: (value) => set(() => ({ exchangeRate: value })),

    toiletExhaustRate: 9,
    setToiletExhaustRate: (value) => set(() => ({ exchangeRate: value })),

    laundryRoomExhaustRate: 7,
    setLaundryRoomExhaustRate: (value) => set(() => ({ exchangeRate: value })),
  }))
);
