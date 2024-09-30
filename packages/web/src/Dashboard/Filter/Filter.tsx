import styles from "./Filter.module.scss";

interface FilterProps {
  onFilter: (filter: string) => void;
}

export default function Filter({ onFilter }: FilterProps) {
  return (
      <input
        className={styles.filter}
        type="text"
        placeholder="Search..."
        onChange={(e) => onFilter(e.target.value)}
      ></input>
  );
}
