import React from 'react'
import styles from './Card.module.scss'

interface CardProps {
  readonly children: React.ReactNode
  readonly header: string
}

export function Card({ header, children }: CardProps) {
  return (
    <div className={styles.commonCard}>
      <div className={styles.commonCardHeader}>{header}</div>
      <div className={styles.commonCardBody}>{children}</div>
    </div>
  )
}
