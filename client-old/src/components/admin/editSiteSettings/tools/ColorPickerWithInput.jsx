/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField, Box } from '@mui/material';
import { SketchPicker } from 'react-color';

const ColorPickerWithInput = ({
  label,
  value,
  onChange,
  colorPickerIndex,
  displayColorPicker,
  handleOpenColorPicker,
  handleCloseColorPicker,
  indexForColorPicker,
}) => {
  console.log(indexForColorPicker);
  return (
    <div className='input-container'>
      <TextField className='create-schedule-input' label={label} value={value || ''} type='text' onChange={onChange} />
      <Box sx={{ marginTop: 1 }} className='color-picker-box'>
        <button type='button' className='btn' onClick={() => handleOpenColorPicker(indexForColorPicker)}>
          Вибрати колір
        </button>
        {colorPickerIndex === indexForColorPicker && displayColorPicker ? (
          <div className='color-picker-popover'>
            <div className='color-picker-cover' onClick={handleCloseColorPicker} />
            <SketchPicker color={value || ''} onChange={onChange} />
          </div>
        ) : null}
      </Box>
    </div>
  );
};

ColorPickerWithInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  colorPickerIndex: PropTypes.number.isRequired,
  displayColorPicker: PropTypes.bool.isRequired,
  handleOpenColorPicker: PropTypes.func.isRequired,
  handleCloseColorPicker: PropTypes.func.isRequired,
  indexForColorPicker: PropTypes.number.isRequired,
};

export default ColorPickerWithInput;
