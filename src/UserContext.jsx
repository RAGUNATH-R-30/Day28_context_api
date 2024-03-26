import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [total, settotal] = useState(0);
  const [totalquantity, settotalquantiy] = useState(0);
  return (
    <UserContext.Provider
      value={{ total, settotal, totalquantity, settotalquantiy }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
