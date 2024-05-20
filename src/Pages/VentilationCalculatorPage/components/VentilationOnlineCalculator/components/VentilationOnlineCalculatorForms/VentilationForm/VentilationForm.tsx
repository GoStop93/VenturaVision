import { Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { colors } from '../../../../../../../styles/colors';

import { IVentilationFormProps } from './types';

import * as S from './VentilationForm.styles';

const VentilationForm: React.FC<IVentilationFormProps> = (props) => {
  const { roomNumber, onRemove, amountOfRooms } = props;

  const isVisibleDeleteButton = amountOfRooms > 1;

  return (
    <S.Form>
      <S.Header>
        <Typography variant="h6">Комната № {roomNumber}</Typography>
        {isVisibleDeleteButton && (
          <IconButton onClick={onRemove}>
            <DeleteIcon sx={{ fontSize: '18px', color: colors.orange }} />
          </IconButton>
        )}
      </S.Header>
      <Box>
        <Typography>Наименование помещения: </Typography>
        <Typography>Тип помещения: 1232131231232133213</Typography>
        <Typography>Высота потолка:</Typography>
      </Box>
    </S.Form>
  );
};

export default VentilationForm;
