export interface IDropdownProps {
  position?: number | 'center' | 'left' | 'right';
  options: string[];
  onChange: (filterName: string, value: string) => void;
  value: string;
  name: string;
}