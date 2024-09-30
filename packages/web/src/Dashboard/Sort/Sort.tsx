import Button from "../../components/Button/Button";
import styles from "./Sort.module.scss";
import { ReactComponent as SortDown } from "../../assets/sortDown.svg";
import { ReactComponent as SortUp } from "../../assets/sortUp.svg";

interface SortProps {
  sortBy: string;
  sortOrder: string;
  onSort: (field: string) => void;
  setSortOrder: (order: string) => void;
}

export default function Sort({
  sortBy,
  sortOrder,
  onSort,
  setSortOrder,
}: SortProps) {
  return (
    <div className={styles.sort}>
      <Button
        onClick={() => {
          onSort("name");
          setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        }}
        icon={sortOrder === "asc" ? <SortDown /> : <SortUp />}
      >
        Name
      </Button>
      <Button
        onClick={() => {
          onSort("email");
          setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        }}
        icon={sortOrder === "asc" ? <SortDown /> : <SortUp />}
      >
        Email
      </Button>
    </div>
  );
}
