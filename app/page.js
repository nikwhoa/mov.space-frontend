import Header from '@/app/components/view/Header/Header'

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_GET_SETTINGS}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
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
      <Header settings={settings[0].appearance} />
      <h1
        style={
          {
            // color: data.map((item) => item.appearance.colors.accentColor)
          }
        }>
        Home
      </h1>
    </>
  )
}
