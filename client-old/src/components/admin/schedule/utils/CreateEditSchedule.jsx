/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading,react/jsx-no-useless-fragment */
/* eslint-disable-next-line react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Autocomplete, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { DatePicker, LocalizationProvider, MobileTimePicker, StaticDatePicker } from '@mui/x-date-pickers';
import { toast } from 'react-toastify';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import uk from 'date-fns/locale/uk';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUsers } from '../../../../slices/users/usersSlice';
import { getClasses } from '../../../../slices/classes/classesSlice';
import { createSchedule, getSchedule, updateSchedule } from '../../../../slices/schedule/scheduleSlice';
import LoadingSpinner from '../../../../utils/LoadingSpinner';

const CreateEditSchedule = ({ action }) => {
  const { id } = useParams();
  const [classes, setClasses] = useState([]);
  const [scheduleName, setScheduleName] = useState('');
  const [user, setUser] = useState([]);
  const [scheduleDate, setScheduleDate] = useState({});
  const [duration, setDuration] = useState(1);
  const [seats, setSeats] = useState(20);
  const [avialbleSeats, setAvialbleSeats] = useState(0);
  const [price, setPrice] = useState('');
  const [scheduleTrainer, setScheduleTrainer] = useState('');

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.classes);
  const { status } = useSelector((state) => state.schedule);
  const { isLoadingUser } = useSelector((state) => state.users);
  const isLoadingSchedule = useSelector((state) => state.schedule.isLoading);

  useEffect(() => {
    if (action === 'edit') {
      dispatch(getSchedule()).then((res) => {
        const schedule = res.payload.schedule.filter((item) => item._id === id);
        setScheduleTrainer(schedule[0].trainer);
        setScheduleName(schedule[0].scheduleItem);
        setScheduleDate(new Date(schedule[0].TrainTime));
        setAvialbleSeats(schedule[0].seats.available);
        setPrice(schedule[0].price);
        setDuration(schedule[0].duration);
      });
    }
    dispatch(getClasses()).then((res) => {
      setClasses(res.payload);
    });

    dispatch(getUsers()).then((res) => {
      setUser(res.payload.filter((item) => item.role === 'trainer'));
    });
  }, [dispatch, id, action, status]);

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createSchedule({
        scheduleName,
        scheduleDate,
        duration,
        scheduleTrainer,
        seats,
        price,
      })
    );

    setScheduleName('');
    setScheduleDate({});
    setDuration(1);
    setSeats(20);
    setPrice(0);
    setScheduleTrainer('');
    // setScheduleTrainer('Оберіть тренера');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(duration);
    dispatch(
      updateSchedule({
        scheduleId: id,
        scheduleItem: scheduleName,
        TrainTime: scheduleDate,
        duration,
        trainer: scheduleTrainer,
        seats: avialbleSeats,
        price,
        user: user || null,
      })
    );
  };

  return (
    <>
      {action === 'edit' ? (
        <>
          <h2>Редагувати розклад</h2>

          <form className='create-schedule edit-schedule-form'>
            <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
              <Autocomplete
                className='classes-picker'
                disablePortal
                getOptionLabel={(option) => option.className}
                options={classes}
                sx={{ width: '100%' }}
                onChange={(e, value) => setScheduleName(value.className)}
                renderInput={(params) => <TextField {...params} label={scheduleName} />}
              />
            </div>

            <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={uk}>
                <StaticDatePicker
                  className='date-picker'
                  label='Дата'
                  value={scheduleDate}
                  onChange={(newValue) => setScheduleDate(newValue)}
                />
                <br />
                <MobileTimePicker
                  minutesStep={1}
                  className='time-picker'
                  label='Час (можна вказати лише вибравши у спливаючому вікні)'
                  orientation='landscape'
                  views={['hours', 'minutes']}
                  value={scheduleDate}
                  onChange={(newValue) => setScheduleDate(newValue)}
                />
              </LocalizationProvider>
            </div>
            <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
              <TextField
                className='create-schedule-input'
                label='Тривалість'
                helperText='Тривалість тренування у годинах'
                type='number'
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
              <TextField
                className='create-schedule-input'
                label='Кількість місць'
                value={seats}
                type='number'
                // value={avialbleSeats}
                onChange={(e) => setAvialbleSeats(e.target.value)}
              />
            </div>
            <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
              <TextField
                className='create-schedule-input'
                label='Ціна'
                type='number'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
              <InputLabel id='select-trainer-label' style={{ color: '#ffffff', textAlign: 'left' }}>
                Тренер
              </InputLabel>
              <Select
                className='create-schedule-input'
                style={{ textAlign: 'left' }}
                labelId='select-trainer-label'
                id='select-trainer'
                value={scheduleTrainer}
                label='Тренер'
                onChange={(e) => setScheduleTrainer(e.target.value)}
              >
                {user && user.length > 0
                  ? user.map((item) => {
                      return (
                        <MenuItem key={item._id} value={item.username}>
                          {item.username}
                        </MenuItem>
                      );
                    })
                  : null}
              </Select>
            </div>
            <br />
            <button
              type='submit'
              className='btn btn-primary btn-block create-user-btn'
              onClick={(e) => handleEditSubmit(e)}
            >
              Підтвердити
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Додати тренування у розклад</h2>
          <div className='create-schedule '>
            <form className='create-schedule-form'>
              <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
                <Autocomplete
                  className='classes-picker'
                  disablePortal
                  getOptionLabel={(option) => option.className}
                  options={classes}
                  sx={{ width: '100%' }}
                  onChange={(e, value) => setScheduleName(value.className)}
                  renderInput={(params) => <TextField {...params} label='Тренування' />}
                />
              </div>

              <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={uk}>
                  <DatePicker
                    className='date-picker'
                    label='Дата'
                    value={scheduleDate}
                    onChange={(newValue) => setScheduleDate(newValue)}
                  />
                  <br />
                  <MobileTimePicker
                    minutesStep={60}
                    className='time-picker'
                    label='Час'
                    views={['hours']}
                    value={scheduleDate}
                    onChange={(newValue) => setScheduleDate(newValue)}
                  />
                </LocalizationProvider>
              </div>
              <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
                <TextField
                  className='create-schedule-input'
                  label='Тривалість'
                  helperText='Тривалість тренування у годинах'
                  type='number'
                  defaultValue={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
                <TextField
                  className='create-schedule-input'
                  label='Кількість місць'
                  type='number'
                  defaultValue={seats}
                  onChange={(e) => setSeats(e.target.value)}
                />
              </div>
              <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
                <TextField
                  className='create-schedule-input'
                  label='Ціна'
                  type='number'
                  defaultValue={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='input-container' style={{ height: 'initial', padding: '0 1.5rem' }}>
                {isLoading || isLoadingUser ? (
                  <LoadingSpinner />
                ) : (
                  <Autocomplete
                    className='classes-picker'
                    disablePortal
                    getOptionLabel={(option) => option.username}
                    options={user}
                    // value={scheduleTrainer}
                    sx={{ width: '100%' }}
                    onChange={(e, value) => setScheduleTrainer(value.username)}
                    renderInput={(params) => <TextField {...params} label='Тренери' />}
                  />
                )}
              </div>
              <br />
              <button
                type='submit'
                className='btn btn-primary btn-block create-user-btn'
                onClick={(e) => handleCreateSubmit(e)}
              >
                Додати
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

CreateEditSchedule.propTypes = {
  action: PropTypes.string.isRequired,
};

export default CreateEditSchedule;
