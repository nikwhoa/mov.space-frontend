/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline,no-else-return */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-debugger */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getClasses } from '../../../../slices/classes/classesSlice';
import parseCustomDateString from '../../utils/parseCustomDateString';

const WeeklyViewDay = ({ day, schedule }) => {
  const dispatch = useDispatch();
  const [trainClass, setTrainClass] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeTrainIndex, setActiveTrainIndex] = useState(null);

  const getClass = (classname) => {
    dispatch(getClasses()).then((res) => {
      setTrainClass(res.payload.find((c) => c.className === classname));
    });
    return null;
  };

  const timeSlots = [];
  for (let i = 8; i <= 22; i++) {
    timeSlots.push(`${new Date(day).toLocaleString('en-US').slice(0, 10)} ${i <= 9 ? 0 : ''}${i}:00:00`);
  }

  const renderTooltip = (scheduleTrain, index) => {
    if (showTooltip && trainClass && index === activeTrainIndex) {
      const truncatedDescription =
        trainClass.classDescription.length > 200
          ? `${trainClass.classDescription.slice(0, 200)}...`
          : trainClass.classDescription;

      return (
        <div
          className='schedule-tooltip'
          onMouseLeave={() => setShowTooltip(false)}
          onMouseEnter={() => setShowTooltip(true)}
        >
          <div className='schedule-tooltip__content'>
            <button type='button' className='close-button' onClick={() => setShowTooltip(false)}>
              &times;
            </button>
            <p>
              Час: {new Date(scheduleTrain.TrainTime).toLocaleString('uk-UA', { hour: 'numeric', minute: 'numeric' })}
            </p>
            <p>{truncatedDescription}</p>
            <Link to={`/enroll/${scheduleTrain._id}`}>
              <button
                className='enroll-button'
                type='button'
                onClick={() => {
                  // setIsEnrollmentModalOpen(true);
                }}
              >
                Записатися
              </button>
            </Link>
          </div>
        </div>
      );
    }
    return null;
  };

  const handleMouseEnter = (train, index) => {
    if (train) {
      getClass(train.scheduleItem);
      setShowTooltip(true);
      setActiveTrainIndex(index);
    } else {
      // Check if the previous time slot has a train with duration 2
      const prevTrain =
        index - 1 >= 0 && schedule.find((t) => new Date(t.TrainTime).toLocaleString('en-US', { hour12: false }).slice(0, 13) === timeSlots[index - 1].slice(0, 13));

      if (prevTrain && prevTrain.duration === 2) {
        getClass(prevTrain.scheduleItem);
        setActiveTrainIndex(index - 1);
        setShowTooltip(true);
      }
    }
  };
  const handleMouseLeave = (index) => {
    // Check if the next time slot also has a train
    const nextTrain =
      index + 1 < timeSlots.length &&
      schedule.find((t) => new Date(t.TrainTime).toLocaleString('en-US', { hour12: false }).slice(0, 13) === timeSlots[index + 1].slice(0, 13));

    if (!nextTrain) {
      setShowTooltip(false);
      setActiveTrainIndex(null);
    }
  };
  return (
    <>
      {timeSlots.map((time, index) => {
        const train = schedule.find((t) => {
          return new Date(t.TrainTime).toLocaleString('en-US', { hour12: false }).slice(0, 13) === time.slice(0, 13);
        });
        return (
          <div
            key={time}
            className={`schedule__day__item ${train ? `train-${train.duration}` : ''}`}
            onMouseEnter={() => handleMouseEnter(train, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {train && (
              <>
                <a href={`classes/class/${train.scheduleItem}`} className='schedule-item-link'>
                  <div>{train.scheduleItem}</div>
                </a>
                {renderTooltip(train, index)}
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

WeeklyViewDay.propTypes = {
  //   date: PropTypes.instanceOf(Date).isRequired,
  day: PropTypes.instanceOf(Date).isRequired,
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeeklyViewDay;
