import useSWR from 'swr'
const fetcher = url => fetch(url).then(res => res.json())

const Test2 = () => {
  const { data } = useSWR('/api/test2', fetcher)

  if (!data) {
    return <div>Loading</div>
  }

  return (
    <div>
      <h1>Data received</h1>
      <div>FROM: randomuser API</div>
      <div>DATA: {data.name.first} {data.name.last}</div>
    </div>
  )
}

export default Test2
