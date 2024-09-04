export const calculateQ3 = (computers?: number, TVs?: number, appliances?: number) => {
  let Q3 = 0;

  if (computers) {
    Q3 += computers * 0.3;
  }

  if (TVs) {
    Q3 += TVs * 0.2;
  }

  if (appliances) {
    Q3 += appliances * 0.3;
  }

  Q3 = Math.round(Q3 * 100) / 100;

  return Q3;
};
