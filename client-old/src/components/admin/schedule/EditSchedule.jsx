import React, { useState, useEffect } from 'react';
import CreateEditSchedule from './utils/CreateEditSchedule';
import './style.scss';

const EditSchedule = () => {
  return (
    <div className='container justify-content-center'>
      <div className='row justify-content-center'>
        <div className='col-12 schedule-col'>
          <CreateEditSchedule action='edit' />
        </div>
      </div>
    </div>
  );
};

export default EditSchedule;
