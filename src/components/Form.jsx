import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <div className={ `${ styles.search } row` }>
      <div className='col s12 m8 offset-m2'>
        <h2 className={ styles.heading }>Find news by category</h2>
        <div className='input-field col s12'>
          <input 
            type='submit'
            className={ `${styles.btn_block} btn amber darken-2` }
            value='Search'/>
        </div>
      </div>
    </div>
  )
}

export { Form }