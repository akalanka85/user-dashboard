import React from 'react'
import styles from './Card.module.css'

export default function Card() {
  return (
    <div className={styles.cardHeader}>
      <div>{styles.userCard}</div>
      <div>
        <h5 className='card-title'>Primary card title</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  )
}
