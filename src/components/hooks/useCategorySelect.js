import { useState } from 'react'
import PropTypes from 'prop-types'

const useCategorySelect = () => {

  const categories = [ 
    { id: 1, category: 'General'},
    { id: 2, category: 'Business'},
    { id: 3, category: 'Entertainment'},
    { id: 4, category: 'Health'},
    { id: 5, category: 'Sports'},
    { id: 6, category: 'Tecnology'}
  ]
  const [state, setState] = useState(categories[0].category)

  const getCategoryOptions = () => 
    categories.map( c => <option key={ c.id } value={ c.category }>{ c.category }</option> )

  const categorySelect = () => {
    return (
      <select 
        className='browser-default'
        value={ state }
        onChange={ e => setState(e.target.value) }>
        { getCategoryOptions() }
      </select>
    )
  }

  return [state, categorySelect, setState]
}

useCategorySelect.propTypes = {}

export { useCategorySelect }