import bg from './images/bg.jpg'

export default function OurTeam() {
  return (
    <section className='bg-dark pb-12'>
      <div className='pb-28' style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto'
      }}>
        <div className='container mx-auto px-4'>
          <div className='pt-14 pb-8'>
            <h3 className='text-orange-color'>Наша команда</h3>
          </div>
          <div className='text-xl font-medium text-white w-11/12 md:w-1/4'>
            Завдання тренера – допомогти тобі досягти результату. Змусити його досягти, раз ти прийшов. Від тренера
            залежить дуже багато. І ми пишаємось кожним нашим.
          </div>
          <div className='w-full mt-14'>
            <a href='#'
               className='inline-block text-base font-extrabold text-orange-color py-2 px-7 border-2 border-white rounded-[10px] bg-transparent bg-nav-hover hover:bg-white transition duration-200 ease-in-out'
               type='button'>
              Всі тренери
              <svg className='inline-block ml-4' width='29' height='8' viewBox='0 0 29 8' fill='none'
                   xmlns='http://www.w3.org/2000/svg'>
                <path id='Arrow 1'
                      d='M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4.5H28V3.5H0V4.5Z'
                      fill='#FF810D' />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='mx-auto container px-4'>
        <div className='md:flex md:flex-row md:justify-between py-5'>
          <div className='text-orange-color text-2xl font-bold mt-5'>Обирай тренування за розкладом онлайн 🔥</div>
          <div className='w-full md:w-auto mt-5'>
            <a href='#'
               className='inline-block w-full md:w-auto text-base font-extrabold text-orange-color py-2 px-7 border-2 border-white rounded-[10px] bg-transparent bg-nav-hover hover:bg-white transition duration-200 ease-in-out'
               type='button'>
              Розклад тренувань
              <svg className='inline-block ml-4' width='29' height='8' viewBox='0 0 29 8' fill='none'
                   xmlns='http://www.w3.org/2000/svg'>
                <path id='Arrow 1'
                      d='M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4.5H28V3.5H0V4.5Z'
                      fill='#FF810D' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
