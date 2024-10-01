import { useState, useEffect, useMemo } from "react";
import { User } from "@app/types";
import { FetchUsersError, getUsers } from "@app/api";
import UserCard from "./UserCard/UserCard";
import styles from "./Dashboard.module.scss";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import Sort from "./Sort/Sort";
import { ReactComponent as NotFoundIcon } from "../assets/icons/notFound.svg";
import { SORT_FIELDS, SORT_ORDERS } from "../consts/sort";

interface DashboardState {
  users: User[];
  sortBy: string;
  sortOrder: string;
  filterText: string;
  errorMsg: string;
  loading: boolean;
}

export default function Dashboard() {
  const [state, setState] = useState<DashboardState>({
    users: [],
    sortBy: SORT_FIELDS.NAME,
    sortOrder: SORT_ORDERS.ASC,
    filterText: "",
    errorMsg: "",
    loading: true,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getUsers();
        setState((prevState) => ({
          ...prevState,
          users: result,
          loading: false,
        }));
      } catch (error: any) {
        if (error instanceof FetchUsersError) {
          setState((prevState) => ({
            ...prevState,
            errorMsg: error.message,
            loading: false,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            errorMsg: "An unknown error occurred",
            loading: false,
          }));
        }
      }
    };

    fetchUsers();
  }, []);

  const handleFilter = (filter: string) => {
    setState((prevState) => ({ ...prevState, filterText: filter }));
  };

  const handleSort = (field: string) => {
    setState((prevState) => ({ ...prevState, sortBy: field }));
  };

  const filteredAndSortedUsers = useMemo(() => {
    if (!state.users) return [];

    const filtered = state.users.filter((user) =>
      user.name.toLowerCase().includes(state.filterText.toLowerCase())
    );

    if (!state.sortOrder) {
      return filtered;
    }
    return [...filtered].sort((a, b) => {
      const order =
        state.sortBy === SORT_FIELDS.NAME
          ? a.name.localeCompare(b.name)
          : a.email.localeCompare(b.email);
      return state.sortOrder === SORT_ORDERS.ASC ? order : -order;
    });
  }, [state.users, state.filterText, state.sortBy, state.sortOrder]);

  const renderContent = () => {
    if (state.loading) {
      return <h5>Loading users...</h5>;
    }

    if (state.errorMsg) {
      return <h5 className="text-danger">{state.errorMsg}</h5>;
    }

    if (filteredAndSortedUsers.length === 0) {
      return (
        <div className={styles.notFound}>
          <span className={styles.icon}>
            {" "}
            <NotFoundIcon />
          </span>
          <h5>No users found with name "{state.filterText}"</h5>
        </div>
      );
    }

    return (
      <div className={styles.usersList}>
        {filteredAndSortedUsers.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <div>
        <Header />
        <div className="container">
          <div className={styles.filterWrapper}>
            <Filter onFilter={handleFilter} />
            <div className={styles.sortSection}>
              <Sort
                sortBy={state.sortBy}
                sortOrder={state.sortOrder}
                onSort={handleSort}
                setSortOrder={(order) =>
                  setState((prevState) => ({ ...prevState, sortOrder: order }))
                }
              />
            </div>
          </div>
          <div className={styles.contentWrapper}>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
