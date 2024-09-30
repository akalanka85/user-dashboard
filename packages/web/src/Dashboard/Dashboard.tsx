import { useState, useEffect } from "react";
import { User } from "@app/types";
import { getUsers } from "@app/api";
import UserCard from "./UserCard/UserCard";
import styles from "./Dashboard.module.scss";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import Sort from "./Sort/Sort";

export default function Dashboard() {
  const [allUsers, setAllUsers] = useState<User[] | null>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[] | null>([]);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [filterText, setFilterText] = useState<string>("");

  useEffect(() => {
    getUsers().then((result: User[] | null) => {
      setAllUsers(result);
      setFilteredUsers(result);
    });
  }, []);

  const handleFilter = (filter: string) => {
    setFilterText(filter);
    setFilteredUsers(filterUsers(filter) || []);
  };

  const handleSort = (field: string) => {
    const filtered = filterUsers(filterText);
    let sorted = filtered;
    if (sortOrder !== "desc") {
      sorted = filtered?.sort((a, b) => {
        const order =
          field === "name"
            ? a.name.localeCompare(b.name)
            : a.email.localeCompare(b.email);
        return sortOrder === "asc" ? order : -order;
      });
    }
    setFilteredUsers(sorted || []);
  };

  const filterUsers = (filter: string) => {
    return allUsers?.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
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
            <UserCard user={user} key={user.id}></UserCard>
          ))}
        </div>
      </div>
    </div>
  );
}