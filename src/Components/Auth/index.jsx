import { AuthContext } from "../../Context/Auth";
import { useContext } from "react";
import { When } from "react-if";
import Cookies from "js-cookie";

const Auth = ({ capability, children }) => {
  const { can } = useContext(AuthContext);
  const isLoggedIn = !!Cookies.get("authToken");

  return (
    <>
      <When condition={isLoggedIn && can(capability)}>{children}</When>
    </>
  );
};

export default Auth;
