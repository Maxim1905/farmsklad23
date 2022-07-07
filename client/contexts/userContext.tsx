import {createContext, useEffect, useState} from "react";

import Loader from "../components/common/Loader";
import {check} from "../http/userAPI";

type userData = {
  email: string;
  id: number;
  role: string;
};

export const UserContext = createContext(null);

export const UserProvider = ({children}: {children: any}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data: userData) => {
        setIsAuth(true);
        setUser(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <UserContext.Provider
      value={{
        isAuth,
        setIsAuth,
        setUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
