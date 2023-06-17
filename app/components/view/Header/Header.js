import './styles/header.scss'
import { PropTypes } from 'prop-types'
import Image from 'next/image'
import logo from '@/app/components/view/Header/images/MOV.space.svg'
import instagram from '@/app/components/view/Header/images/instagram-header.svg'
import youtube from '@/app/components/view/Header/images/youtube-header.svg'
import ukraineFlag from '@/app/components/view/Header/images/ukraine-language.svg'
import Link from 'next/link'

export default function Header({ settings }) {
  // console.log(settings);
  return (
    <header className={'header-wrapper w-full flex justify-end h-36'}>
      <div className={'header xl:w-11/12 flex 2xl:gap-20 xl:gap-16 md:gap-9'}>
        <div className={'logo h-full flex items-center'}>
          <Link href={'/'} title={'logotype'}>
            <Image width={123} height={60} src={settings.logo} alt={'MOV.space logo'} className={''} />
          </Link>
        </div>
        <nav className={'header-navigation h-full flex items-center'}>
          <ul className={'flex flex-col lg:flex-row'}>
            <li className={'nav-item'}>
              <Link
                href={'#'}
                className={'font-normal 2xl:text-2xl md:text-base hover:text-nav-hover'}
                title={'Твій Кроссфіт'}
              >
                {settings.text}
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link
                href={'#'}
                className={'font-normal 2xl:text-2xl md:text-base hover:text-nav-hover'}
                title={'Тренування'}
              >
                Тренування
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link
                href={'#'}
                className={'font-normal 2xl:text-2xl md:text-base hover:text-nav-hover'}
                title={'Команда'}
              >
                Команда
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link
                href={'#'}
                className={'font-normal 2xl:text-2xl md:text-base hover:text-nav-hover'}
                title={'Розклад'}
              >
                Розклад
              </Link>
            </li>
          </ul>
        </nav>
        <div className={'header-contacts h-full w-40 2xl:w-64 flex flex-row gap-4 items-center'}>
          <div className={'text-white font-bold text-xs 2xl:text-xl text-left flex flex-col'}>
            Пн, Вт, Чт 19:20 Сб 11:00
            <a
              href={'tel:+390952850892'}
              className={'text-white font-bold text-left hover:font-semibold hover:text-nav-hover'}
            >
              095 285 08 92
            </a>
          </div>
          <div className={'flex h-full justify-center items-center'}>
            <a href={'#'} className={'social-icons w-5 2xl:w-10 transition-all hover:scale-125'}>
              <Image src={instagram} alt={'instagram'} className={'w-full'} />
            </a>
          </div>
          <div className={'flex h-full justify-center items-center'}>
            <a href={'#'} className={'social-icons w-5 2xl:w-10 transition-all hover:scale-125'}>
              <Image src={youtube} alt={'youtube'} className={'w-full'} />
            </a>
          </div>
        </div>
        <div className='header-buttons flex h-full flex-row gap-4 justify-between items-center'>
          <a
            className={
              'pl-5 pr-5 pt-2 pb-2 bg-nav-hover hover:bg-white cursor-pointer rounded-lg font-bold text-base text-black'
            }
          >
            Вхід
          </a>
          <a
            className={
              'pl-5 pr-5 pt-2 pb-2 bg-nav-hover hover:bg-white cursor-pointer rounded-lg font-bold text-base text-black'
            }
          >
            Записатись
          </a>
        </div>
        <div className='header-language-selector h-full flex items-center'>
          <div className='language-selector-wrapper w-16 h-10 bg-white rounded-t-lg rounded-r-none rounded-b-lg'>
            <div className='language-selector flex flex-row gap-2 items-center'>
              <div className='language-selector-item flex flex-row gap-2 items-center'>
                <div className='language-selector-item-flag'>
                  <Image src={ukraineFlag} alt={'ukraine flag'} className={'w-full'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  settings: PropTypes.object
}
