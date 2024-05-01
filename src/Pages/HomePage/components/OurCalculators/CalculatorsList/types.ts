export interface ICalculatorEntity {
  buttonName: string;
  url: string;
  description: string;
}

export interface ICalculatorsEntity extends Array<ICalculatorEntity> {}

export const calculatorsData: ICalculatorsEntity = [
  {
    buttonName: 'Ventilation System',
    url: 'ventilation-system-calculator',
    description:
      'Perform ventilation system calculations for your apartment or house, including supply, supply and exhaust, and local exhaust systems',
  },
  {
    buttonName: 'Air Conditioning System',
    url: 'air-conditioning-system-calculator',
    description: 'Perform air conditioning system calculations for your apartment or house',
  },
  {
    buttonName: 'Duct Airflow',
    url: 'duct-airflow-calculator',
    description: 'Choose air ducts for the ventilation system',
  },
  {
    buttonName: 'Ventilation System Aerodynamics',
    url: 'ventilation-system-aerodynamics-calculator',
    description: 'Conduct an aerodynamic analysis of the ventilation system',
  },
];
