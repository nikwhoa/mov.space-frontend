/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@mui/material';
import { SketchPicker } from 'react-color';
import { toast } from 'react-toastify';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextEditor from '../../../../utils/TextEditor';
import ColorSettings from './ColorSettings';

const TextSettings = ({
  status,
  siteName,
  siteSlogan,
  handleUpdateSubmit,
  classesMainText,
  trainersMainText,
  mainTextSettings,
}) => {
  const [siteNameDefault, setSiteName] = useState(siteName);
  const [siteSloganDefault, setSiteSlogan] = useState(siteSlogan);
  const [value, setValue] = useState(classesMainText);
  const [trainersMainTextDefault, setTrainersMainTextDefault] = useState(trainersMainText);
  const [mainTextSettingsForm, setMainTextSettingsForm] = useState({});

  useEffect(() => {
    if (status) {
      toast(status, { type: 'success' });
    }
    setMainTextSettingsForm(mainTextSettings);
  }, [status]);

  return (
    <div>
      <h3>Текстові налаштування</h3>
      <form>
        <div className='input-container'>
          <TextField
            className='create-schedule-input'
            label='Назва сайту'
            value={siteNameDefault}
            type='text'
            onChange={(e) => setSiteName(e.target.value)}
          />
        </div>
        <div className='input-container'>
          <TextField
            className='create-schedule-input'
            label='Слоган сайту'
            value={siteSloganDefault}
            type='text'
            onChange={(e) => setSiteSlogan(e.target.value)}
          />
        </div>

        <div className='input-container'>
          <label style={{ width: '100%', margin: '10px 0' }}>Текст на сторінці тренувань</label>
          <TextEditor value={value} setValue={setValue} />
        </div>
        <div className='input-container'>
          <label style={{ width: '100%', margin: '10px 0' }}>Текст на сторінці тренерів</label>
          <TextEditor value={trainersMainTextDefault} setValue={setTrainersMainTextDefault} />
        </div>
        <ColorSettings mainTextSettingsForm={mainTextSettingsForm} setMainTextSettingsForm={setMainTextSettingsForm} />
        <br />
        <button
          type='submit'
          className='btn btn-primary btn-block create-user-btn'
          onClick={(e) =>
            handleUpdateSubmit(e, {
              siteName: siteNameDefault,
              siteSlogan: siteSloganDefault,
              classesMainText: value,
              trainersMainText: trainersMainTextDefault,
              mainTextSettings: mainTextSettingsForm,
            })
          }
        >
          Зберегти
        </button>
      </form>
    </div>
  );
};

export default TextSettings;
