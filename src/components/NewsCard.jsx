import React from 'react'
import PropTypes from 'prop-types'

const NewsCard = ({ article }) => {
  return (
    <div>{ article.title }</div>
  )
}

NewsCard.propTypes =  {
  article: PropTypes.object.isRequired  
}

export { NewsCard }