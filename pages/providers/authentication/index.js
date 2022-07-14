import { createContext, useEffect, useState, useContext } from "react";
import returnFirebaseApp from "../../clients/firebase";
import { getAuth } from "firebase/auth";

export const AuthenticationContext = createContext(null);

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState({
    status: "loading",
  });

  useEffect(() => {
    try {
      const auth = getAuth(returnFirebaseApp());

      auth.onAuthStateChanged(async (user) => {
        debugger;
        if (user) {
          setUser({
            status: "authenticated",
            ...user,
          });
        } else {
          setUser({
            status: "anonymous",
          });
        }
      });
    } catch (error) {
      console.error(error);
      setUser({
        status: "anonymous",
      });
    }
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  const auth = useContext(AuthenticationContext);

  if (!auth) {
    throw new Error("AuthProvider missing");
  }

  return auth;
};

export default AuthenticationProvider;