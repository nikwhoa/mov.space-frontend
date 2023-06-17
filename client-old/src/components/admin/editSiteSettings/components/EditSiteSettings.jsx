/* eslint-disable default-param-last */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import LoadingSpinner from '../../../../utils/LoadingSpinner';
import { getSettings, updateSettings } from '../slices/siteSettingsSlices';
import '../styles/editsitesettings.scss';
import TextSettings from './TextSettings';
import VisualSettings from './VisualSettings';

const EditSiteSettings = () => {
  const { isLoading } = useSelector((state) => state.siteSettings);
  const status = useSelector((state) => state.siteSettings.status);
  const settings = useSelector((state) => state.siteSettings.settings[0]);
  const isLoadingSettings = useSelector((state) => state.siteSettings.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

  const handleUpdateSubmit = (
    e,
    {
      siteName = settings.siteName,
      siteSlogan = settings.siteSlogan,
      mainScreenMedia: { fileType, fileUrl } = settings.mainScreenMedia,
      classesMainText = settings.classesMainText,
      trainersMainText = settings.trainersMainText,
      mainTextSettings = settings.mainTextSettings
    }
  ) => {
    e.preventDefault();
    dispatch(
      updateSettings({
        id: settings._id,
        siteName,
        siteSlogan,
        mainScreenMedia: { fileType, fileUrl },
        classesMainText,
        trainersMainText,
        mainTextSettings
      })
    ).then(() => {
      dispatch(getSettings());
    });
  };

  return (
    <div className='edit-site-settings'>
      <h2>Редагувати сайт</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TextSettings
            siteName={settings.siteName}
            siteSlogan={settings.siteSlogan}
            status={status}
            handleUpdateSubmit={handleUpdateSubmit}
            classesMainText={settings.classesMainText}
            trainersMainText={settings.trainersMainText}
            mainTextSettings={settings.mainTextSettings}
          />
          <br />
          <VisualSettings
            status={status}
            handleUpdateSubmit={handleUpdateSubmit}
            isLoadingSettings={isLoadingSettings}
            settings={settings}
          />
        </>
      )}
    </div>
  );
};
export default EditSiteSettings;
