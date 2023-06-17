/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line object-curly-newline
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../utils/LoadingSpinner';
import { checkIsAdmin, checkIsAuth, checkIsTrainer } from '../../slices/auth/authSlice';
import CreateUser from './createUser/CreateUser';
import Users from './users/Users';
import Classes from './classes/Classes';
import CreateClass from './classes/CreateClass';
import Class from './classes/Class';
import CreateSchedule from './schedule/CreateSchedule';
import Schedule from './schedule/Schedule';
import EditSchedule from './schedule/EditSchedule';
import MainPage from './mainPage/MainPage';
import './admin.scss';
import EditSiteSettings from './editSiteSettings';
import EditUsers from './users/EditUsers';

const Admin = () => {
  const isAdmin = useSelector(checkIsAdmin);
  const { isLoading } = useSelector((state) => state.auth);
  const { username } = useSelector((state) => state.auth.user) || {};
  const isAuth = useSelector(checkIsAuth);
  const { logout } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isTrainer = useSelector(checkIsTrainer) === 'trainer';

  const showAdmin = isAdmin || isTrainer;

  useEffect(() => {
    if (logout) {
      navigate('/');
    }
  }, [logout, navigate]);

  return (
    <div className='container admin-container'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='row text-center'>
          <div className='col-12'>
            <ul className='admin-links'>
              <li>
                <Link to='/admin'>Адмін-панель</Link>
              </li>
              {!isTrainer ? (
                <li>
                  <Link to='create-user'>Додати користувача</Link>
                </li>
              ) : null}
              {!isTrainer ? (
                <li>
                  <Link to='users'>Користувачі</Link>
                </li>
              ) : null}
              {!isTrainer ? (
                <li>
                  <Link to='classes'>Тренування</Link>
                </li>
              ) : null}
              <li>
                <Link to='schedule'>Розклад</Link>
              </li>
              <li>
                <Link to='site-settings'>Налаштування сайту</Link>
              </li>
            </ul>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/create-user' element={<CreateUser />} />
              <Route path='/classes' element={<Classes />} />
              <Route path='/classes/create' element={<CreateClass />} />
              <Route path='/classes/edit/:id' element={<Class />} />
              <Route path='/users' element={<Users />} />
              <Route path='/users/edit/:id' element={<EditUsers />} />
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/schedule/create-schedule' element={<CreateSchedule />} />
              <Route path='/schedule/edit/:id' element={<EditSchedule />} />
              <Route path='/site-settings/*' element={<EditSiteSettings />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};
export default Admin;
