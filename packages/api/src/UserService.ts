import axios, { AxiosError } from "axios";
import { User } from "@app/types";
import { FetchUsersError } from "./FetchUsersError";
import { USERS_URL } from "./config";

export const getUsers = async (): Promise<User[]> => {
  try {
    const { data } = await axios.get<User[]>(USERS_URL);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new FetchUsersError("Error fetching users: " + axiosError.message);
  }
};
