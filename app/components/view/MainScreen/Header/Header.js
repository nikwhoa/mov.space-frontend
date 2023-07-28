/* eslint-disable jsx-a11y/anchor-is-valid,react/prop-types */
'use client'
import { useEffect, useState } from 'react'
import './styles/header.scss'
import { PropTypes } from 'prop-types'
import Image from 'next/image'
import instagram from '@/app/components/view/MainScreen/Header/images/instagram-header.svg'
import youtube from '@/app/components/view/MainScreen/Header/images/youtube-header.svg'
import ukraineFlag from '@/app/components/view/MainScreen/Header/images/ukraine-language.svg'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Modal from '@/app/components/modal/Modal'
// import { headers } from 'next/headers'

export default function Header({
  settings,
  show
}) {
  const router = useRouter()

  const openModal = () => {
    router.push('/?show=true')
  }

  // console.log(settings, 'settings')

  const closeModal = () => {
    router.push('/')
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [menuItems, setMenuItems] = useState(settings.navigation)
  const showModalUrl = useSearchParams().get('show')

  const showModalIfQueryParamExists = () => {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      if (showModalUrl === 'true') {
        setShowModal(true)
        resolve('The query parameter exists and the modal has been shown.')
      } else {
        setShowModal(false)
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('The query parameter does not exist, therefore the modal was not shown.')
      }
    })
  }

  useEffect(() => {
    showModalIfQueryParamExists()
      .then(successMessage => {
        console.log(successMessage)
      })
      .catch(errorMessage => {
        console.error(errorMessage)
      })
  }, [showModalUrl, showModal])

  return (
    <>
      {showModal && (
        <Modal show={showModal} close={closeModal} />
      )}
      {/* {pathname === '/trains' ? <div className='logo-second-page'>LLLL</div> : null} */}
      <header
        className={`header-wrapper z-10 relative ${isMenuOpen ? 'header-open' : ''} w-full flex justify-center h-screen lg:h-36 lg:justify-end`}>
        <div className='absolute lg:hidden hamburger'>
          <input type='checkbox' checked={isMenuOpen} onChange={() => setIsMenuOpen(!isMenuOpen)} />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`header ${isMenuOpen ? 'open' : ''} bg-black bg-opacity-80 lg:bg-transparent flex flex-col gap-0 w-full lg:flex-row lg:gap-9 lg:w-11/12 xl:gap-16 2xl:gap-20`}>
          <div className={'logo h-full hidden lg:flex items-center'}>
            <Link
              onClick={() => !isMenuOpen ? null : setIsMenuOpen(!isMenuOpen)} href='/' title={'logotype'}>
              <Image width={123} height={60} src={settings.logo} alt={'MOV.space logo'} className={''} />
            </Link>
          </div>
          <nav className={'header-navigation h-full flex items-center my-4 lg:my-0'}>
            <ul className={'flex flex-col w-full lg:w-auto lg:flex-row'}>
              {/*  render menu items from array that looks like this 0
:
{title: 'Твій Кроссфіт', url: '#', isShow: true}
1
:
{title: 'Розклад', url: '/schedule', isShow: true}
2
:
{title: 'Команда', url: '/team', isShow: true}
3
:
{title: 'Тренування', url: '/trains', isShow: true}
4
:
{title: 'Контактна інформація', url: '/contacts', isShow: true}
5
:
{title: 'Соціальні мережі', url: '#', isShow: true}
6
:
{title: 'Закріплене меню', url: '#', isShow: false}
  important! if menu item tile is Соціальні мережі and Закріплене меню do not render it
  */}
              {menuItems.map((item, index) => {
                if (item.title === 'Соціальні мережі' || item.title === 'Закріплене меню' || item.title === 'Контактна інформація') {
                  return null
                } else if (item.isShow === true) {
                  return (
                      <li key={index} className={'nav-item'}>
                        <Link
                          onClick={() => !isMenuOpen ? null : setIsMenuOpen(!isMenuOpen)}
                          href={item.url}
                          className={'font-normal 2xl:text-base md:text-base hover:text-nav-hover'}
                          title={item.title}
                        >
                          {item.title}
                        </Link>
                      </li>
                  )
                }
              }
              )}
            </ul>
          </nav>
          <div
            className={'header-contacts h-auto lg:h-full w-full justify-center lg:justify-normal lg:w-40 2xl:w-64 flex flex-row gap-4 items-center'}>
            {menuItems.map((item, index) => {
              if (item.title === 'Контактна інформація' && item.isShow === true) {
                return (
                    <>
                      <div className={'text-white font-bold text-xs 2xl:text-base text-left flex flex-col'}>
                        Пн, Вт, Чт 19:20 Сб 11:00
                        <a
                          onClick={() => !isMenuOpen ? null : setIsMenuOpen(!isMenuOpen)}
                          href={'tel:+390952850892'}
                          className={'text-white font-bold text-left hover:font-semibold hover:text-nav-hover'}
                        >
                          095 285 08 92
                        </a>
                      </div>
                    </>
                )
              }
            }
            )}

            {menuItems.map((item, index) => {
              if (item.title === 'Соціальні мережі' && item.isShow === true) {
                return (
                    <>
                      <div className={'flex h-full justify-center items-center'}>
                        <a onClick={() => !isMenuOpen ? null : setIsMenuOpen(!isMenuOpen)} href='#'
                           className={'social-icons w-5 2xl:w-10 transition-all hover:scale-125'}>
                          <Image src={instagram} alt={'instagram'} className={'w-full'} />
                        </a>
                      </div>
                      <div className={'flex h-full justify-center items-center'}>
                        <a onClick={() => !isMenuOpen ? null : setIsMenuOpen(!isMenuOpen)} href='#'
                           className={'social-icons w-5 2xl:w-10 transition-all hover:scale-125'}>
                          <Image src={youtube} alt={'youtube'} className={'w-full'} />
                        </a>
                      </div>
                    </>
                )
              }
            }
            )}

          </div>
          <div
            className='header-buttons flex h-auto my-5 lg:my-0 lg:h-full flex-row justify-center gap-4 lg:gap-4 lg:justify-between items-center'>
            <a onClick={() => !isMenuOpen ? null : setIsMenuOpen(!isMenuOpen)} href='#'
               title='Вхід'
               className='pl-5 pr-5 pt-2 pb-2 bg-nav-hover hover:bg-white cursor-pointer rounded-lg font-bold text-base text-black'>
              Вхід
            </a>
            <button
              type='button'
              onClick={() => {
                // !isMenuOpen ? null : setIsMenuOpen(!isMenuOpen)
                if (!isMenuOpen) {
                  openModal()
                  return null
                } else {
                  setIsMenuOpen(!isMenuOpen)
                  openModal()
                }
              }}
              title='Записатись'
              className='pl-5 pr-5 pt-2 pb-2 bg-nav-hover hover:bg-white cursor-pointer rounded-lg font-bold text-base text-black'>
              Записатись
            </button>
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
    </>
  )
}

Header.propTypes = {
  settings: PropTypes.object
}
