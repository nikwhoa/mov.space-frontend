/* eslint-disable react/prop-types */
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ScheduleButton({
  view,
  setView,
  value
}) {
  const [valueTranslate, setValueTranslate] = useState(value)

  useEffect(() => {
    switch (value) {
      case 'day':
        setValueTranslate('день')
        break
      case 'week':
        setValueTranslate('тиждень')
        break
      case 'month':
        setValueTranslate('місяць')
        break
      default:
        setValueTranslate(value)
    }
  }, [value])

  return (
    <Link href={`/schedule?${value}`} onClick={() => setView(value)} className={`cursor-pointer filter-schedule-link ${
      view === value ? 'font-bold underline underline-offset-2 text-orange-color' : ''
    }`}>
      {valueTranslate}
    </Link>
    // <span
    //   onClick={() => setView(value)}
    //   onKeyDown={() => setView(value)}
    //   role='button'
    //   tabIndex={0}
    //   className={`cursor-pointer filter-schedule-link ${
    //     view === value ? 'filter-schedule-link__active' : ''
    //   }`}
    // >
    //   {valueTranslate}
    // </span>
  )
}
