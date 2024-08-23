import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { IErrorMessageProps } from './types';

import * as S from './ErrorMessage.styles';

const ErrorMessage: React.FC<IErrorMessageProps> = (props) => {
  const { error } = props;

  return (
    <S.ErrorMessage>
      <ErrorOutlineIcon sx={{ fontSize: '16px', color: 'red', marginTop: '-2px' }} />
      <S.Text>{error}</S.Text>
    </S.ErrorMessage>
  );
};

export default ErrorMessage;
