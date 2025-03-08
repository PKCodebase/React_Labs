import React from 'react';
import { PropTypes } from 'prop-types'

const Header = (props) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <a className="navbar-brand" href="#">{props.mybrand}</a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              <a className="nav-link" href="">Home</a>
              </li>
              <li className="nav-item active">
              <a className="nav-link" href="">Leads</a>
              </li>
              <li className="nav-item active">
              <a className="nav-link" href="">Courses</a>
              </li>
              </ul>
            </div>
          </nav>
    );
};

Header.defaultProps = {
    mybrand: "My App"
};

Header.propTypes = {
    mybrand: PropTypes.string.isRequired
};

export default Header;