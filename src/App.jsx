import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SettingsForm from "./Context/SettingsForm/index";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todo from "./Components/Todo";
import AuthProvider from "./Context/Auth";
import AuthMethod from "./Components/UserMethods";
import Auth from "./Components/Auth";
import Cookies from "js-cookie";

export default class App extends React.Component {
  renderLoginForm = (login, logout) => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(e.target.username.value, e.target.password.value);
          e.target.reset();
        }}
      >
        <label>
          Username:
          <input name="username" />
        </label>
        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  };

  renderLogoutButton = (login, logout) => {
    return <button onClick={logout}>Logout</button>;
  };

  render() {
    const isLoggedIn = !!Cookies.get("authToken");

    return (
      <>
        <Router>
          <AuthProvider>
            <AuthMethod
              render={(login, logout) =>
                isLoggedIn
                  ? this.renderLogoutButton(login, logout)
                  : this.renderLoginForm(login, logout)
              }
            />
            <Auth capability="read">
              {" "}
              <p>I read</p>
            </Auth>
            <Auth capability="create">
              {" "}
              <p>I create</p>
            </Auth>
            <Auth capability="update">
              {" "}
              <p>I update</p>
            </Auth>
            <Auth capability="delete">
              {" "}
              <p> delete</p>
            </Auth>
            <Header />
            <Routes>
              <Route path="/" element={<Todo />} />
              <Route path="/settings" element={<SettingsForm />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </Router>
      </>
    );
  }
}
