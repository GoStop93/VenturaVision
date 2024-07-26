import { FieldValues, SubmitErrorHandler, UseFormHandleSubmit } from 'react-hook-form';

export interface IFormPromptProps<T extends FieldValues> {
  formHandleSubmit: UseFormHandleSubmit<T>;
  onValid?: (values: T) => Promise<void>;
  onInvalid?: SubmitErrorHandler<T>;
  children: (data: { handleSubmit: () => void }) => React.ReactNode;
}
