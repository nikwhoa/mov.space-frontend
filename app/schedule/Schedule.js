/* eslint-disable */
'use client'
import { useEffect, useState } from 'react'
import './styles/schedule.scss'
import ScheduleButton from '@/app/schedule/ShowScheduleButton'
import RenderMonthSchedule from '@/app/schedule/RenderMonthSchedule'
import RenderWeekSchedule from '@/app/schedule/RenderWeekSchedule'
import RenderDaySchedule from '@/app/schedule/RenderDaySchedule'

export default function Schedule({
  schedule,
  isLoading
}) {
  const [view, setView] = useState('week')
  const [windowWidth, setWindowWidth] = useState(false)

  useEffect(() => {
    const updateViewAndWidth = () => {
      if (window.innerWidth < 1024) {
        setWindowWidth(true)
        setView('day')
      } else {
        setWindowWidth(false)
        setView(view)
      }
    }

    // call the function on component mount
    updateViewAndWidth()

    const handleWindowResize = () => {
      updateViewAndWidth()
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <>
      {windowWidth ? null : (
        <div className='w-full text-white'>
          Переглянути розклад на:&nbsp;
          <ScheduleButton view={view} setView={setView} value='day' />{' '}
          <ScheduleButton view={view} setView={setView} value='week' />{' '}
          <ScheduleButton view={view} setView={setView} value='month' />
        </div>
      )}

      <div className='mb-14 min-h-[400px]'>
        {isLoading
          ? (
            <>Loading...</>
          )
          : (
            {
              month: <RenderMonthSchedule schedule={schedule} />,
              week: <RenderWeekSchedule schedule={schedule} />,
              day: <RenderDaySchedule schedule={schedule} />
            }[view]
          )}
      </div>
    </>
  )
}
