import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const UserDataContext = createContext();



// eslint-disable-next-line react/prop-types
const UserData= ({children}) => {
  const [logged, setLogged]= useState(false)
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  

  return (
    <UserDataContext.Provider
      value={
        [logged, user, isAdmin, isUser, 
          setLogged, setUser, setIsAdmin, setIsUser]
        }
    >
     {children}
    </UserDataContext.Provider>
  );
};

export default UserData;
