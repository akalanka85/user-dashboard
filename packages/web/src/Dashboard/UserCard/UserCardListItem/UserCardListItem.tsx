import { ReactNode } from "react";
import styles from "./UserCardListItem.module.scss";

interface UserCardListItemProps {
  readonly title: string;
  readonly value: string;
  readonly icon: ReactNode;
}

export default function UserCardListItem({ title, value, icon }: UserCardListItemProps) {
  return (
    <li>
      <div className={styles.title}>
        <span className={styles.icon}>{icon}</span>
        <span>{title} </span>
      </div>
      <span className={styles.valueText}>{value}</span>
    </li>
  );
}
