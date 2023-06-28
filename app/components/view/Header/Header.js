/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'
import { useState } from 'react'
import './styles/header.scss'
import { PropTypes } from 'prop-types'
import Image from 'next/image'
import logo from '@/app/components/view/Header/images/MOV.space.svg'
import instagram from '@/app/components/view/Header/images/instagram-header.svg'
import youtube from '@/app/components/view/Header/images/youtube-header.svg'
import ukraineFlag from '@/app/components/view/Header/images/ukraine-language.svg'
import Link from 'next/link'

export default function Header({ settings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // console.log(settings);
  return (
    <header
      className={'header-wrapper lg:bg-transparent w-full flex justify-center h-screen lg:h-36 lg:justify-end'}>
      <div className='absolute lg:hidden hamburger'>
        <input type='checkbox' onChange={() => setIsMenuOpen(!isMenuOpen)} />
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`header ${isMenuOpen ? 'open' : ''} bg-black bg-opacity-80 flex flex-col gap-0 w-full lg:flex-row lg:gap-9 lg:w-11/12 xl:gap-16 2xl:gap-20`}>
        <div className={'logo h-full hidden lg:flex items-center'}>
          <Link href={'/'} title={'logotype'}>
            <Image width={123} height={60} src={settings.logo} alt={'MOV.space logo'} className={''} />
          </Link>
        </div>
        <nav className={'header-navigation h-full flex items-center my-4 lg:my-0'}>
          <ul className={'flex flex-col w-full lg:w-auto lg:flex-row'}>
            <li className={'nav-item'}>
              <Link
                href={'#'}
                className={'font-normal 2xl:text-base md:text-base hover:text-nav-hover'}
                title={'Твій Кроссфіт'}
              >
                {settings.text}
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link
                href={'#'}
                className={'font-normal 2xl:text-base md:text-base hover:text-nav-hover'}
                title={'Тренування'}
              >
                Тренування
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link
                href={'#'}
                className={'font-normal 2xl:text-base md:text-base hover:text-nav-hover'}
                title={'Команда'}
              >
                Команда
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link
                href={'#'}
                className={'font-normal 2xl:text-base md:text-base hover:text-nav-hover'}
                title={'Розклад'}
              >
                Розклад
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={'header-contacts h-auto lg:h-full w-full justify-center lg:justify-normal lg:w-40 2xl:w-64 flex flex-row gap-4 items-center'}>
          <div className={'text-white font-bold text-xs 2xl:text-base text-left flex flex-col'}>
            Пн, Вт, Чт 19:20 Сб 11:00
            <a
              href={'tel:+390952850892'}
              className={'text-white font-bold text-left hover:font-semibold hover:text-nav-hover'}
            >
              095 285 08 92
            </a>
          </div>
          <div className={'flex h-full justify-center items-center'}>
            <a href='#' className={'social-icons w-5 2xl:w-10 transition-all hover:scale-125'}>
              <Image src={instagram} alt={'instagram'} className={'w-full'} />
            </a>
          </div>
          <div className={'flex h-full justify-center items-center'}>
            <a href='#' className={'social-icons w-5 2xl:w-10 transition-all hover:scale-125'}>
              <Image src={youtube} alt={'youtube'} className={'w-full'} />
            </a>
          </div>
        </div>
        <div
          className='header-buttons flex h-auto my-5 lg:my-0 lg:h-full flex-row justify-center gap-4 lg:gap-4 lg:justify-between items-center'>
          <a href='#'
             title='Вхід'
             className='pl-5 pr-5 pt-2 pb-2 bg-nav-hover hover:bg-white cursor-pointer rounded-lg font-bold text-base text-black'>
            Вхід
          </a>
          <a
            href='#'
            title='Записатись'
            className='pl-5 pr-5 pt-2 pb-2 bg-nav-hover hover:bg-white cursor-pointer rounded-lg font-bold text-base text-black'>
            Записатись
          </a>
        </div>
        <div className='header-language-selector h-full flex justify-center lg:justify-normal items-center'>
          <div className='language-selector-wrapper w-16 h-10 bg-white rounded-t-lg  rounded-b-lg'>
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
