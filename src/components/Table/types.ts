export interface ITableProps<T> {
  data: T[];
  columns: IColumnsConfig<T>;
}

export interface IColumnConfig<T> {
  id: keyof T | string;
  title: string;
  align?: 'center' | 'left' | 'right' | 'inherit' | 'justify';
  Cell?: React.ComponentType<{ item: T }>;
  cellStyle?: React.CSSProperties | ((data: T[], rowData: T) => React.CSSProperties);
}

export type IColumnsConfig<T> = Array<IColumnConfig<T>>;
