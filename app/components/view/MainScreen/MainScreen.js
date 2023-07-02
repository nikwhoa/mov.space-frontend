import './styles/main-screen.css'
import { PropTypes } from 'prop-types'
import Header from '@/app/components/view/MainScreen/Header/Header'

MainScreen.propTypes = {
  settings: PropTypes.object
}

export function MainScreen({ settings }) {
  console.log(settings.mainScreen)

  const generateBackground = (type, link) => {
    if (type === 'image') {
      return (
        <>
          <img className={'background-image'} src={link} alt={'background'} />
        </>
      )
    } else if (type === 'video') {
      return (
        <div className={'background-video'}>
          <video src={link} autoPlay loop muted />
        </div>
      )
    }
  }

  return (
    <>
      <div className='main-screen overflow-hidden relative h-screen w-full'>
        {generateBackground(settings.mainScreen.appearance.background.type, settings.mainScreen.appearance.background.urlToMedia)}
        <Header settings={settings.appearance} />
        <section
          className='w-full h-screen lg:h-auto lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 m-auto flex flex-col justify-center items-center'>
          <div className='my-4'>
            <h2 className='text-orange-color text-center text-4xl lg:text-8xl font-medium px-7'>Welcome to <br />
              <b>MOV.space</b>!</h2>
          </div>
          <div className='my-4 text-white text-2xl font-medium'>
            Build your body
          </div>
          <div className='mt-12'>
            <a href='#' type='button'
               className='py-1.5 px-6 rounded-[10px] text-black text-base font-medium bg-nav-hover hover:bg-white hover:scale-110 transition duration-200 ease-in-out'>
              Записатись
            </a>
          </div>
          <div className='mt-14 down-arrow'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#' className='w-screen flex justify-center h-auto'>
              <svg width='16' height='73' viewBox='0 0 16 73' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path id='Arrow 2'
                      d='M7.29289 72.7071C7.68342 73.0976 8.31658 73.0976 8.70711 72.7071L15.0711 66.3431C15.4616 65.9526 15.4616 65.3195 15.0711 64.9289C14.6805 64.5384 14.0474 64.5384 13.6569 64.9289L8 70.5858L2.34315 64.9289C1.95262 64.5384 1.31946 64.5384 0.928932 64.9289C0.538408 65.3195 0.538408 65.9526 0.928932 66.3431L7.29289 72.7071ZM7 0L7 72H9L9 0L7 0Z'
                      fill='white' />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
