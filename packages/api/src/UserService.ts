import axios from "axios";
import { User } from "@app/types";


export const getUsers = async () => {
  try {
    const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (error) {
    console.error("Error when fetching the users:", error);
    return null;
  }
};
