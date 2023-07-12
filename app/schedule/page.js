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
    'http://localhost:3001/api/schedule',
    fetcher
  )

  if (error) return 'An error has occurred.'
  if (isLoading) return 'Loading...'
  // const {
  //   data,
  //   isLoading,
  //   error
  // } = useQuery('schedule-data', () =>
  //   fetch('http://localhost:3001/api/schedule', { method: 'GET' }).then(
  //     (res) => {
  //       return res.json()
  //     }
  //   ))
  //
  // if (isLoading) return 'Loading...'
  //
  // if (error) return 'An error has occurred: ' + error.message
  // console.log(data)
  console.log(data)
  let i = 0;
  console.log(i++)
  return (
    <>
      <div className='container mx-auto px-4 py-2'>
        <div>
          <h2 className='font-extrabold text-4xl text-white'>
            Розклад тренувань
          </h2>
        </div>
        <Schedule schedule={data} isLoading={isLoading} />
      </div>

    </>
  )
}
