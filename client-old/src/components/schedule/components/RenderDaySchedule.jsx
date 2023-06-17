/* eslint-disable operator-linebreak */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '../ui/arrows/ArrowLeft';
import ArrowRight from '../ui/arrows/ArrowRight';

const RenderDaySchedule = ({ schedule }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
  }, []);

  const changeDay = (e) => {
    if (e.target.nodeName === 'path') {
      if (e.target.parentElement.parentElement.className.includes('left')) {
        setDate(new Date(date.setDate(date.getDate() - 1)));
      } else {
        setDate(new Date(date.setDate(date.getDate() + 1)));
      }
    } else if (e.target.parentElement.className.includes('left')) {
      setDate(new Date(date.setDate(date.getDate() - 1)));
    } else {
      setDate(new Date(date.setDate(date.getDate() + 1)));
    }
  };

  return (
    <div className='day-schedule schedule'>
      <div className='day-schedule__title'>
        <div
          className='schedule__arrow arrow-left'
          onClick={(e) => changeDay(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeDay(e)}
          role='button'
          tabIndex={0}
        >
          <ArrowLeft />
        </div>
        <div className='day-schedule__date'>
          {date.toLocaleString('UK-UA', {
            month: 'long',
            weekday: 'long',
            day: 'numeric',
          })}
        </div>
        <div
          className='schedule__arrow'
          onClick={(e) => changeDay(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeDay(e)}
          role='button'
          tabIndex={0}
        >
          <ArrowRight />
        </div>
      </div>
      {schedule
        .filter(
          (item) =>
            new Date(item.TrainTime).toLocaleString('en-US', { hour12: false }).slice(0, 10) ===
            date.toLocaleString('en-US', { hour12: false }).slice(0, 10)
        )
        .sort((a, b) => {
          const timeA = a.TrainTime.slice(-13, -11);
          const timeB = b.TrainTime.slice(-13, -11);
          return Number(timeA) - Number(timeB);
        })
        .map((train) => {
          return (
            <a
              href={`classes/class/${train.scheduleItem}`}
              className='train'
              key={train._id}
              style={{ color: 'white' }}
            >
              <div className=''>{train.scheduleItem}</div>
              <div className='train__time'>{train.TrainTime.slice(11, 16)}</div>
            </a>
          );
        })}
      {/* if no trains */}
      {schedule.filter(
        (item) =>
          new Date(item.TrainTime).toLocaleString('en-US', { hour12: false }).slice(0, 10) ===
          date.toLocaleString('en-US', { hour12: false }).slice(0, 10)
      ).length === 0 && (
        <div className='no-trains'>
          <p>
            В цей день немає тренувань
            <br />
            💪🏻
          </p>
        </div>
      )}
    </div>
  );
};

RenderDaySchedule.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RenderDaySchedule;
