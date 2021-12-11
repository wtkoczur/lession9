import { createContext } from "react";
export const UserContext = createContext({
    email: "jan@kowalski.pl",
    isAdmin: false,
  });
