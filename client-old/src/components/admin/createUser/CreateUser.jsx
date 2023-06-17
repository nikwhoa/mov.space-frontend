/* eslint-disable no-shadow */
/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TextField, Input } from '@mui/material';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { registerUser } from '../../../slices/auth/authSlice';
import TextEditor from '../../../utils/TextEditor';
import './create-user.scss';
import generatePassword from './tools/generatePassword';
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhoneNumber,
  validateUserName,
} from './tools/validation';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [photo, setPhoto] = useState('');
  const [about, setAbout] = useState('');
  const [preview, setPreview] = useState('');
  const [previewNotification, setPreviewNotification] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // setPreview(settings.mainScreenMedia.fileUrl);
    if (photo) {
      setPreview(URL.createObjectURL(photo));
    }
  }, [photo]);

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (errorMessages) {
      toast.error(errorMessages.message);
    }
  }, [errorMessages]);

  const previewRender = (previewFile) => {
    if (previewFile) {
      return <img src={preview} className='preview-image' alt='preview' />;
    }

    // return <img src={photo} className='preview-image' alt='preview' />;
    return <span>Прев&apos;ю зображення</span>;
  };

  const hadleUserInput = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'surname') {
      setSurname(value);
    } else if (name === 'photoUrl') {
      setPhotoUrl(value);
    } else if (name === 'about') {
      setAbout(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'role') {
      setRole(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!validateName(name).status) {
      errors.message = validateName(name).message;
      errors.name = true;
    } else {
      errors.name = false;
    }

    if (!validateName(surname, true).status) {
      errors.message = validateName(surname, true).message;
      errors.surname = true;
    } else {
      errors.surname = false;
    }

    if (!validatePhoneNumber(phone).status) {
      errors.message = validatePhoneNumber(phone).message;
      errors.phone = true;
    } else {
      errors.phone = false;
    }

    if (!validateUserName(username).status) {
      errors.message = validateUserName(username).message;
      errors.username = true;
    } else {
      errors.username = false;
    }

    if (!validatePassword(password).status) {
      errors.message = validatePassword(password).message;
      errors.password = true;
    } else {
      errors.password = false;
    }

    if (!validateEmail(email).status) {
      errors.message = validateEmail(email).message;
      errors.email = true;
    } else {
      errors.email = false;
    }

    if (!role) {
      errors.message = 'Виберіть роль користувача';
      errors.role = true;
    } else {
      errors.role = false;
    }

    setErrorMessages(errors);
    if (errors.message === undefined) {
      try {
        dispatch(registerUser({ username, password, name, surname, phone, photoUrl, about, email, role }));
        setPassword('');
        setUsername('');
        setEmail('');
        setRole('');
        setName('');
        setSurname('');
        setPhone('');
        setPhotoUrl('');
        setPhoto('');
        setAbout('');
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  const handleUploadPhoto = (e) => {
    e.preventDefault();
    setPreviewNotification('Іде завантаження...');
    try {
      const formData = new FormData();
      formData.append('file', photo);
      axios
        .post('http://46.175.150.173:3002/upload', formData)
        .then((res) => {
          return res;
        })
        .then((res) => {
          toast('Файл успішно завантажено', { type: 'success' });
          return res.data;
        })
        .then((picture) => {
          console.log('Файл успішно завантажено');
          setPreviewNotification(false);
          setPhotoUrl(picture.fileUrl);
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <h1>Створити користувача</h1>
      <form className='create-user-form' onSubmit={handleSubmit}>
        <div className='input-container create-user-input'>
          <TextField
            label="Ім'я"
            value={name}
            name='name'
            className='create-user-text-field'
            style={{ border: errorMessages.name ? '1px solid red' : '' }}
            type='text'
            onChange={(e) => hadleUserInput(e)}
          />
        </div>
        <div className='input-container create-user-input'>
          <TextField
            label='Прізвище'
            value={surname}
            name='surname'
            className='create-user-text-field'
            style={{ border: errorMessages.surname ? '1px solid red' : '' }}
            type='text'
            onChange={(e) => hadleUserInput(e)}
          />
        </div>
        <div className='input-container create-user-input'>
          <PhoneInput
            autoFormat
            enableTerritories
            specialLabel='Телефон'
            name='phone'
            containerClass='create-user-phone-container'
            style={{ border: errorMessages.phone ? '1px solid red' : '' }}
            inputClass='create-user-phone-field'
            country='ua'
            value={phone}
            onChange={setPhone}
          />
        </div>
        <div className='input-container create-user-input'>
          <TextField
            label='Логін'
            value={username}
            autoComplete='username'
            name='username'
            style={{ border: errorMessages.username ? '1px solid red' : '' }}
            helperText="Це може бути ім'я, але краще використовувати якесь унікальне ім'я користувача"
            className='create-user-text-field'
            type='text'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='input-container create-user-input'>
          <TextField
            label='Пароль'
            value={password}
            className='create-user-text-field'
            type='password'
            name='password'
            style={{ border: errorMessages.password ? '1px solid red' : '' }}
            autoComplete='new-password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='button'
            className='btn btn-primary btn-block create-password'
            onClick={() => generatePassword(setPassword)}
          >
            Створити
          </button>
        </div>
        <div className='input-container create-user-input'>
          <TextField
            label='Электронна пошта'
            value={email}
            name='email'
            style={{ border: errorMessages.email ? '1px solid red' : '' }}
            className='create-user-text-field'
            autoComplete='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-container create-user-input'>
          <label style={{ width: '100%', margin: '10px 0' }}>Про тренера</label>
          <TextEditor value={about} setValue={setAbout} />
        </div>
        <div className='input-container create-user-input'>
          <label className='label' htmlFor='trainerPhoto'>
            Вибрати зображення для тренера
          </label>
          <Input
            style={{ height: '3.5rem', backgroundColor: 'transparent', color: 'white', padding: '0 .3rem' }}
            type='file'
            id='trainerPhoto'
            className='form-input'
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          <div style={{ margin: '1rem 0' }}>{previewRender(preview)}</div>
          <button
            type='submit'
            className='btn btn-primary btn-block create-user-btn'
            onClick={(e) => handleUploadPhoto(e)}
          >
            {previewNotification || 'Завантажити зображення'}
          </button>
        </div>
        <div className='input-container'>
          <label className='label' htmlFor='role' />
          <select name='role' id='role' className='form-input' onChange={(e) => setRole(e.target.value)} value={role}>
            <option value=''>Оберіть роль</option>
            <option value='trainer'>Тренер</option>
            <option value='user'>Користувач</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary btn-block create-user-btn'>
          Створити
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
