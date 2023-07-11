'use client'
import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import ScheduleButton from '@/app/schedule/ShowScheduleButton'

const queryClient = new QueryClient()

// eslint-disable-next-line react/prop-types
function Schedule({ view }) {
  const {
    isLoading,
    error,
    data
  } = useQuery({
    queryKey: ['schedule-data'],
    queryFn: () =>
      fetch('http://localhost:3001/api/schedule', { method: 'GET' }).then(
        (res) => {
          return res.json()
        }
      )
  })
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(view)

  return (
    <div className='text-white'>
      {data.map((item) => <div><h1>{item.scheduleItem}</h1></div>)}
    </div>
  )
}

export default async function Home() {
  const [view, setView] = useState('week')
  const [windowWidth, setWindowWidth] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setWindowWidth(true)
      setView('day')
    } else {
      setWindowWidth(false)
    }

    const handleWindowResize = () => {
      const prevView = view
      if (window.innerWidth < 1024) {
        setWindowWidth(true)
        setView('day')
      } else {
        setView(prevView)
        setWindowWidth(false)
      }
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  return (
    <>
      <div className='container mx-auto px-4 py-2'>
        <div>
          <h2 className='font-extrabold text-4xl text-white'>
            Розклад тренувань
          </h2>
        </div>
        <div className='w-full text-white' hidden={windowWidth}>
          Переглянути розклад на:&nbsp;
          <ScheduleButton view={view} setView={setView} value='day' />{' '}
          <ScheduleButton view={view} setView={setView} value='week' />{' '}
          <ScheduleButton view={view} setView={setView} value='month' />
        </div>
        <QueryClientProvider client={queryClient}>
          <Schedule view={view} />
        </QueryClientProvider>
      </div>

    </>
  )
}
