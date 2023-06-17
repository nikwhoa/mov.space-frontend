/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Classes from '../components/classes/Classes';
import Header from '../components/header/Header';
import MainScreen from '../components/mainScreen/MainScreen';
import Schedule from '../components/schedule/index';
import Trainers from '../components/trainers/Trainers';
import RegisterPage from '../components/register/RegisterPage';
import LoginPage from '../components/login/LoginPage';
import { getMe } from '../slices/auth/authSlice';
import Admin from '../components/admin/Admin';
import 'react-toastify/dist/ReactToastify.min.css';
import Class from '../components/classes/Class';
import { getSettings } from '../components/admin/editSiteSettings';
import TrainerPage from '../components/trainers/TrainerPage';
import EnrollmentPage from '../utils/EnrollmentPage';
import Footer from '../components/footer/Footer';

const App = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.siteSettings.settings[0]);
  const isLoadingSettings = useSelector((state) => state.siteSettings.isLoading);
  const siteName = isLoadingSettings ? 'MOV.space' : settings.siteName;

  useEffect(() => {
    dispatch(getSettings());
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    document.title = siteName;
  }, [siteName]);

  const isMainPage = () => {
    return useLocation().pathname === '/';
  };

  const isAdminPage = () => {
    return useLocation().pathname.includes('admin');
  };
  return (
    <div className='site-wrap'>
      <Header settings={settings} />
      <AnimatePresence>
        <Routes location={useLocation()} key='main-route'>
          <Route path='/' element={<MainScreen settings={settings} />} key='mainscreen' />
          <Route path='/classes' element={<Classes settings={settings} />} key='classes' />
          <Route path='/classes/class/:className' element={<Class />} key='class' />
          <Route path='/schedule' element={<Schedule />} key='schedule' />
          <Route path='/trainers' element={<Trainers text={settings.trainersMainText} />} key='trainers' />
          <Route path='/trainers/:trainerName' element={<TrainerPage />} key='trainer' />
          <Route path='/register' element={<RegisterPage />} key='register' />
          <Route path='/login' element={<LoginPage />} key='login' />
          <Route path='/admin/*' element={<Admin />} key='admin' />
          <Route path='/enroll/:id' element={<EnrollmentPage />} key='enroll' />
        </Routes>
      </AnimatePresence>
      {!isMainPage() && !isAdminPage() && <Footer />}
      <ToastContainer
        position='bottom-center'
        autoClose={2000}
        hideProgressBar
        // icon={false}
        // closeButton={false}
      />
    </div>
  );
};

export default App;
