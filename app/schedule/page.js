'use client'

// import ScheduleButton from '@/app/schedule/ShowScheduleButton'

import Schedule from '@/app/schedule/Schedule'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home(props) {
  const {
    data,
    error,
    isLoading
  } = useSWR(
    'http://localhost:3002/api/schedule',
    fetcher
  )

  if (error) return <div className='text-white'>An error has occurred.</div>
  if (isLoading) return <div className='text-white'>Loading...</div>

  return (
    <>
      <div className='container mx-auto px-4 py-2'>
        <div>
          <h2 className='font-extrabold text-4xl text-white'>
            Розклад тренувань
          </h2>
        </div>
        <div className='my-8'>
          <Schedule schedule={data} isLoading={isLoading} />
        </div>
      </div>

    </>
  )
}
