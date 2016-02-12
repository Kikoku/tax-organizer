import React from 'react';
import {Link} from 'react-router';

const Header = () => (
  <header className="Header">
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
  </header>
);

export default Header;
