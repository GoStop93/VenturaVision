import { CircularProgress } from '@mui/material';

import { ILoaderProps } from './types';

import * as S from './Loader.styles';

const Loader: React.FC<ILoaderProps> = (props) => {
  const { padding, ...restProps } = props;
  return (
    <S.Wrapper padding={padding}>
      <CircularProgress color="secondary" {...restProps} />
    </S.Wrapper>
  );
};

export default Loader;
