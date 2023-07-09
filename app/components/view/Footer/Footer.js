import googleMapsImage from './images/google-maps 1.png'
import instagram from './images/instagram-footer.svg'
import youtube from './images/youtube-footer.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-white w-full'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 py-2 md:py-8'>
          <div>
            <div className='my-3 md:my-0'>
              <a href='/'>
                <svg width='104' className='hover:scale-105 transition duration-200 ease-in-out' height='22'
                     viewBox='0 0 104 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0.68 18V0.719999H3.608L9.32 12.192L15.032 0.719999H17.96V18H14.912V7.68L9.896 18H8.744L3.728 7.68V18H0.68ZM28.7444 18.36C27.0164 18.36 25.5244 17.984 24.2684 17.232C23.0204 16.48 22.0564 15.428 21.3764 14.076C20.7044 12.724 20.3684 11.152 20.3684 9.36C20.3684 7.568 20.7044 5.996 21.3764 4.644C22.0564 3.292 23.0204 2.24 24.2684 1.488C25.5244 0.736 27.0164 0.36 28.7444 0.36C30.4724 0.36 31.9604 0.736 33.2084 1.488C34.4644 2.24 35.4284 3.292 36.1004 4.644C36.7804 5.996 37.1204 7.568 37.1204 9.36C37.1204 11.152 36.7804 12.724 36.1004 14.076C35.4284 15.428 34.4644 16.48 33.2084 17.232C31.9604 17.984 30.4724 18.36 28.7444 18.36ZM28.7444 15.288C29.8404 15.304 30.7524 15.068 31.4804 14.58C32.2084 14.092 32.7524 13.4 33.1124 12.504C33.4804 11.608 33.6644 10.56 33.6644 9.36C33.6644 8.16 33.4804 7.12 33.1124 6.24C32.7524 5.36 32.2084 4.676 31.4804 4.188C30.7524 3.7 29.8404 3.448 28.7444 3.432C27.6484 3.416 26.7364 3.652 26.0084 4.14C25.2804 4.628 24.7324 5.32 24.3644 6.216C24.0044 7.112 23.8244 8.16 23.8244 9.36C23.8244 10.56 24.0044 11.6 24.3644 12.48C24.7324 13.36 25.2804 14.044 26.0084 14.532C26.7364 15.02 27.6484 15.272 28.7444 15.288ZM42.5094 18L37.2294 0.719999H40.5894L44.9094 14.928L49.3014 0.719999H52.6614L47.3814 18H42.5094ZM53.5674 18V14.736H56.8314V18H53.5674ZM63.4309 18.232C62.4015 18.232 61.5562 18.008 60.8949 17.56C60.2389 17.1067 59.8362 16.4747 59.6869 15.664L61.1429 15.432C61.2602 15.9013 61.5295 16.2747 61.9509 16.552C62.3722 16.824 62.8949 16.96 63.5189 16.96C64.1109 16.96 64.5749 16.8373 64.9109 16.592C65.2469 16.3467 65.4149 16.0133 65.4149 15.592C65.4149 15.3467 65.3589 15.1493 65.2469 15C65.1349 14.8453 64.9029 14.7013 64.5509 14.568C64.2042 14.4347 63.6789 14.2747 62.9749 14.088C62.2122 13.8853 61.6122 13.6747 61.1749 13.456C60.7375 13.2373 60.4255 12.984 60.2389 12.696C60.0522 12.408 59.9589 12.0587 59.9589 11.648C59.9589 11.1413 60.0975 10.6987 60.3749 10.32C60.6522 9.936 61.0389 9.64 61.5349 9.432C62.0362 9.224 62.6175 9.12 63.2789 9.12C63.9349 9.12 64.5215 9.224 65.0389 9.432C65.5562 9.64 65.9722 9.936 66.2869 10.32C66.6069 10.6987 66.7962 11.1413 66.8549 11.648L65.3989 11.912C65.3295 11.448 65.1055 11.0827 64.7269 10.816C64.3535 10.5493 63.8709 10.408 63.2789 10.392C62.7189 10.3707 62.2629 10.4693 61.9109 10.688C61.5642 10.9067 61.3909 11.2027 61.3909 11.576C61.3909 11.784 61.4549 11.9627 61.5829 12.112C61.7162 12.2613 61.9589 12.4027 62.3109 12.536C62.6682 12.6693 63.1855 12.8213 63.8629 12.992C64.6255 13.184 65.2255 13.3947 65.6629 13.624C66.1055 13.848 66.4202 14.1147 66.6069 14.424C66.7935 14.728 66.8869 15.104 66.8869 15.552C66.8869 16.384 66.5802 17.04 65.9669 17.52C65.3535 17.9947 64.5082 18.232 63.4309 18.232ZM72.6193 18.24C71.8086 18.24 71.1259 18.04 70.5713 17.64C70.0166 17.2347 69.5953 16.688 69.3073 16C69.0246 15.3067 68.8833 14.5307 68.8833 13.672C68.8833 12.8027 69.0246 12.024 69.3073 11.336C69.5953 10.648 70.0166 10.1067 70.5713 9.712C71.1313 9.31733 71.8166 9.12 72.6273 9.12C73.4273 9.12 74.1153 9.32 74.6913 9.72C75.2726 10.1147 75.7179 10.656 76.0273 11.344C76.3366 12.032 76.4913 12.808 76.4913 13.672C76.4913 14.536 76.3366 15.312 76.0273 16C75.7179 16.688 75.2726 17.2347 74.6913 17.64C74.1153 18.04 73.4246 18.24 72.6193 18.24ZM68.6433 21.84V9.36H69.9153V15.72H70.0753V21.84H68.6433ZM72.4433 16.936C73.0139 16.936 73.4859 16.792 73.8593 16.504C74.2326 16.216 74.5126 15.8267 74.6993 15.336C74.8859 14.84 74.9793 14.2853 74.9793 13.672C74.9793 13.064 74.8859 12.5147 74.6993 12.024C74.5179 11.5333 74.2353 11.144 73.8513 10.856C73.4726 10.568 72.9899 10.424 72.4033 10.424C71.8433 10.424 71.3793 10.5627 71.0113 10.84C70.6433 11.112 70.3686 11.4933 70.1873 11.984C70.0059 12.4693 69.9153 13.032 69.9153 13.672C69.9153 14.3013 70.0033 14.864 70.1793 15.36C70.3606 15.8507 70.6379 16.2373 71.0113 16.52C71.3846 16.7973 71.8619 16.936 72.4433 16.936ZM80.701 18.24C80.0557 18.24 79.5143 18.1227 79.077 17.888C78.645 17.648 78.317 17.3333 78.093 16.944C77.8743 16.5547 77.765 16.128 77.765 15.664C77.765 15.2107 77.8503 14.8187 78.021 14.488C78.197 14.152 78.4423 13.8747 78.757 13.656C79.0717 13.432 79.4477 13.256 79.885 13.128C80.2957 13.016 80.7543 12.92 81.261 12.84C81.773 12.7547 82.2903 12.6773 82.813 12.608C83.3357 12.5387 83.8237 12.472 84.277 12.408L83.765 12.704C83.781 11.936 83.6263 11.368 83.301 11C82.981 10.632 82.4263 10.448 81.637 10.448C81.1143 10.448 80.6557 10.568 80.261 10.808C79.8717 11.0427 79.597 11.4267 79.437 11.96L78.085 11.552C78.293 10.7947 78.6957 10.2 79.293 9.768C79.8903 9.336 80.677 9.12 81.653 9.12C82.437 9.12 83.109 9.26133 83.669 9.544C84.2343 9.82133 84.6397 10.2427 84.885 10.808C85.0077 11.0747 85.085 11.3653 85.117 11.68C85.149 11.9893 85.165 12.3147 85.165 12.656V18H83.901V15.928L84.197 16.12C83.8717 16.8187 83.4157 17.3467 82.829 17.704C82.2477 18.0613 81.5383 18.24 80.701 18.24ZM80.917 17.048C81.429 17.048 81.8717 16.9573 82.245 16.776C82.6237 16.5893 82.9277 16.3467 83.157 16.048C83.3863 15.744 83.5357 15.4133 83.605 15.056C83.685 14.7893 83.7277 14.4933 83.733 14.168C83.7437 13.8373 83.749 13.584 83.749 13.408L84.245 13.624C83.781 13.688 83.325 13.7493 82.877 13.808C82.429 13.8667 82.005 13.9307 81.605 14C81.205 14.064 80.845 14.1413 80.525 14.232C80.2903 14.3067 80.069 14.4027 79.861 14.52C79.6583 14.6373 79.493 14.7893 79.365 14.976C79.2423 15.1573 79.181 15.384 79.181 15.656C79.181 15.8907 79.2397 16.1147 79.357 16.328C79.4797 16.5413 79.6663 16.7147 79.917 16.848C80.173 16.9813 80.5063 17.048 80.917 17.048ZM90.885 18.24C90.0103 18.24 89.2663 18.0453 88.653 17.656C88.045 17.2613 87.581 16.72 87.261 16.032C86.941 15.344 86.7757 14.56 86.765 13.68C86.7757 12.7787 86.9437 11.9867 87.269 11.304C87.5997 10.616 88.0717 10.08 88.685 9.696C89.2983 9.312 90.037 9.12 90.901 9.12C91.813 9.12 92.597 9.344 93.253 9.792C93.9143 10.24 94.357 10.8533 94.581 11.632L93.173 12.056C92.9917 11.5547 92.6957 11.1653 92.285 10.888C91.8797 10.6107 91.413 10.472 90.885 10.472C90.293 10.472 89.805 10.6107 89.421 10.888C89.037 11.16 88.7517 11.5387 88.565 12.024C88.3783 12.504 88.2823 13.056 88.277 13.68C88.2877 14.64 88.509 15.416 88.941 16.008C89.3783 16.5947 90.0263 16.888 90.885 16.888C91.4503 16.888 91.9197 16.76 92.293 16.504C92.6663 16.2427 92.949 15.8667 93.141 15.376L94.581 15.752C94.2823 16.5573 93.8157 17.1733 93.181 17.6C92.5463 18.0267 91.781 18.24 90.885 18.24ZM99.7234 18.24C98.8754 18.24 98.134 18.0533 97.4994 17.68C96.87 17.3013 96.3794 16.776 96.0274 16.104C95.6754 15.4267 95.4994 14.6373 95.4994 13.736C95.4994 12.792 95.6727 11.976 96.0194 11.288C96.366 10.5947 96.8487 10.0613 97.4674 9.688C98.0914 9.30933 98.822 9.12 99.6594 9.12C100.529 9.12 101.267 9.32 101.875 9.72C102.489 10.12 102.947 10.6907 103.251 11.432C103.561 12.1733 103.694 13.056 103.651 14.08H102.211V13.568C102.195 12.5067 101.979 11.7147 101.563 11.192C101.147 10.664 100.529 10.4 99.7074 10.4C98.8274 10.4 98.158 10.6827 97.6994 11.248C97.2407 11.8133 97.0114 12.624 97.0114 13.68C97.0114 14.6987 97.2407 15.488 97.6994 16.048C98.158 16.608 98.8114 16.888 99.6594 16.888C100.23 16.888 100.726 16.7573 101.147 16.496C101.569 16.2347 101.899 15.8587 102.139 15.368L103.507 15.84C103.171 16.6027 102.665 17.1947 101.987 17.616C101.315 18.032 100.561 18.24 99.7234 18.24ZM96.5314 14.08V12.936H102.915V14.08H96.5314Z'
                    fill='#FF810D' />
                </svg>
              </a>
            </div>
            <div className='font-medium text-[12px] text-[#727272]'>
              Всі права @MOV.space
            </div>
            <div className='mt-8'>
              <a href='#' className='font-medium text-sm text-black'>Договір публічної оферти</a>
              <br />
              <a href='#' className='font-medium text-sm text-black'>Політика конфіденційності</a>
            </div>
          </div>
          <div className='my-3 md:my-0 flex flex-col h-auto items-start md:block'>
            <div className='font-bold text-xl text-black'>Ми на карті:</div>
            <div className='font-bold text-sm text-orange-color h-10 flex items-center my-2'>
              Локація 1
              <a href='#' className='ml-5'>
                <Image src={googleMapsImage} alt='Google Map Location' width='31'
                       className='hover:scale-105 transition duration-200 ease-in-out max-w-[31px]' />
              </a>
            </div>
            <div className='font-bold text-sm text-orange-color h-10 flex items-center my-2'>
              Локація 2
              <a href='#' className='ml-5'>
                <Image src={googleMapsImage} alt='Google Map Location' width='31'
                       className='hover:scale-105 transition duration-200 ease-in-out max-w-[31px]' />
              </a>
            </div>
          </div>
          <div className='flex flex-row my-2 md:my-0'>
            <div className='flex flex-col'>
              <div className='font-bold text-xl text-black'>
                Контакти:
              </div>
              <div>
                <a href='#' className='font-bold text-sm text-orange-color'>095 285 08 92</a>
              </div>
              <div className='text-[12px] text-[#727272] my-3'>Пн, Вт, Чт 19:20 <br />
                Сб 11:00
              </div>
            </div>
            <div className='mx-14 flex flex-row items-center justify-center'>
              <div className='mx-2'>
                <a href='#'>
                  <Image src={instagram} alt='Instagram' className='hover:scale-105 transition duration-200 ease-in-out' width='31' />
                </a>
              </div>
              <div className='mx-2'>
                <a href='#'>
                  <Image src={youtube} alt='Youtube' className='hover:scale-105 transition duration-200 ease-in-out' width='31' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}