import { Dispatch, SetStateAction } from 'react';

import { IAirConditionEntity } from '@/models/air-condition';

export interface IAirConditionOnlineCalculatorProps {
  rooms: IAirConditionEntity[];
  setRooms: Dispatch<SetStateAction<IAirConditionEntity[]>>;
}
