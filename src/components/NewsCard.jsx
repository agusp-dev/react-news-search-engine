import React from 'react'
import PropTypes from 'prop-types'

const NewsCard = ({ article }) => {
  const { author, title, description, url, urlToImage, source } = article
  return (
    <div className='col s12 m6 l4'>
      <div className='card'>
        <div className='card-image'>
          <img src={ urlToImage } alt={ author }/>
          {source.name && (
            <span className='card-title'>{ source.name }</span>
          )}
        </div>
        <div className='card-content'>
          <h5>{ title }</h5>
          <p>{ description }</p>
        </div>
        <div className='card-action'>
          <a
            href={ url }
            target='_blank'
            rel='noopener noreferrer'
            className='waves-effect waves-light btn'
            >View complete news</a>
        </div>
      </div>
    </div>
  )
}

NewsCard.propTypes =  {
  article: PropTypes.object.isRequired  
}

export { NewsCard }