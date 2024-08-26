export const insertParams = (pathWithParams: string, params: Record<string, string>): string => {
  return Object.keys(params).reduce(
    (pathString, param) => pathString.replace(`:${param}`, params[param]),
    pathWithParams,
  );
};
