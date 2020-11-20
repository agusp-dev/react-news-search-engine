import React from 'react'
import { useCategorySelect } from './hooks'
import styles from './Form.module.css'
import PropTypes from  'prop-types'

const Form = ({ searchCategory }) => {

  const [category, CategorySelect, setCategory] = useCategorySelect()

  const onHandleSubmit = e => {
    e.preventDefault()
    searchCategory(category)
  }

  return (
    <div className={ `${ styles.search } row` }>
      <div className='col s12 m8 offset-m2'>
        <form onSubmit={ onHandleSubmit }>
          <h2 className={ styles.heading }>Find news by category</h2>
          <CategorySelect />
          <div className='input-field col s12'>
            <input 
              type='submit'
              className={ `${styles.btn_block} btn amber darken-2` }
              value='Search'/>
          </div>
        </form>
      </div>
    </div>
  )
}

Form.propTypes = {
  searchCategory: PropTypes.func.isRequired
}

export { Form }