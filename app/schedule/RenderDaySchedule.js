/* eslint-disable react/prop-types */
'use client'
import { useEffect, useState } from 'react'
import './styles/schedule.scss'

export default function RenderDaySchedule({ schedule }) {
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
          <svg
            clipRule='evenodd'
            fillRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit='2'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z'
              fillRule='nonzero'
              fill='#fff'
            />
          </svg>
        </div>
        <div className='day-schedule__date'>
          {date.toLocaleString('UK-UA', {
            month: 'long',
            weekday: 'long',
            day: 'numeric'
          })}
        </div>
        <div
          className='schedule__arrow'
          onClick={(e) => changeDay(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeDay(e)}
          role='button'
          tabIndex={0}
        >
          <svg
            clipRule='evenodd'
            fillRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit='2'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z'
              fillRule='nonzero'
              fill='#fff'
            />
          </svg>
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
}
