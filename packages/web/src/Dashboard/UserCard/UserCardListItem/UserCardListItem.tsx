import styles from "./UserCardListItem.module.scss";

interface UserCardListItemProps {
  title: string;
  value: string;
  icon: any;
}

export default function UserCardListItem({
  title,
  value,
  icon,
}: UserCardListItemProps) {
  return (
    <li>
      <div className={styles.title}>
        <span className={styles.icon}>{icon}</span>
        <span>{title} </span>
      </div>
      <span>{value}</span>
    </li>
  );
}
