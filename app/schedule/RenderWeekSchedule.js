/* eslint-disable */
import ArrowLeft from '@/client-old/src/components/schedule/ui/arrows/ArrowLeft'
import WeeklyViewDay from '@/app/schedule/WeeklyViewDay'
import ArrowRight from '@/client-old/src/components/schedule/ui/arrows/ArrowRight'
import { useState } from 'react'
import { add, startOfWeek } from 'date-fns'
import './styles/schedule.scss'

export default function RenderWeekSchedule({ schedule }) {
  const [date, setDate] = useState(new Date());
  const weekView = (d) => {
    const week = [];
    const startWeek = startOfWeek(d, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      week.push(add(startWeek, { days: i }));
    }
    return week;
  };

  const changeWeek = (e) => {
    if (e.target.nodeName === 'path') {
      if (e.target.parentElement.parentElement.className.includes('left')) {
        setDate(new Date(date.setDate(date.getDate() - 7)));
      } else {
        setDate(new Date(date.setDate(date.getDate() + 7)));
      }
    } else if (e.target.parentElement.className.includes('left')) {
      setDate(new Date(date.setDate(date.getDate() - 7)));
    } else {
      setDate(new Date(date.setDate(date.getDate() + 7)));
    }
  };
  return (
    <div className='week-schedule schedule'>
      <div className='schedule__title'>
        <div
          className='schedule__arrow arrow-left'
          onClick={(e) => changeWeek(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeWeek(e)}
          role='button'
          tabIndex={0}
        >
          <ArrowLeft />
        </div>
        <div className='schedule__times'>
          <div className='schedule__times__time'>8:00</div>
          <div className='schedule__times__time'>9:00</div>
          <div className='schedule__times__time'>10:00</div>
          <div className='schedule__times__time'>11:00</div>
          <div className='schedule__times__time'>12:00</div>
          <div className='schedule__times__time'>13:00</div>
          <div className='schedule__times__time'>14:00</div>
          <div className='schedule__times__time'>15:00</div>
          <div className='schedule__times__time'>16:00</div>
          <div className='schedule__times__time'>17:00</div>
          <div className='schedule__times__time'>18:00</div>
          <div className='schedule__times__time'>19:00</div>
          <div className='schedule__times__time'>20:00</div>
          <div className='schedule__times__time'>21:00</div>
          <div className='schedule__times__time'>22:00</div>
        </div>
        {weekView(date).map((day, i) => {
          return (
            <div
              className={`weekday schedule__date${
                new Date(day).getDate() === new Date().getDate() ? ' current-date' : ''
              } ${i === 6 ? 'last-day' : ''}`}
              key={day}
            >
              <div className='day'>
                <div>{new Date(day).toLocaleString('UK-UA', { weekday: 'long' })}</div>
                {'  '}
                {new Date(day).getDate()}
              </div>

              <WeeklyViewDay day={day} schedule={schedule} />
            </div>
          );
        })}
        <div
          className='schedule__arrow'
          onClick={(e) => changeWeek(e)}
          onKeyDown={(e) => e.target.nodeName === 'path' && changeWeek(e)}
          role='button'
          tabIndex={0}
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
