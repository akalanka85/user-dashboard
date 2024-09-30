import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  children: any
  icon: any
  onClick: () => void
}

export default function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      <div className={styles.wrapper}>
        <span>{children}</span>
        {!!icon && <span className={styles.icon}>{icon}</span>}
      </div>
    </button>
  )
}
