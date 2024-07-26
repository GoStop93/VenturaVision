import { Status } from './utils';

export interface IState {
  status: Status;
  error?: string | null;
}

export interface IHookReturn extends IState {
  track: TrackFn;
  isPending: boolean;
  isLoading: boolean;
  reset: () => void;
}

export type TrackFn = <T = unknown>(promise: Promise<T>) => Promise<T>;
