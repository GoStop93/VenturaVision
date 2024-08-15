import { IVentilationEntity } from '../../../../../../../models/ventilation';

export interface IVentilationCalculationResultsProps {
  rooms: IVentilationEntity[];
}

export interface IVentilationResult {
  systemName: string;
  name: string;
  ventilation: number;
  id: string;
  people?: number;
  ceilingHeight?: number;
  area?: number;
}
