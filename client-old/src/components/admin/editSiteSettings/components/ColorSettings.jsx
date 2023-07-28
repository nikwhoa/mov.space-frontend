/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary, Box, TextField, Typography } from '@mui/material';
import { SketchPicker } from 'react-color';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ColorPickerWithInput from '../tools/ColorPickerWithInput';

const ColorSettings = ({ mainTextSettingsForm, setMainTextSettingsForm }) => {
  const [colorPickerIndex, setColorPickerIndex] = useState(0);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const handleMenuColorChange = (color) => {
    setMainTextSettingsForm({ ...mainTextSettingsForm, menuColor: color.hex });
  };

  const handleOpenColorPicker = (index) => {
    setDisplayColorPicker(!displayColorPicker);
    setColorPickerIndex(index);
  };

  const handleCloseColorPicker = () => {
    setDisplayColorPicker(false);
    setColorPickerIndex(0);
  };
  return (
    <Accordion
      sx={{
        background: 'transparent',
        color: 'white',
        boxShadow: 'none',
        border: '1px solid #8f8f8f',
        width: '95%',
        margin: '0 auto !important',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>Налаштування кольорів сайту</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          width: '100%',
          margin: '0 auto !important',
        }}
      >
        <ColorPickerWithInput
          label='Колір меню'
          value={mainTextSettingsForm.menuColor || ''}
          onChange={handleMenuColorChange}
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={1}
        />

        <ColorPickerWithInput
          label='Колір заголовку першого порядку (h1)'
          value={(mainTextSettingsForm.headingsColor && mainTextSettingsForm.headingsColor.h1) || ''}
          onChange={(color) =>
            setMainTextSettingsForm({
              ...mainTextSettingsForm,
              headingsColor: {
                ...mainTextSettingsForm.headingsColor,
                h1: color.hex,
              },
            })
          }
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={2}
        />
        <ColorPickerWithInput
          label='Колір заголовку другого порядку (h2)'
          value={(mainTextSettingsForm.headingsColor && mainTextSettingsForm.headingsColor.h2) || ''}
          onChange={(color) =>
            setMainTextSettingsForm({
              ...mainTextSettingsForm,
              headingsColor: {
                ...mainTextSettingsForm.headingsColor,
                h2: color.hex,
              },
            })
          }
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={3}
        />
        <ColorPickerWithInput
          label='Колір заголовку третього порядку (h3)'
          value={(mainTextSettingsForm.headingsColor && mainTextSettingsForm.headingsColor.h3) || ''}
          onChange={(color) =>
            setMainTextSettingsForm({
              ...mainTextSettingsForm,
              headingsColor: {
                ...mainTextSettingsForm.headingsColor,
                h3: color.hex,
              },
            })
          }
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={4}
        />
        <ColorPickerWithInput
          label='Колір заголовку четвертого порядку (h4)'
          value={(mainTextSettingsForm.headingsColor && mainTextSettingsForm.headingsColor.h4) || ''}
          onChange={(color) =>
            setMainTextSettingsForm({
              ...mainTextSettingsForm,
              headingsColor: {
                ...mainTextSettingsForm.headingsColor,
                h4: color.hex,
              },
            })
          }
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={5}
        />
        <ColorPickerWithInput
          label='Колір заголовку пятого порядку (h5)'
          value={(mainTextSettingsForm.headingsColor && mainTextSettingsForm.headingsColor.h5) || ''}
          onChange={(color) =>
            setMainTextSettingsForm({
              ...mainTextSettingsForm,
              headingsColor: {
                ...mainTextSettingsForm.headingsColor,
                h5: color.hex,
              },
            })
          }
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={6}
        />
        <ColorPickerWithInput
          label='Колір заголовку шостого порядку (h6)'
          value={(mainTextSettingsForm.headingsColor && mainTextSettingsForm.headingsColor.h6) || ''}
          onChange={(color) =>
            setMainTextSettingsForm({
              ...mainTextSettingsForm,
              headingsColor: {
                ...mainTextSettingsForm.headingsColor,
                h6: color.hex,
              },
            })
          }
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={7}
        />
        <ColorPickerWithInput
          label='Колір тексту'
          value={mainTextSettingsForm.textColor || ''}
          onChange={(color) => setMainTextSettingsForm({ ...mainTextSettingsForm, textColor: color.hex })}
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={8}
        />
        <ColorPickerWithInput
          label='Колір заголовку на головній'
          value={mainTextSettingsForm.siteSloganColor || ''}
          onChange={(color) => setMainTextSettingsForm({ ...mainTextSettingsForm, siteSloganColor: color.hex })}
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={9}
        />
        <ColorPickerWithInput
          label='Колір посилань'
          value={mainTextSettingsForm.linksColor || ''}
          onChange={(color) => setMainTextSettingsForm({ ...mainTextSettingsForm, linksColor: color.hex })}
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={10}
        />
        <ColorPickerWithInput
          label='Колір кнопок'
          value={mainTextSettingsForm.buttonsColor || ''}
          onChange={(color) => setMainTextSettingsForm({ ...mainTextSettingsForm, buttonsColor: color.hex })}
          colorPickerIndex={colorPickerIndex}
          displayColorPicker={displayColorPicker}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          indexForColorPicker={11}
        />
      </AccordionDetails>
    </Accordion>
  );
};

// propts validation
ColorSettings.propTypes = {
  mainTextSettingsForm: PropTypes.object.isRequired,
  setMainTextSettingsForm: PropTypes.func.isRequired,
};

export default ColorSettings;
