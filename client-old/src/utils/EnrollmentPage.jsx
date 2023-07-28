/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import '../styles/enrollmentpage.scss';
import PhoneInput from 'react-phone-input-2';
import { TextField, Stack } from '@mui/material';
import { StaticDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import uk from 'date-fns/locale/uk';
import { registerUser } from '../slices/auth/authSlice';

const EnrollmentPage = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [successEnroll, setSuccessEnroll] = useState(false);
  const [birthday, setBirthDay] = useState('');
  const [instagram, setInstagram] = useState('');

  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(
        registerUser({
          name,
          phone,
          birthday: birthday || new Date().toISOString(),
          instagram,
          username: phone,
          schedule: id,
          role: 'user',
          action: 'enroll',
        })
      ).then((res) => {
        if (res.payload.message === 'Ви успішно записались на тренування') {
          setSuccessEnroll(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status) {
      toast(status, { type: 'success' });
    }
  }, [status, dispatch]);
  console.log(successEnroll);
  return (
    <>
      {successEnroll ? <EnrollmentSuccess /> : null}
      <div className='container' hidden={successEnroll}>
        <div className='row'>
          <div className='col-12'>
            <div className='enrollment-page'>
              <div className='modal-content'>
                <h3>Записатися на тренування</h3>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Ім'я"
                    value={name}
                    name='name'
                    className='create-user-text-field'
                    // style={{ border: errorMessages.name ? '1px solid red' : '' }}
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                  <PhoneInput
                    disableDropdown
                    specialLabel='Телефон'
                    name='phone'
                    containerClass='create-user-phone-container'
                    // style={{ border: errorMessages.phone ? '1px solid red' : '' }}
                    inputClass='create-user-phone-field'
                    country='ua'
                    value={phone}
                    onChange={setPhone}
                  />
                  <br />
                  <TextField
                    label='Ваш інстаграм'
                    value={instagram}
                    name='instagram'
                    className='create-user-text-field'
                    // style={{ border: errorMessages.name ? '1px solid red' : '' }}
                    type='text'
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                  <br />
                  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={uk}>
                    <p style={{ color: '#48d494' }}>Дата народження</p>
                    <StaticDatePicker
                      className='date-picker'
                      label='Дата народження'
                      // views={['year', 'month', 'day']}
                      value={birthday}
                      sx={{ width: 320, minWidth: 320 }}
                      onChange={(newValue) => setBirthDay(newValue)}
                    />
                  </LocalizationProvider>
                  <br />
                  <button type='submit'>Записатися</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EnrollmentSuccess = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='enrollment-page'>
            <div className='success'>
              <h3>Ви успішно записались на тренування</h3>
              <h2>💪</h2>
              <p style={{ fontSize: '1.4rem' }}>
                Ми з нетерпінням чекаємо на наші спільні заняття. Скоро наша команда зв&apos;яжеться з вами для
                подальших інструкцій. Бажаємо вам успіху та до зустрічі на тренуванні!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;
