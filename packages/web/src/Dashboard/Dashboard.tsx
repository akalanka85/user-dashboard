import { useState, useEffect } from "react";
import { User } from "@app/types";
import { getUsers } from "@app/api";
import UserCard from "./UserCard/UserCard";
import styles from "./Dashboard.module.scss";


export default function Dashboard() {
  const [allUsers, setAllUsers] = useState<User[] | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<User[] | null>(null);

  useEffect(() => {
    getUsers().then((result: User[] | null) => {
      setAllUsers(result);
      setFilteredUsers(result);
    });
  }, []);

  return (
    <div className="App">
      <div  className={styles.dashboard}>

      </div>
      <div className={styles.dashboardBody}>
        {filteredUsers?.map((user) => (
          <UserCard user={user}></UserCard>
        ))}
      </div>
    </div>
  );
}
