export function groupDataByField<T>(data: T[], field: keyof T): T[][] {
  const grouped = new Map<unknown, T[]>();
  data.forEach((item) => {
    const groupKey = item[field];
    const collection = grouped.get(groupKey);
    if (!collection) {
      grouped.set(groupKey, [item]);
    } else {
      collection.push(item);
    }
  });
  return Array.from(grouped.values());
}
