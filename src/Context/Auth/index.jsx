import React, { useState } from 'react';
import testUsers from './lib/users';
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const _validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      console.log('validUser', validUser);
      if (validUser) {
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('I am logged in!');
        Cookies.set("authToken", token);
        window.dispatchEvent(new Event("loginStatusChanged"));
      }
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  const login = (username, password) => {
    let user = testUsers[username];
    if (user && user.password === password) {
      try {
        _validateToken(user.token);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    } else {
      console.log("Invalid username or password");
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    Cookies.remove("authToken");
    window.dispatchEvent(new Event("loginStatusChanged"));
  };

  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
