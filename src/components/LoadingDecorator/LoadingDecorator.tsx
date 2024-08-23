import React from 'react';

import { ILoadingDecoratorProps } from './types';
import Loader from '../Loader';

function LoadingDecorator<D>(props: ILoadingDecoratorProps<D>): React.ReactElement {
  const { data, loading, children, ...restProps } = props;
  if (loading) {
    return <Loader {...restProps} />;
  }

  return <>{children(data)}</>;
}

export default LoadingDecorator;
