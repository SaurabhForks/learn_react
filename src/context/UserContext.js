import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Admin",
});

export default UserContext;
