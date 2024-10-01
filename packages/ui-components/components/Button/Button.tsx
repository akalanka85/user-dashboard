import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  readonly children: React.ReactNode
  readonly icon?: React.ReactNode
  readonly onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      <div className={styles.wrapper}>
        <span>{children}</span>
        {!!icon && <span className={styles.icon}>{icon}</span>}
      </div>
    </button>
  )
}
