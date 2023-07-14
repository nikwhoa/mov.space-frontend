/* eslint-disable */
'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { tr } from 'date-fns/locale'

export default function Modal({
  show,
  close
}) {

  if (!show) {
    return null
  }

  const router = useRouter()
  const [successSubmit, setSuccessSubmit] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = e.target.elements.name.value
    const phone = e.target.elements.phone.value

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        phone
      })
    })

    if (response.ok) {
      setSuccessSubmit(true)
    } else {
      setError(true)
      console.error('Error:', response.status, response.statusText)
    }
  }
  // action={`${process.env.NEXT_PUBLIC_API_URL}submit-form`}
  return (
    <div className='fixed z-[200] inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen px-5 md:p-0'>
        <div className='w-full bg-black py-4 relative md:w-6/12 md:h-screen md:absolute md:right-0 md:flex md:justify-center'>
          <div className='h-full md:h-auto md:flex md:items-center'>
            {!successSubmit ? (
              <div className='sm:flex sm:items-start'>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3 className='text-lg leading-6 font-medium text-white'>Записатись на тренування</h3>
                  <div className='mt-2'>
                    <p className='text-sm text-white'>Для запису введіть ваш телефон та імʼя нижче у формі та натисніть
                      кнопку</p>
                  </div>
                  <div className='my-2'>
                    <form method='post' className='w-11/12 max-w-lg mx-auto mt-5' onSubmit={handleSubmit}>
                      <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                          <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                            id='name' type='text' placeholder='Імʼя' required />
                        </div>
                      </div>
                      <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                          <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                            id='phone' type='phone' placeholder='099999999' required />
                        </div>
                      </div>
                      <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                          <button
                            className='pl-5 pr-5 pt-2 pb-2 bg-nav-hover hover:bg-white cursor-pointer rounded-lg font-bold text-base text-black'
                            type='submit'>
                            Записатись
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className='text-white py-16 text-center'>Ви успішно записались на тренування</div>
              </>
            )}
          </div>
          <div className='absolute top-0 right-0'>
            <button className='text-white hover:font-extrabold font-bold py-2 px-4 rounded' onClick={() => close()}>
              X
            </button>
            {/* <button */}
            {/*   type='button' */}
            {/*   onClick={} */}
            {/*   className='mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:w-auto sm:text-sm'> */}
            {/*   Close */}
            {/* </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
