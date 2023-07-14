/* eslint-disable */
'use client'
import './modal.scss'
import { CSSTransition } from 'react-transition-group'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Modal({
  show,
  close
}) {

  if (!show) {
    return null
  }

  const router = useRouter()
  const [successSubmit, setSuccessSubmit] = useState(false)
  const [showModal, setShowModal] = useState(show)
  const [error, setError] = useState(false)
  const modalRef = useRef(null)

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

  function animateModal(element, start, end, duration) {
    const range = end - start
    const starting = new Date().getTime()
    const timer = setInterval(function() {
      const now = new Date().getTime() - starting
      const progress = now / duration
      const result = range * progress + start
      element.style.transform = `translateX(${result}%)`

      if (progress >= 1) clearInterval(timer)
    }, 10)
  }

  useEffect(() => {
    animateModal(modalRef.current, 100, 1, 300)

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        animateModal(modalRef.current, 1, 100, 300)
        close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [show])

  // action={`${process.env.NEXT_PUBLIC_API_URL}submit-form`}
  return (
    <div className={`fixed z-[200] inset-0 overflow-y-auto overflow-hidden`}>
      <div className='flex items-center justify-center min-h-screen px-5 md:p-0'>
        <div
          className='w-full bg-black py-4 relative md:w-6/12 md:h-screen md:absolute md:right-0 md:flex md:justify-center'
          style={{ transform: 'translateX(100%)' }}
          ref={modalRef}>
          <div className='h-full md:h-auto md:flex md:items-center'>
            {!successSubmit ? (
              <div className='sm:flex sm:items-start'>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h2 className='text-white text-2xl font-extrabold my-14'>MOV.space</h2>
                  <h3 className='text-lg leading-6 font-medium text-white'>Записатись на тренування</h3>
                  <div className='mt-2'>
                    <p className='text-sm text-white'>Для запису введіть ваш телефон та імʼя нижче у формі та
                      натисніть
                      кнопку</p>
                  </div>
                  <div className='my-2'>
                    <form method='post' className='w-11/12 md:w-full max-w-lg mx-auto mt-5' onSubmit={handleSubmit}>
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
          </div>
        </div>
      </div>
    </div>
  )
}
