import Button from "../../components/Button/Button";
import styles from "./Sort.module.scss";
import { ReactComponent as SortDown } from "../../assets/sortDown.svg";
import { ReactComponent as SortUp } from "../../assets/sortUp.svg";
import { useState } from "react";

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
  const [sortField, setSortField] = useState<string>("");

  function getSortIcon(field: string) {
    if (sortField === field) {
      return sortOrder === "asc" ? <SortUp /> : sortOrder === "desc" ? <SortDown /> : null;
    }
    return null;
  }

  function handleSort(field: string) {
    const newOrder = sortOrder === "asc" ? "desc" : sortOrder === "desc" ? "" : "asc";
    setSortOrder(newOrder);
    setSortField(field);
    onSort(field);
  }

  return (
    <div className={styles.sort}>
      <span className={styles.label}>Sort by</span>
      <Button
        onClick={() => handleSort("name")}
        icon={getSortIcon("name")}
      >
        Name
      </Button>
      <Button
        onClick={() => handleSort("email")}
        icon={getSortIcon("email")}
      >
        Email
      </Button>
    </div>
  );
}
