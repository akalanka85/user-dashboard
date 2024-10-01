import { Button } from "@app/ui-components";
import { ReactComponent as SortDown } from "../../assets/icons/sortDown.svg";
import { ReactComponent as SortUp } from "../../assets/icons/sortUp.svg";
import { useCallback } from "react";
import { SORT_ORDERS } from "../../consts/sort";

import styles from "./Sort.module.scss";

interface SortProps {
  readonly sortBy: string;
  readonly sortOrder: string;
  readonly onSort: (field: string) => void;
  readonly setSortOrder: (order: string) => void;
}

export default function Sort({
  sortBy,
  sortOrder,
  onSort,
  setSortOrder,
}: SortProps) {
  const getSortIcon = useCallback(
    (field: string) => {
      if (sortBy === field) {
        if (sortOrder === SORT_ORDERS.ASC) {
          return <SortUp />;
        } else if (sortOrder === SORT_ORDERS.DESC) {
          return <SortDown />;
        }
      }
      return null;
    },
    [sortBy, sortOrder]
  );

  function handleSort(field: string) {
    let newOrder = SORT_ORDERS.ASC;

    if (sortOrder === SORT_ORDERS.ASC) {
      newOrder = SORT_ORDERS.DESC;
    } else if (sortOrder === SORT_ORDERS.DESC) {
      newOrder = SORT_ORDERS.NONE;
    }

    setSortOrder(newOrder);
    onSort(field);
  }

  return (
    <div className={styles.sort}>
      <span className={styles.label}>Sort by</span>
      <Button onClick={() => handleSort("name")} icon={getSortIcon("name")}>
        Name
      </Button>
      <Button onClick={() => handleSort("email")} icon={getSortIcon("email")}>
        Email
      </Button>
    </div>
  );
}
