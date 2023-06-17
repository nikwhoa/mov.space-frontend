/* eslint-disable array-callback-return */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { Button, Checkbox, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';
import AddUserPopUp from './AddUserPopUp';
import { getSchedule, deleteSchedule, createSchedule } from '../../../slices/schedule/scheduleSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import { checkIsAdmin, getTrainerID } from '../../../slices/auth/authSlice';
import scheduleDayOutput from './utils/scheduleDayOutput';

const Schedule = () => {
  const [scheduleItems, setScheduleItems] = useState([]);
  const [isShowPopUp, setShowPopUp] = useState(false);
  const [scheduleIdForPopUp, setScheduleIdForPopUp] = useState(null);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [scheduleAction, setScheduleAction] = useState('');

  const { schedule } = useSelector((state) => state.schedule.schedule);
  const { isLoading } = useSelector((state) => state.schedule);
  const { status } = useSelector((state) => state.schedule);
  const trainerID = useSelector(getTrainerID);
  const admin = useSelector(checkIsAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchedule()).then((res) => {
      setScheduleItems(res.payload.schedule.filter((item) => item.trainer === trainerID._id || admin));
    });
    if (status === 'Тренування видалено з розкладу') {
      toast(status);
    }
  }, [status]);

  const remove = (id) => {
    dispatch(deleteSchedule(id));
  };

  const addUser = (scheduleId) => {
    setScheduleIdForPopUp(scheduleId);
    setShowPopUp(!isShowPopUp);
  };

  const checkedHandle = (id, e) => {
    setIsAllChecked(false);
    if (isChecked.includes(id)) {
      setIsChecked((checkedBoxes) => checkedBoxes.filter((item) => item !== id));
    } else {
      setIsChecked([...isChecked, id]);
    }
  };

  const checkAllHandle = () => {
    setIsAllChecked(!isAllChecked);
    if (!isAllChecked) {
      setIsChecked([...scheduleItems.map((item) => item._id)]);
    } else {
      setIsChecked([]);
    }
  };

  const scheduleActionHandler = (e) => {
    if (e.target.innerText === 'ВИДАЛИТИ') {
      if (isChecked.length === 0) {
        toast('Тренування не вибрано', { type: 'warning' });
      }
      isChecked.map((item) => remove(item));
    } else if (e.target.innerText === 'КОПІЮВАТИ') {
      isChecked.map((item) => {
        return scheduleItems.filter((el) => {
          if (el._id === item) {
            dispatch(
              createSchedule({
                scheduleName: el.scheduleItem,
                scheduleDate: el.TrainTime,
                scheduleTrainer: el.trainer,
                seats: el.seats.available,
                price: el.price,
              })
            );
          }
          if (!toast.isActive('copy')) {
            toast('Тренування скопійовано', { type: 'success', toastId: 'copy' });
          }
        });
      });
    }
  };

  return (
    <>
      {isShowPopUp && <AddUserPopUp setShowPopUp={setShowPopUp} scheduleId={scheduleIdForPopUp} />}
      <div>
        <div>
          <div>
            <Link to='create-schedule'>Додати розклад</Link>
            <h1>Розклад</h1>
            <div className='actions-button-schedule' style={{ textAlign: 'left' }}>
              <Button onClick={scheduleActionHandler} variant='outlined' size='small'>
                Видалити
              </Button>
              <Button onClick={scheduleActionHandler} variant='outlined' size='small'>
                Копіювати
              </Button>
            </div>
            <table className='table table-bordered table-custom table-striped'>
              <thead>
                <tr>
                  <th scope='col' style={{ padding: '0px' }} width={5}>
                    <Checkbox sx={{ color: '#ffffff' }} onChange={checkAllHandle} checked={isAllChecked} />
                  </th>
                  <th scope='col'>Подія</th>
                  <th scope='col'>Дата</th>
                  <th scope='col'>Час</th>
                  <th scope='col'>День</th>
                  <th scope='col'>
                    Кількість <br /> місць
                  </th>
                  <th scope='col'>
                    Кількість <br /> вільних місць
                  </th>
                  <th scope='col'>Ціна</th>
                  <th scope='col'>Редагувати</th>
                </tr>
              </thead>
              <tbody>
                {isLoading === true ? (
                  <tr>
                    <td colSpan={7}>
                      <LoadingSpinner />
                    </td>
                  </tr>
                ) : (
                  scheduleItems.map((item) => (
                    <tr key={item._id}>
                      <td style={{ padding: '0px' }} width={5}>
                        <Checkbox
                          sx={{ color: '#ffffff' }}
                          onChange={(e) => checkedHandle(item._id, e)}
                          checked={isAllChecked || isChecked.includes(item._id)}
                        />
                      </td>
                      <td>{item.scheduleItem}</td>
                      <td>
                        <div>{item.TrainTime.slice(0, 10).replace('T', ' ')}</div>
                      </td>
                      <td>
                        <div>
                          {new Date(item.TrainTime).toLocaleString('UK-UA', {
                            hour: 'numeric',
                            minute: 'numeric',
                          })}
                        </div>
                      </td>
                      <td>
                        <div>{scheduleDayOutput(item.TrainTime)}</div>
                      </td>
                      <td>
                        <div>{item.seats.available}</div>
                      </td>
                      <td>
                        <div>{item.seats.reserved}</div>
                      </td>
                      <td>
                        <div>{item.price}</div>
                      </td>
                      <td>
                        <Link to={`edit/${item._id}`}>
                          <svg
                            enableBackground='new 0 0 19 19'
                            height='19px'
                            id='Layer_1'
                            version='1.1'
                            viewBox='0 0 19 19'
                            width='19px'
                            xmlSpace='preserve'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                          >
                            <g>
                              <path
                                d='M8.44,7.25C8.348,7.342,8.277,7.447,8.215,7.557L8.174,7.516L8.149,7.69   C8.049,7.925,8.014,8.183,8.042,8.442l-0.399,2.796l2.797-0.399c0.259,0.028,0.517-0.007,0.752-0.107l0.174-0.024l-0.041-0.041   c0.109-0.062,0.215-0.133,0.307-0.225l5.053-5.053l-3.191-3.191L8.44,7.25z'
                                fill='#ffffff'
                              />
                              <path
                                d='M18.183,1.568l-0.87-0.87c-0.641-0.641-1.637-0.684-2.225-0.097l-0.797,0.797l3.191,3.191l0.797-0.798   C18.867,3.205,18.824,2.209,18.183,1.568z'
                                fill='#ffffff'
                              />
                              <path
                                d='M15,9.696V17H2V2h8.953l1.523-1.42c0.162-0.161,0.353-0.221,0.555-0.293   c0.043-0.119,0.104-0.18,0.176-0.287H0v19h17V7.928L15,9.696z'
                                fill='#ffffff'
                              />
                            </g>
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
