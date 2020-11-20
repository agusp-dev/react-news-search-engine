import axios from 'axios'

const URL = 'https://newsapi.org/v2/top-headlines'
const AR_CODE = 'ar'
const API_KEY = 'e9c6338adab94a1dbc444237225d5ce7'

export const getNewsApi = async category => {
  const url = `${URL}?country=${AR_CODE}&category=${category}&apiKey=${API_KEY}`
  const response = await axios.get(url) 
  return response
}