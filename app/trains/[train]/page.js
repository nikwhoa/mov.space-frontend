/* eslint-disable react/prop-types */
import Link from 'next/link'
import Train from '@/app/trains/[train]/Train'

export default function Page(props) {
  return (
    <section className='container mx-auto px-4 py-2'>
      <div className='mb-5'>
        <h2 className='font-extrabold text-4xl text-white'><Link href='/trains' className='text-base mr-2'><span
          className='underline underline-offset-2'>Тренування</span> <span>&gt;</span></Link> {props.searchParams.title}
        </h2>
      </div>
      <Train />
    </section>
  )
}
