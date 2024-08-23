export interface ICalculatorEntity {
  buttonName: string;
  url: string;
  description: string;
}

export interface ICalculatorsEntity extends Array<ICalculatorEntity> {}
