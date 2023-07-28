import image from '@/app/team/images/slide.jpg'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <div className='container mx-auto px-4 py-2'>
        <div>
          <h2 className='font-extrabold text-4xl text-white'>
            Команда
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 py-8 gap-7'>
          <Link className='train-item p-3' href={{
            pathname: '/team/kiril',
            query: { title: 'Кіріл', slug: 'Body build' }
          }} style={{
            background: `url(${image.src})`,
            // backgroundImage: `url(${image.src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>

            <div className='hidden text-white text-2xl font-medium w-full'>Тренер</div>
            <div className='hidden text-base text-white font-medium w-full my-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, numquam.
            </div>
            <div className='title'>
              Кіріл Мовчан
            </div>
            <div className='bg-overlay'></div>
          </Link>
        </div>
      </div>

    </>
  )
}
