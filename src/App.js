import React, { Fragment, useState, useEffect } from 'react'
import { Header, Form, NewsList } from './components'
import { getNewsApi } from './services'

function App() {

  const [category, searchCategory] = useState('') 
  const [news, setNews] = useState([])

  useEffect(() => {
    if (!category) return
    const getNewsApiData = async () => {
      const result = await getNewsApi()
      processApiResult(result)
    }
    getNewsApiData()
  }, [category])

  const processApiResult = result => {
    if (result.status !== 200) return alert('Error!!!')
    const { articles } = result.data
    setNews(articles)
  }

  return (
    <Fragment>
      <Header title='News Search Engine'/>
      <Form searchCategory={ searchCategory }/>
      {news && (
        <NewsList articles={ news }/>
      )}
    </Fragment>
  )
}

export default App;
