import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <h3>Dashboard</h3>
      <div>User Name</div>
    </div>
  );
}
