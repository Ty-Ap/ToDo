import { AuthContext } from "../../Context/Auth";
import { useContext, useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const AuthMethod = () => {
  const { login, logout } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("authToken"));
  const usernameInput = useRef();
  const passwordInput = useRef();

  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(!!Cookies.get("authToken"));
    };

    window.addEventListener("loginStatusChanged", updateLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", updateLoginStatus);
    };
  }, []);

  const user = isLoggedIn ? jwt_decode(Cookies.get("authToken")) : null;

  const handleAuthSubmit = () => {
    login(usernameInput.current.value, passwordInput.current.value);
    usernameInput.current.value = "";
    passwordInput.current.value = "";
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      handleAuthSubmit();
    }
  };

  return (
    <>
      {isLoggedIn && <span>Welcome, {user.username}! </span>}
      <form onSubmit={(e) => e.preventDefault()}>
        {!isLoggedIn && (
          <>
            <label>
              Username:
              <input name="username" ref={usernameInput} />
            </label>
            <label>
              Password:
              <input name="password" type="password" ref={passwordInput} />
            </label>
          </>
        )}
        <button type="button" onClick={handleButtonClick}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </form>
    </>
  );
};

export default AuthMethod;
