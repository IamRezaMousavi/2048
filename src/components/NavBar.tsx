import React from 'react';

import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar fixed-top transparent-bg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Fixed top</a>
      </div>
    </nav>
  );
}

export default NavBar;