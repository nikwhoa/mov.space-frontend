import { MainScreen } from '@/app/components/view/MainScreen/MainScreen'
import OurTrains from '@/app/components/view/OurTrains/OurTrains'
import WeInNumbers from '@/app/components/view/WeInNumbers/WeInNumbers'
import OurTeam from '@/app/components/view/OurTeam/OurTeam'
import Footer from '@/app/components/view/Footer/Footer'
import GetSettings from '@/app/tools/getSettings'

export default async function Home() {
  const settings = await GetSettings()
  // let show = false
  // const headersList = headers()
  // // const { req } = NextResponse.nextContext;
  // // const currentUrl = req.url;
  // const domain = headersList.get('host') || ''
  // const fullUrl = headersList.get('referer') || ''
  //
  // console.log(fullUrl, 'full url')
  //
  // if (fullUrl.includes('show=true')) {
  //   show = true
  // }
  //
  // console.log(show, 'show')

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
