import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>TODO</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
