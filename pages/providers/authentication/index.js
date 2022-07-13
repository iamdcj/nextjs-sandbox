export const AuthenticationContext = React.createContext(null);

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const value = user;

  return (
    <AuthenticationContext.Provider value={user}>
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
