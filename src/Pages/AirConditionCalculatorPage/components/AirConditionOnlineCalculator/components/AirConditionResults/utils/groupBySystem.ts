export const groupBySystem = (
    results: {
        systemName: string;
        name: string;
        id: string;
        ceilingHeight: number;
        area: number | undefined;
        Q: number;
      }[],
    ): { [key: string]: { minQ: string; maxQ: string } } => {
      return results.reduce((acc: { [key: string]: { minQ: string; maxQ: string } }, result) => {
        const { systemName, Q } = result;
        const minQ = (Q * 0.95).toFixed(2);
        const maxQ = (Q * 1.2).toFixed(2);
        if (!acc[systemName]) {
          acc[systemName] = { minQ, maxQ };
        } else {
          acc[systemName].minQ = (parseFloat(acc[systemName].minQ) + parseFloat(minQ)).toFixed(2);
          acc[systemName].maxQ = (parseFloat(acc[systemName].maxQ) + parseFloat(maxQ)).toFixed(2);
        }
        return acc;
      }, {});
  };