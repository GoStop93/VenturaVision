import { IVentilationResult } from '../types';

export const groupBySystem = (results: IVentilationResult[]): { [key: string]: number } => {
  return results.reduce((acc: { [key: string]: number }, result: IVentilationResult) => {
    const { systemName, ventilation } = result;
    if (!acc[systemName]) {
      acc[systemName] = 0;
    }
    acc[systemName] += ventilation;
    return acc;
  }, {});
};
