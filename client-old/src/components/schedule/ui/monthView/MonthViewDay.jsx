/* eslint-disable operator-linebreak */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-debugger */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

const MonthViewDay = ({ date, schedule }) => {
  // month output function for month view start from monday

  const monthOutput = (months) => {
    const month = months.getMonth();
    const year = months.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    const daysInMonth = lastDay.getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const daysInNextMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonthToRender = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const daysInNextMonthToRender = lastDayIndex === 0 ? 0 : 7 - lastDayIndex;
    const days = [];
    let day = 1;
    let prevMonthDay = daysInPrevMonth - daysInPrevMonthToRender + 1;
    let nextMonthDay = 1;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < daysInPrevMonthToRender) {
          days.push(new Date(year, month - 1, prevMonthDay.toLocaleString()));
          // debugger
          prevMonthDay++;
        } else if (day > daysInMonth) {
          days.push(new Date(year, month + 1, nextMonthDay.toLocaleString()));
          // debugger
          nextMonthDay++;
        } else {
          days.push(new Date(year, month, day)).toLocaleString();
          // debugger
          day++;
        }
      }
    }
    return days;
  };

  return (
    <>
      {monthOutput(date).map((day) => (
        <div className='month-schedule__table__item' key={day}>
          <div className='weekday'>
            {new Date(day)
              .toLocaleString('UK-UA', {
                weekday: 'long',
              })
              .charAt(0)
              .toUpperCase() +
              new Date(day)
                .toLocaleString('UK-UA', {
                  weekday: 'long',
                })
                .slice(1)}{' '}
            {'  '}
            {new Date(day).toLocaleString('UK-UA', { day: 'numeric' })}{' '}
          </div>
          <div className='trains'>
            {schedule
              .filter(
                (item) =>
                  new Date(item.TrainTime).toLocaleString('en-US', { hour12: false }).slice(0, 10) ===
                  day.toLocaleString('en-US', { hour12: false }).slice(0, 10)
              )
              .map((train) => {
                return (
                  <a
                    href={`classes/class/${train.scheduleItem}`}
                    className='train'
                    key={train._id}
                    style={{ color: 'white' }}
                  >
                    <div className='train__title'>{train.scheduleItem}</div>
                    <div className='train__time'>
                      {new Date(train.TrainTime).toLocaleString('UK-UA', {
                        hour: 'numeric',
                        minute: 'numeric',
                      })}
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      ))}
    </>
  );
};

MonthViewDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MonthViewDay;
