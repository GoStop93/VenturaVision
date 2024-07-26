import { Blocker } from 'react-router-dom';

export interface IPromptProps<R> {
  blocker: Blocker;
  onConfirm: () => Promise<R> | R;
}
