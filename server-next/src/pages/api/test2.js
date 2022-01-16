import axios from 'axios'

export const handler = async (req, res) => {
  const response = await axios.get('https://randomuser.me/api/?results=1')
  const { data } = response
  const rsl = data ? data.results[0] : null
  res.status(200).json(rsl)
}

export default handler
