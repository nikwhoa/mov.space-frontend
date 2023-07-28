/* eslint-disable no-else-return */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import { Input } from '@mui/material';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateSettings } from '../slices/siteSettingsSlices';
import { uploadPicture } from '../../../../slices/classes/classesSlice';

const VisualSettings = ({ status, handleUpdateSubmit, settings, isLoadingSettings }) => {
  const [mainScreenMedia, setMainScreenMedia] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(settings.mainScreenMedia.fileUrl);
    if (mainScreenMedia) {
      setPreview(URL.createObjectURL(mainScreenMedia));
    }
  }, [mainScreenMedia]);

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', mainScreenMedia);
      axios.post('http://46.175.150.173:3002/upload', formData).then((res) => {
        toast('Файл успішно завантажено', { type: 'success' });
        handleUpdateSubmit(e, {
          mainScreenMedia: { fileType: mainScreenMedia.type.slice(0, 5), fileUrl: res.data.fileUrl },
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const previewRender = (previewFile) => {
    if (previewFile) {
      if (mainScreenMedia) {
        if (mainScreenMedia.type.slice(0, 5) === 'video') {
          return <video src={preview} muted className='preview-image' autoPlay playsInline alt='preview' />;
        }
        return <img src={preview} className='preview-image' alt='preview' />;
      }

      if (settings.mainScreenMedia.fileType === 'video') {
        return <video src={preview} muted className='preview-image' autoPlay playsInline alt='preview' />;
      } else if (settings.mainScreenMedia.fileType === 'image') {
        return <img src={preview} className='preview-image' alt='preview' />;
      }
    }

    if (settings.mainScreenMedia.fileType === 'video') {
      return <video src={preview} muted className='preview-image' autoPlay playsInline alt='preview' />;
    } else if (settings.mainScreenMedia.fileType === 'image') {
      return <img src={preview} className='preview-image' alt='preview' />;
    }
  };

  return (
    <div>
      <h3>Налаштування вигляду сайту</h3>
      <form>
        <div className='input-container'>
          <label className='label' htmlFor='mainScreenMedia'>
            Вибрати зображення чи відео для головного екрану
          </label>
          <Input
            style={{ height: '3.5rem', backgroundColor: 'transparent', color: 'white', padding: '0 .3rem' }}
            type='file'
            id='mainScreenMedia'
            className='form-input'
            onChange={(e) => setMainScreenMedia(e.target.files[0])}
            // value={mainScreenMedia}
          />
          <div style={{ margin: '1rem 0' }}>{previewRender(preview)}</div>
          <button
            type='submit'
            className='btn btn-primary btn-block create-user-btn'
            onClick={(e) => handleSubmit(e)}
            // onSubmit={(e) => handleSubmit(e)}
          >
            Завантажити
          </button>
        </div>
      </form>
    </div>
  );
};

export default VisualSettings;
