import { useState, useEffect } from "react";
import { User } from "@app/types";
import { getUsers } from "@app/api";
import UserCard from "./UserCard/UserCard";

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
      <div className="d-flex flex-wrap">
        {filteredUsers?.map((user) => (
          <UserCard></UserCard>
        ))}
      </div>
    </div>
  );
}
