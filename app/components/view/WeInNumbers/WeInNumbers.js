export default function WeInNumbers() {
  return (
    <section className='bg-white px-4 pb-7 md:pb-0'>
      <div className='container mx-auto'>
        <div className='pt-14 pb-8'>
          <h3 className='text-orange-color'>Ми в цифрах</h3>
        </div>
        <div className='grid grid-cols-3 gap-4 md:gap-0'>
          <div className='md:border-t border-black pt-3'>
            <div className='text-[10px] md:text-xl font-normal text-black'>тривалість тренування</div>
            <div className='text-3xl md:text-5xl font-extrabold'>60<span
              className='text-[10px] font-normal md:text-base'>хв</span></div>
            <div className='we-in-numbers-divider'></div>
          </div>
          <div className='md:border-t border-black pt-3'>
            <div className='text-[10px] md:text-xl font-normal text-black'>спалюється за тренування</div>
            <div className='text-3xl md:text-5xl font-extrabold'><span
              className='text-[10px] md:text-base font-normal'>≈</span>550<span
              className='text-[10px] font-normal'>ккал</span></div>
            <div className='we-in-numbers-divider'></div>
          </div>
          <div className='md:border-t border-black pt-3'>
            <div className='text-[10px] md:text-xl font-normal text-black'>людей в групі</div>
            <div className='text-3xl md:text-5xl font-extrabold'><span
              className='text-[10px] md:text-base font-normal'>до</span>6
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
