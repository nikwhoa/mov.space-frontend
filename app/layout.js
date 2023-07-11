import './globals.scss'
import './generated.css'

export const metadata = {
  title: 'MOV.space',
  description: 'Generated by create next app'
}

export default async function RootLayout({ children }) {

  return (<html lang='en'>
  <head>
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'true'} />
    <link
      href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap'
      rel='stylesheet'
    />
    <title>{metadata.title}</title>
  </head>
  <body className={'bg-black overflow-x-hidden'}>
  <main className='h-full'>
    {children}
  </main>
  </body>
  </html>)
}
