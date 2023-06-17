import React, { useEffect, useState } from 'react';
import CreateEditSchedule from './utils/CreateEditSchedule';

const CreateSchedule = () => {
  return (
    <div className='container justify-content-center'>
      <div className='row'>
        <div className='col-12'>
          <CreateEditSchedule action='create' />
        </div>
      </div>
    </div>
  );
};

export default CreateSchedule;
