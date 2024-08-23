import { ChangeEvent, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip, Typography } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import useMediaQuery from '@mui/material/useMediaQuery';

import Dropdown from '@/components/Dropdown';
import ErrorMessage from '@/components/ErrorMessage';

import { colors } from '@/styles/colors';

import { IVentilationFormProps } from './types';
import { ROOM_TYPES_OPTIONS, SELECTED_OPTIONS, SYSTEM_TYPES_OPTIONS } from '../types';

import * as S from './VentilationForm.styles';

const VentilationForm: React.FC<IVentilationFormProps> = (props) => {
  const { roomNumber, onRemove, amountOfRooms, control, index, errors } = props;

  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)');

  const { resetField, setValue, watch } = useFormContext();

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    room_number_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.room_number_label',
    ),
    room_name_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.room_name_label',
    ),
    room_type_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.room_type_label',
    ),
    system_type_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.system_type_label',
    ),
    system_number_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.system_number_label',
    ),
    people_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.people_label',
    ),
    ceiling_height_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.ceiling_height_label',
    ),
    radio_square_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.radio_square_label',
    ),
    radio_dimensions_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.radio_dimensions_label',
    ),
    length_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.length_label',
    ),
    width_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.width_label',
    ),
    area_label: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.area_label',
    ),
    tooltip_text: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.tooltip_text',
    ),
    millimeter: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.units_of_measurement.millimeter',
    ),
    unit: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.units_of_measurement.unit',
    ),
    square_meter: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.units_of_measurement.square_meter',
    ),
  };

  const translatedRoomTypes = {
    [ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE]: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.room_types.residential_space',
    ),
    [ROOM_TYPES_OPTIONS.BATHROOM]: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.room_types.bathroom',
    ),
    [ROOM_TYPES_OPTIONS.TOILET]: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.room_types.toilet',
    ),
    [ROOM_TYPES_OPTIONS.LAUNDRY_ROOM]: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.room_types.laundry_room',
    ),
  };

  const translatedSystemTypes = {
    [SYSTEM_TYPES_OPTIONS.SUPPLY]: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.system_types.supply',
    ),
    [SYSTEM_TYPES_OPTIONS.BALANCED]: t(
      'ventilationCalculator:online_calculator.calculator_form.ventilation_form.system_types.balanced',
    ),
  };

  const roomType = watch(`rooms.${index}.roomType`, ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE);
  const systemType = watch(`rooms.${index}.systemType`, SYSTEM_TYPES_OPTIONS.SUPPLY);
  const selectedOption = watch(`rooms.${index}.selectedOption`, SELECTED_OPTIONS.SQUARE);

  const onRoomTypeChange = (_: string, value: string) => {
    setValue(`rooms.${index}.roomType`, value);
  };

  const onSystemTypeChange = (_: string, value: string) => {
    setValue(`rooms.${index}.systemType`, value);
  };

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(`rooms.${index}.selectedOption`, value);
    if (value === SELECTED_OPTIONS.SQUARE) {
      resetField(`rooms.${index}.length`);
      resetField(`rooms.${index}.width`);
    } else if (value === SELECTED_OPTIONS.DIMENSIONS) {
      resetField(`rooms.${index}.area`);
    }
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const isVisibleDeleteButton = amountOfRooms > 1;

  return (
    <S.Form>
      <S.Header>
        <Typography variant="h6">
          {translations.room_number_label} {roomNumber}
        </Typography>
        {isVisibleDeleteButton && (
          <IconButton onClick={onRemove}>
            <DeleteIcon sx={{ fontSize: '18px', color: colors.orange }} />
          </IconButton>
        )}
      </S.Header>
      <S.FormWrapper>
        <S.VerticalWrapper>
          <Typography>{translations.room_name_label}</Typography>
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
          <Typography>{translations.room_type_label}</Typography>
          <Dropdown
            options={Object.entries(translatedRoomTypes).map(([key, optionValue]) => ({
              key,
              optionValue,
            }))}
            name={`rooms.${index}.type`}
            value={translatedRoomTypes[roomType]}
            onChange={onRoomTypeChange}
          />
        </S.HorizontalWrapper>
        {roomType === ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE && (
          <S.HorizontalWrapper>
            <Typography>{translations.system_type_label}</Typography>
            <Dropdown
              options={Object.entries(translatedSystemTypes).map(([key, optionValue]) => ({
                key,
                optionValue,
              }))}
              name={`rooms.${index}.systemType`}
              value={translatedSystemTypes[systemType]}
              onChange={onSystemTypeChange}
            />
          </S.HorizontalWrapper>
        )}

        {roomType === ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE && (
          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>{translations.system_number_label}</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.systemNumber`}
                  control={control}
                  render={({ field }) => (
                    <S.SmallInput
                      type="number"
                      inputProps={{ min: 1, step: 1, max: 10 }}
                      size="small"
                      {...field}
                    />
                  )}
                />
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <Tooltip
                    title={translations.tooltip_text}
                    placement="top"
                    open={isMobile ? open : undefined}
                    onClose={handleTooltipClose}
                  >
                    <S.QuestionIconButton onClick={isMobile ? handleTooltipOpen : undefined}>
                      <S.QuestionIcon />
                    </S.QuestionIconButton>
                  </Tooltip>
                </ClickAwayListener>
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.systemNumber && <ErrorMessage error={errors.systemNumber.message} />}
          </S.InputWrapper>
        )}
        {roomType === ROOM_TYPES_OPTIONS.RESIDENTIAL_SPACE && (
          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>{translations.people_label}</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.people`}
                  control={control}
                  render={({ field }) => <S.Input size="small" {...field} />}
                />
                {translations.unit}
              </S.FlexWrapper>
            </S.HorizontalWrapper>
            {errors?.people && <ErrorMessage error={errors.people.message} />}
          </S.InputWrapper>
        )}
        <S.InputWrapper>
          <S.HorizontalWrapper>
            <Typography>{translations.ceiling_height_label}</Typography>
            <S.FlexWrapper>
              <Controller
                name={`rooms.${index}.ceilingHeight`}
                control={control}
                render={({ field }) => <S.Input size="small" {...field} />}
              />
              {translations.millimeter}
            </S.FlexWrapper>
          </S.HorizontalWrapper>
          {errors?.ceilingHeight && <ErrorMessage error={errors.ceilingHeight.message} />}
        </S.InputWrapper>

        <RadioGroup row value={selectedOption} onChange={handleOptionChange}>
          <FormControlLabel
            value={SELECTED_OPTIONS.SQUARE}
            control={<Radio />}
            label={translations.radio_square_label}
          />
          <FormControlLabel
            value={SELECTED_OPTIONS.DIMENSIONS}
            control={<Radio />}
            label={translations.radio_dimensions_label}
          />
        </RadioGroup>

        {selectedOption === SELECTED_OPTIONS.DIMENSIONS && (
          <>
            <S.InputWrapper>
              <S.HorizontalWrapper>
                <Typography>{translations.length_label}</Typography>
                <S.FlexWrapper>
                  <Controller
                    name={`rooms.${index}.length`}
                    control={control}
                    render={({ field }) => <S.Input size="small" {...field} />}
                  />
                  {translations.millimeter}
                </S.FlexWrapper>
              </S.HorizontalWrapper>
              {errors?.length && <ErrorMessage error={errors.length.message} />}
            </S.InputWrapper>
            <S.InputWrapper>
              <S.HorizontalWrapper>
                <Typography>{translations.width_label}</Typography>
                <S.FlexWrapper>
                  <Controller
                    name={`rooms.${index}.width`}
                    control={control}
                    render={({ field }) => <S.Input size="small" {...field} />}
                  />
                  {translations.millimeter}
                </S.FlexWrapper>
              </S.HorizontalWrapper>
              {errors?.width && <ErrorMessage error={errors.width.message} />}
            </S.InputWrapper>
          </>
        )}

        {selectedOption === SELECTED_OPTIONS.SQUARE && (
          <S.InputWrapper>
            <S.HorizontalWrapper>
              <Typography>{translations.area_label}</Typography>
              <S.FlexWrapper>
                <Controller
                  name={`rooms.${index}.area`}
                  control={control}
                  render={({ field }) => <S.Input size="small" {...field} />}
                />
                {translations.square_meter}
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
