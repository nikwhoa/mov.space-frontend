import { MainScreen } from '@/app/components/view/MainScreen/MainScreen'
import OurTrains from '@/app/components/view/OurTrains/OurTrains'
import WeInNumbers from '@/app/components/view/WeInNumbers/WeInNumbers'
import OurTeam from '@/app/components/view/OurTeam/OurTeam'
import Footer from '@/app/components/view/Footer/Footer'
import GetSettings from '@/app/tools/getSettings'

export default async function Home() {
  const settings = await GetSettings();
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
