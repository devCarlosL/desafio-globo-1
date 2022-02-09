import { createContext, useContext, useState } from 'react';

const UserContext = createContext({});
const useUser= () => useContext(UserContext);

function UserProvider(props) {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{ user, setUser }} {...props} />;
}

export { UserProvider, useUser };
