import { FieldValues, useFormState } from 'react-hook-form';
import { useBlocker } from 'react-router-dom';

import { IFormPromptProps } from './types';
import Prompt from '../Prompt/Prompt';

const FormPrompt = <T extends FieldValues>(props: IFormPromptProps<T>) => {
  const { formHandleSubmit, onValid, onInvalid, children } = props;

  const { isDirty, isSubmitting, errors } = useFormState();

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      isDirty && !isSubmitting && currentLocation.pathname !== nextLocation.pathname,
  );

  const handleSubmit = formHandleSubmit(async (values: T) => {
    if (!Object.keys(errors).length && onValid) {
      await onValid(values);

      if (blocker.state === 'blocked') {
        blocker.proceed();
      }
    }
  }, onInvalid);

  return (
    <>
      {children({ handleSubmit })}
      <Prompt blocker={blocker} onConfirm={handleSubmit} />
    </>
  );
};

export default FormPrompt;
