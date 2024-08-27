import { useState } from 'react';

import { Tooltip, Typography } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import useMediaQuery from '@mui/material/useMediaQuery';

import { colors } from '@/styles/colors';
import { screenSizes } from '@/styles/sizes';

import { IInfoHelperProps } from './types';

import * as S from './InfoHelper.styles';

const InfoHelper: React.FC<IInfoHelperProps> = (props) => {
  const { tooltipText, size } = props;

  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery(`(max-width: ${screenSizes.sm})`);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        title={<Typography color={colors.white}>{tooltipText}</Typography>}
        placement="top"
        open={isMobile ? open : undefined}
        onClose={handleTooltipClose}
        leaveTouchDelay={1}
      >
        <S.QuestionIconButton onClick={isMobile ? handleTooltipOpen : undefined}>
          <S.QuestionIcon fontSize={size} />
        </S.QuestionIconButton>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default InfoHelper;
