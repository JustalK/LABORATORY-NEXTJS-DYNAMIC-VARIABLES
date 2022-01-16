import axios from 'axios'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export const handler = async (req, res) => {
  console.log('API_URL :', serverRuntimeConfig.API_URL)
  const response = await axios.get(`http://${serverRuntimeConfig.API_URL}/`)
  const { data } = response
  res.status(200).json(data)
}

export default handler
