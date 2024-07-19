import { ChangeEvent, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dropdown from '../../../../../../../components/Dropdown';
import ErrorMessage from '../../../../../../../components/ErrorMessage';

import { colors } from '../../../../../../../styles/colors';
import { IVentilationFormProps } from './types';

import * as S from './VentilationForm.styles';

const VentilationForm: React.FC<IVentilationFormProps> = (props) => {
  const { roomNumber, onRemove, amountOfRooms, control, index, errors } = props;

  const [selectedOption, setSelectedOption] = useState('square');

  const { resetField, setValue, watch } = useFormContext();

  const roomType = watch(`rooms.${index}.roomType`, 'Жилое помещение');

  const onRoomTypeChange = (_: string, value: string) => {
    setValue(`rooms.${index}.roomType`, value);
  };

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === 'square') {
      resetField(`rooms.${index}.length`);
      resetField(`rooms.${index}.width`);
    } else if (value === 'dimensions') {
      resetField(`rooms.${index}.area`);
    }
  };

  const isVisibleDeleteButton = amountOfRooms > 1;

  const options = ['Жилое помещение', 'Ванная комната', 'Туалет', 'Постирочная'];

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
      <S.FormWrapper>
        <S.VerticalWrapper>
          <Typography>Наименование помещения:</Typography>
          <Controller
            name={`rooms.${index}.name`}
            control={control}
            render={({ field }) => (
              <>
                <S.BigInput size="small" {...field} />
                {errors?.name && <ErrorMessage error={errors.name.message} />}
              </>
            )}
          />
        </S.VerticalWrapper>

        <S.HorizontalWrapper>
          <Typography>Тип помещения:</Typography>
          <Dropdown options={options} name={`rooms.${index}.type`} value={roomType} onChange={onRoomTypeChange} />
        </S.HorizontalWrapper>
        {roomType === 'Жилое помещение' && (
          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>Количество людей:</Typography>
              <S.FlexWrapper>
                <Controller name={`rooms.${index}.people`} control={control} render={({ field }) => <S.Input size="small" {...field} />} />
                шт
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.people && <ErrorMessage error={errors.people.message} />}
          </S.InputWrapper>
        )}
        <S.InputWrapper>
          <S.HorizontalWrapper>
            <Typography>Высота потолка:</Typography>
            <S.FlexWrapper>
              <Controller name={`rooms.${index}.ceilingHeight`} control={control} render={({ field }) => <S.Input size="small" {...field} />} />
              мм
            </S.FlexWrapper>
          </S.HorizontalWrapper>
          {errors?.ceilingHeight && <ErrorMessage error={errors.ceilingHeight.message} />}
        </S.InputWrapper>

        <RadioGroup row value={selectedOption} onChange={handleOptionChange}>
          <FormControlLabel value="square" control={<Radio />} label="Площадь" />
          <FormControlLabel value="dimensions" control={<Radio />} label="Размеры" />
        </RadioGroup>

        {selectedOption === 'dimensions' && (
          <>
            <S.InputWrapper>
              <S.HorizontalWrapper>
                <Typography>Длина помещения:</Typography>
                <S.FlexWrapper>
                  <Controller name={`rooms.${index}.length`} control={control} render={({ field }) => <S.Input size="small" {...field} />} />
                  мм
                </S.FlexWrapper>
              </S.HorizontalWrapper>
              {errors?.length && <ErrorMessage error={errors.length.message} />}
            </S.InputWrapper>
            <S.InputWrapper>
              <S.HorizontalWrapper>
                <Typography>Ширина помещения:</Typography>
                <S.FlexWrapper>
                  <Controller name={`rooms.${index}.width`} control={control} render={({ field }) => <S.Input size="small" {...field} />} />
                  мм
                </S.FlexWrapper>
              </S.HorizontalWrapper>
              {errors?.width && <ErrorMessage error={errors.width.message} />}
            </S.InputWrapper>
          </>
        )}

        {selectedOption === 'square' && (
          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>Площадь помещения:</Typography>
              <S.FlexWrapper>
                <Controller name={`rooms.${index}.area`} control={control} render={({ field }) => <S.Input size="small" {...field} />} />
                м²
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.area && <ErrorMessage error={errors.area.message} />}
          </S.InputWrapper>
        )}
      </S.FormWrapper>
    </S.Form>
  );
};

export default VentilationForm;
