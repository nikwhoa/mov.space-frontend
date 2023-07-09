import image from '@/app/components/view/OurTrains/images/slide1.jpg'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <div className='container mx-auto px-4 py-2'>
        <div>
          <h2 className='font-extrabold text-4xl text-white'>
            Тренування
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 py-8 gap-7'>
          <Link className='train-item p-3' href={{
            pathname: '/trains/body-build',
            query: { title: 'Body build', slug: 'Body build' }
          }} style={{
            background: `url(${image.src})`,
            // backgroundImage: `url(${image.src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>

            <div className='hidden text-white text-2xl font-medium w-full'>Кіріл</div>
            <div className='hidden text-base text-white font-medium w-full my-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, numquam.
            </div>
            <div className='title'>
              Body build
            </div>
            <div className='bg-overlay'></div>
          </Link>
          <Link className='train-item p-3' href={{
            pathname: '/trains/test',
            a: { test: 'test 1' },
            query: { title: 'test', slug: 'test' }
          }}>
            <div className='hidden text-white text-2xl font-medium w-full'>Кіріл</div>
            <div className='hidden text-base text-white font-medium w-full my-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, numquam.
            </div>
            <div className='title'>
              Test
            </div>
            <div className='bg-overlay'></div>
          </Link>
          <a className='train-item p-3' href='#'>
            <div className='hidden text-white text-2xl font-medium w-full'>Кіріл</div>
            <div className='hidden text-base text-white font-medium w-full my-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, numquam.
            </div>
            <div className='title'>
              Body build
            </div>
            <div className='bg-overlay'></div>
          </a>
          <a className='train-item p-3' href='#'>
            <div className='hidden text-white text-2xl font-medium w-full'>Кіріл</div>
            <div className='hidden text-base text-white font-medium w-full my-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, numquam.
            </div>
            <div className='title'>
              Body build
            </div>
            <div className='bg-overlay'></div>
          </a>
          <a className='train-item p-3' href='#'>
            <div className='hidden text-white text-2xl font-medium w-full'>Кіріл</div>
            <div className='hidden text-base text-white font-medium w-full my-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, numquam.
            </div>
            <div className='title'>
              Body build
            </div>
            <div className='bg-overlay'></div>
          </a>
        </div>
      </div>

    </>
  )
}
