import { useState, useEffect } from "react";
import { User } from "@app/types";
import { getUsers } from "@app/api";
import UserCard from "./UserCard/UserCard";
import styles from "./Dashboard.module.scss";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import Sort from "./Sort/Sort";

export default function Dashboard() {
  const [allUsers, setAllUsers] = useState<User[] | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<User[] | null>(null);
  const [sortBy, setSortBy] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    getUsers().then((result: User[] | null) => {
      setAllUsers(result);
      setFilteredUsers(result);
    });
  }, []);

  const handleFilter = (filter: string) => {
    const filtered = allUsers?.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(filtered || []);
  };

  const handleSort = (field: string) => {
    const sorted = filteredUsers?.sort((a, b) => {
      const comparison =
        field === "name"
          ? a.name.localeCompare(b.name)
          : a.email.localeCompare(b.email);
      return sortOrder === "asc" ? comparison : -comparison;
    });
    setFilteredUsers(sorted || []);
  };

  return (
    <div className="App">
      <div className={styles.dashboard}>
        <Header></Header>

        <Filter onFilter={handleFilter}></Filter>
        <div className={styles.sortSection}>
          <Sort
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSort={handleSort}
            setSortOrder={setSortOrder}
          />
        </div>

        <div className={styles.usersList}>
          {filteredUsers?.map((user) => (
            <UserCard user={user}></UserCard>
          ))}
        </div>
      </div>
    </div>
  );
}
