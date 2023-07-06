import { MainScreen } from '@/app/components/view/MainScreen/MainScreen'
import OurTrains from '@/app/components/view/OurTrains/OurTrains'
import WeInNumbers from '@/app/components/view/WeInNumbers/WeInNumbers'
import OurTeam from '@/app/components/view/OurTeam/OurTeam'
import Footer from '@/app/components/view/Footer/Footer'

async function getData() {
  // noinspection JSCheckFunctionSignatures
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_GET_SETTINGS}`,
    { next: { revalidate: 300 } }
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export default async function Home() {
  const settings = await getData()
  return (
    <>
      <MainScreen settings={settings[0]} />
      <OurTrains />
      <WeInNumbers />
      <OurTeam />
      <Footer />
    </>
  )
}
