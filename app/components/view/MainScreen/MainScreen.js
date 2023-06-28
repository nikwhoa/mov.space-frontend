import './styles/main-screen.css'
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
      </div>
    </>
  )
}
