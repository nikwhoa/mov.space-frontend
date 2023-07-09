import Image from 'next/image'
import image from '@/app/components/view/OurTrains/images/slide1.jpg'

export default function Train() {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='text-white text-base w-full md:w-1/2 pr-8'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex consequatur laudantium adipisci saepe obcaecati
          itaque. Beatae, at mollitia! Excepturi rerum reprehenderit accusantium animi temporibus, expedita quia
          officiis at. Atque, obcaecati. Itaque, a saepe? Quisquam iusto hic corrupti ipsum a rerum dolore quibusdam
          minima, beatae necessitatibus maiores reiciendis quas ratione at optio? Quas quis repellendus, voluptatum,
          nihil minima aut, atque assumenda recusandae labore laboriosam doloribus laborum dolorem sed autem! Tempora
          nam sunt dolorum atque ipsam quod repellat perferendis illum ex porro veniam maiores deleniti, error hic. Rem
          optio deleniti dignissimos qui corrupti impedit accusamus quam, consequatur, magni esse facere eum possimus.
        </div>
        <div className='w-full md:w-1/2 py-5 md:py-0'>
          <Image src={image} alt='train' className='w-full' />
        </div>
      </div>
      <div className='w-full my-10'>
        <a href='#'
           className='inline-block text-base font-extrabold text-orange-color py-2 px-7 border-2 border-white rounded-[10px] bg-transparent bg-nav-hover hover:bg-white transition duration-200 ease-in-out'
           type='button'>
          Записатись
          <svg className='inline-block ml-4' width='29' height='8' viewBox='0 0 29 8' fill='none'
               xmlns='http://www.w3.org/2000/svg'>
            <path id='Arrow 1'
                  d='M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4.5H28V3.5H0V4.5Z'
                  fill='#FF810D' />
          </svg>
        </a>
      </div>
    </>
  )
}
