'use client' // Error components must be Client Components

import { useEffect, useState } from 'react'
import Header from './components/view/Header/Header'

export default function Error({ error, reset }) {
  const [settings, setSettings] = useState([])
  useEffect(() => {
    setSettings({
      logo: 'https://mov.space/wp-content/uploads/2021/08/MOV.space.svg',
      text: 'Твій Кроссфіт Error'
    })
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <Header settings={settings} />
      <h2 className="text-white">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </button>
    </div>
  )
}
