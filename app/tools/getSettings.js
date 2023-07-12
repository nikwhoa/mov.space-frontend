export default async function GetSettings() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_GET_SETTINGS}`,
    { next: { revalidate: 300 } }
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
