import React from 'react';
import {Link} from 'react-router';

const Header = () => (
  <header className="Header row">
    <Link to="/signup" className="col-xs-12 col-md-2"><i className="fa fa-user-plus"></i> Signup</Link>
    <Link to="/login" className="col-xs-12 col-md-2"><i className="fa fa-lock"></i> Login</Link>
  </header>
);

export default Header;
