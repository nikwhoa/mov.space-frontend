import './styles/main-screen.scss'
import { PropTypes } from 'prop-types'
import Header from '@/app/components/view/Header/Header'

MainScreen.propTypes = {
  settings: PropTypes.object
}

export function MainScreen({ settings }) {
  console.log(settings.mainScreen)

  const generateBackground = (type, link) => {
    if (type === 'image') {
      return (
        <div className={'background-image'}>
          <img src={link} alt={'background'} />
        </div>
      )
    } else if (type === 'video') {
      return (
        <div className={'background-video'}>
          <video src={link} autoPlay loop muted />
        </div>
      )
    }
  }

  generateBackground(settings.mainScreen.type, settings.mainScreen.link)

  return (
    <>
      <div className='main-screen overflow-hidden h-screen w-full'>
        <Header settings={settings.appearance} />
      </div>
    </>
  )
}
