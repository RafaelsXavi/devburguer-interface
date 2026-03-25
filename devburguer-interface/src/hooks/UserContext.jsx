import {
  useContext,
  useState,
  useEffect,
  createContext,
  children,
} from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserinfo] = useState({});

  const putUserData = (userInfo) => {
    setUserinfo(userInfo);
    localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserinfo({});
    localStorage.removeItem('devburger:userData');

  };


useEffect(()=>{
  const userInfoLocalStorage = localStorage.getItem('devburger:userData')
      if (userInfoLocalStorage){
      setUserinfo(JSON.parse(userInfoLocalStorage))
    }
}, []);


  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be a valid context');
  }
  return context;
};
