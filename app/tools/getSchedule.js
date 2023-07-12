export default async function GetSchedule() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_GET_SCHEDULE}`,
    { next: { revalidate: false }, method: 'GET' }
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
