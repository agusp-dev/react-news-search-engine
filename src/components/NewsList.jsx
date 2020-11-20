import React from 'react'
import PropTypes from 'prop-types'
import { NewsCard } from '.'

const NewsList = ({ articles }) =>  {
  return (
    <div>
      { articles.map( article => <NewsCard key={ article.title } article={ article }/> ) }
    </div>
  )
}

NewsList.propTypes = {
  articles: PropTypes.array.isRequired
}

export { NewsList }