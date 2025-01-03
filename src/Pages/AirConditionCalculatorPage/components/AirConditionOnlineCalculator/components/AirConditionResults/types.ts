import { IAirConditionEntity } from '@/models/air-condition';

export interface IAirConditionResultsProps {
  rooms: IAirConditionEntity[];
}

export interface IAirConditionResult {
  systemName: string;
  name: string;
  id: string;
  ceilingHeight: number;
  area: number | undefined;
  Q: number;
}
