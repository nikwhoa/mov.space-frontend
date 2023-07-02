/* eslint-disable indent */
'use client'
import { useEffect, useState } from 'react'
import { register } from 'swiper/element/bundle'
import slide1 from './images/slide1.jpg'
import slide2 from './images/slide2.jpg'
import slide3 from './images/slide3.jpg'

export default function OurTrains() {
  const [slides, setSlides] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      }
    )

    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth < 768) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      })
    }
  }, [])

  // swiper
  useEffect(() => {
    register()

    const swiperEl = document.querySelector('swiper-container')
    const nextBtn = document.querySelector('.next-slide-button')
    const prevBtn = document.querySelector('.prev-slide-button')

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: {
        rows: 3,
        fill: 'column'
      }, // centeredSlides: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          grid: {
            rows: 1,
            fill: 'row'
          }
        }
      },
      loop: true,
      pagination: false,
      on: {
        init() {
          nextBtn.addEventListener('click', () => {
            this.slideNext()
          })
          prevBtn.addEventListener('click', () => {
            this.slidePrev()
          })
        }
      }
    }

    Object.assign(swiperEl, swiperParams)
    swiperEl.initialize()
  }, [])

  useEffect(() => {
    setSlides([{
      src: slide1.src,
      title: 'Body build'
    }, {
      src: slide2.src,
      title: 'Crossfit'
    }, {
      src: slide3.src,
      title: 'Exercise'
    }, {
      src: slide1.src,
      title: 'Body build 2'
    }, {
      src: slide2.src,
      title: 'Crossfit 2'
    }, {
      src: slide2.src,
      title: 'Crossfit 3'
    }])
  }, [])

  return (
    <section className='bg-black px-4'>
      <div className='container mx-auto'>
        <div className='pt-20 pb-8'>
          <h3 className='text-orange-color'>Наші тренування</h3>
        </div>
        <div className='relative overflow-visible text-white'>
          <swiper-container init={false} loop={true}>
            {slides.map((slide, index) => {
              if (isMobile) {
                if (index < 3) {
                  return (
                    <swiper-slide key={index}>
                      <a href='#' className='our-trains-link'>
                        <div style={{
                          backgroundImage: `url(${slide.src})`
                        }} className='our-trains-slide'>
                          {slide.title}
                        </div>
                      </a>
                    </swiper-slide>
                  )
                }
              } else {
                return (
                  <swiper-slide key={index}>
                    <a href='#' className='our-trains-link'>
                      <div style={{
                        backgroundImage: `url(${slide.src})`
                      }} className='our-trains-slide'>
                        {slide.title}
                      </div>
                    </a>
                  </swiper-slide>
                )
              }
            })}
          </swiper-container>
          <div
            className='hidden md:block nav-buttons prev-slide-button  text-4xl cursor-pointer w-[50px] absolute -left-10 lg:-left-12 text-primary-blue font-thin top-2/4 -translate-y-1/2 text-center'>
            &#8249;
          </div>
          <div
            className='hidden md:block nav-buttons next-slide-button text-4xl cursor-pointer w-[50px] absolute -right-10 lg:-right-12 text-primary-blue font-thin top-2/4 -translate-y-1/2 text-center'>
            &#8250;
          </div>
        </div>
        <div className='w-full my-7'>
          <a href='#'
             className='inline-block text-base font-extrabold text-orange-color py-2 px-7 border-2 border-white rounded-[10px] bg-transparent bg-nav-hover hover:bg-white transition duration-200 ease-in-out'
             type='button'>
            Більше тренувань
            <svg className='inline-block ml-4' width='29' height='8' viewBox='0 0 29 8' fill='none'
                 xmlns='http://www.w3.org/2000/svg'>
              <path id='Arrow 1'
                    d='M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4.5H28V3.5H0V4.5Z'
                    fill='#FF810D' />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
