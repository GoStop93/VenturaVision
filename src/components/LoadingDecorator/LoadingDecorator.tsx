import React from 'react';

import Loader from '../Loader';

import { ILoadingDecoratorProps } from './types';

function LoadingDecorator<D>(props: ILoadingDecoratorProps<D>): React.ReactElement {
  const { data, loading, children, ...restProps } = props;
  if (loading) {
    return <Loader {...restProps} />
  }

  return <>{children(data)}</>;
}

export default LoadingDecorator;
