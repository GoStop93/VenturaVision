export interface IDropdownProps {
  position?: number | 'center' | 'left' | 'right';
  options: { key: string; optionValue: string; }[];
  onChange: (filterName: string, value: string) => void;
  value: string;
  name: string;
}