import styles from './Card.module.scss'

interface CardProps {
  children: any;
  header: string;
}

export default function Card({header, children}: CardProps) {
  return (
    <div className={styles.commonCard}>
      <div className={styles.commonCardHeader}>{header}</div>
      <div className={styles.commonCardBody}>
        {children}
      </div>
    </div>
  )
}
