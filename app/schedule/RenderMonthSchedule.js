/* eslint-disable react/prop-types */
'use client'
import './styles/schedule.scss'
import { useState } from 'react'
import MonthViewDay from '@/app/schedule/MonthViewDay'

export default function RenderMonthSchedule({ schedule }) {
  const [date, setDate] = useState(new Date())

  const dateView = (d, month) => {
    if (month === 'prev') {
      const prevMonth = new Date(
        d.getFullYear(),
        d.getMonth() - 1,
        1
      ).toLocaleString('UK-UA', { month: 'long' })
      return `${
        prevMonth.charAt(0).toUpperCase() + prevMonth.slice(1)
      } ${d.getFullYear()}`
    }
    if (month === 'next') {
      const nextMonth = new Date(
        d.getFullYear(),
        d.getMonth() + 1,
        1
      ).toLocaleString('UK-UA', { month: 'long' })
      return `${
        nextMonth.charAt(0).toUpperCase() + nextMonth.slice(1)
      } ${d.getFullYear()}`
    }
    const currentMonth = new Date(
      d.getFullYear(),
      d.getMonth(),
      1
    ).toLocaleString('UK-UA', { month: 'long' })
    return `${
      currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)
    } ${d.getFullYear()}`
  }

  const changeMonth = (e) => {
    if (e.target.nodeName === 'path') {
      if (e.target.parentElement.parentElement.className.includes('left')) {
        setDate(new Date(date.setMonth(date.getMonth() - 1)))
      } else {
        setDate(new Date(date.setMonth(date.getMonth() + 1)))
      }
    } else if (e.target.parentElement.className.includes('left')) {
      setDate(new Date(date.setMonth(date.getMonth() - 1)))
    } else {
      setDate(new Date(date.setMonth(date.getMonth() + 1)))
    }
  }

  return (
    <div className='month-schedule schedule'>
      <div className='schedule__title'>
        <div
          className='schedule__arrow arrow-left'
          onClick={(e) => changeMonth(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeMonth(e)}
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
        <div className='month-title__date'>
          <div className='month-title__date--prev'>
            <div className='month-title__date--prev-month'>
              {dateView(date, 'prev')}
            </div>
          </div>

          <div className='month-title__date--current'>
            <div className='month-title__date--current-month'>

              {dateView(date, 'current')}

            </div>
          </div>

          <div className='month-title__date--next'>
            <div className='month-title__date--next-month'>
              {dateView(date, 'next')}
            </div>
          </div>
        </div>
        <div
          className='schedule__arrow'
          onClick={(e) => changeMonth(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeMonth(e)}
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
      <div className='month-schedule__table'>
        {/* RENDERING MONTH VIEW */}
        <MonthViewDay date={date} schedule={schedule} />
      </div>
    </div>
  )
}
