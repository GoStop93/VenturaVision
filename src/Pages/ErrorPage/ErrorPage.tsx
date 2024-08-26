import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';

import Button from '@/components/Button';

import transition from '@/utils/transition/transition';

import { useErrorToMessageData } from './useErrorToMessageData';

import * as S from './ErrorPage.styles';

function ErrorPage() {
  const messageData = useErrorToMessageData();
  const navigate = useNavigate();

  const handleClick = () => navigate(messageData.button.path);

  return (
    <S.ErrorPage>
      <Typography variant="h3">{messageData.heading}</Typography>
      <Typography variant="body1">{messageData.text}</Typography>
      <Button color="inherit" onClick={handleClick}>
        {messageData.button.btnText}
      </Button>
    </S.ErrorPage>
  );
}

export default transition(ErrorPage);
