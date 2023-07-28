/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { TextField, Input } from '@mui/material';
import { useParams } from 'react-router-dom';
import { editUser, getUsers } from '../../../slices/users/usersSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import TextEditor from '../../../utils/TextEditor';
import { getSchedule } from '../../../slices/schedule/scheduleSlice';
import generatePassword from './tools/generatePassrod';

const EditUsers = () => {
  const { id } = useParams();
  const [userSchedule, setUserSchedule] = useState([]);
  const [user, setUser] = useState({});
  const [phone, setPhone] = useState('');
  const [about, setAbout] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [updateUser, setUpdateUser] = useState({
    name: '',
    surname: '',
    login: '',
    email: '',
    role: '',
    photo: '',
    about: '',
    password: '',
    phone: '',
    photoUrl: '',
  });
  const [preview, setPreview] = useState('');
  const [password, setPassword] = useState('');
  const [previewNotification, setPreviewNotification] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.users);
  const { status } = useSelector((state) => state.users);

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
      setUser({ ...user, [name]: value });
    } else if (name === 'name') {
      setUser({ ...user, [name]: value });
    } else if (name === 'surname') {
      setUser({ ...user, [name]: value });
    } else if (name === 'photoUrl') {
      setUser({ ...user, [name]: value });
    } else if (name === 'about') {
      setUser({ ...user, [name]: value });
    } else if (name === 'password') {
      setUser({ ...user, [name]: value });
    } else if (name === 'email') {
      setUser({ ...user, [name]: value });
    } else if (name === 'role') {
      setUser({ ...user, [name]: value });
    }
  };

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

  useEffect(() => {
    setPreview(user.photo);
    if (photo) {
      setPreview(URL.createObjectURL(photo));
    }
  }, [photo, user.photo]);

  useEffect(() => {
    dispatch(getUsers()).then((res) => setUser(res.payload.find((person) => person._id === id)));
  }, [dispatch]);

  useEffect(() => {
    if (user.schedule) {
      dispatch(getSchedule()).then((res) => {
        res.payload.schedule.filter(
          (item) =>
            // eslint-disable-next-line eqeqeq
            user.schedule.map((schedule) => schedule == item._id && setUserSchedule((prev) => [...prev, item]))
          // eslint-disable-next-line function-paren-newline
        );
      });
    }
  }, [dispatch, user.schedule, user._id]);

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
          console.log(res);
          setUser({ ...user, photo: res.data.fileUrl });
          toast('Файл успішно завантажено', { type: 'success' });
          return res.data;
        })
        .then((picture) => {
          console.log('Файл успішно завантажено');
          setPreviewNotification(false);
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(editUser({ id, user }));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <h1>Редагувати користувача</h1>
      {Object.keys(user).length < 1 || loading ? (
        <LoadingSpinner />
      ) : (
        <form className='create-user-form' onSubmit={handleSubmit}>
          <div className='input-container create-user-input'>
            <TextField
              label="Ім'я"
              value={user.name}
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
              value={user.surname}
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
              value={user.phone}
              onChange={(tel) => setUser({ ...user, phone: tel })}
            />
          </div>
          <div className='input-container create-user-input'>
            <TextField
              label='Логін'
              value={user.username}
              autoComplete='username'
              name='username'
              style={{ border: errorMessages.username ? '1px solid red' : '' }}
              helperText="Це може бути ім'я, але краще використовувати якесь унікальне ім'я користувача"
              className='create-user-text-field'
              type='text'
              onChange={(e) => hadleUserInput(e)}
            />
          </div>
          <div className='input-container create-user-input'>
            <TextField
              label='Пароль'
              value={user.password}
              className='create-user-text-field'
              type='password'
              name='password'
              style={{ border: errorMessages.password ? '1px solid red' : '' }}
              autoComplete='new-password'
              onChange={(e) => hadleUserInput(e)}
            />
            <button
              type='button'
              className='btn btn-primary btn-block create-password'
              onClick={() => generatePassword(setUser, user)}
            >
              Створити
            </button>
          </div>
          <div className='input-container create-user-input'>
            <TextField
              label='Электронна пошта'
              value={user.email}
              name='email'
              style={{ border: errorMessages.email ? '1px solid red' : '' }}
              className='create-user-text-field'
              autoComplete='email'
              type='email'
              onChange={(e) => hadleUserInput(e)}
            />
          </div>
          <div className='input-container create-user-input'>
            <h5 style={{ fontSize: '1rem' }}>Тренування у атлета</h5>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col'>Назва</th>
                  <th scope='col'>Тренер</th>
                  <th scope='col'>Час</th>
                </tr>
              </thead>
              <tbody>
                {userSchedule && userSchedule.length > 0 ? (
                  userSchedule.map((item) => (
                    <tr key={item._id}>
                      <td>{item.scheduleItem}</td>
                      <td>{item.trainer}</td>
                      <td>{new Date(item.TrainTime).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>Немає груп</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className='input-container create-user-input'>
            <label style={{ width: '100%', margin: '10px 0' }}>Про тренера</label>
            <TextEditor value={user.about} setValue={(text) => setUser({ ...user, about: text })} />
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
            <select
              name='role'
              id='role'
              className='form-input'
              onChange={(e) => setUser.role(e.target.value)}
              value={user.role}
            >
              <option value=''>{user.role}</option>
              <option value='trainer'>Тренер</option>
              <option value='user'>Користувач</option>
            </select>
          </div>
          <button type='submit' className='btn btn-primary btn-block create-user-btn'>
            Редагувати
          </button>
        </form>
      )}
    </div>
  );
};

export default EditUsers;
