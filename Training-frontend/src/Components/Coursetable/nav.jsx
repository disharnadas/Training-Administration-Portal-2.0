import React, {Component} from 'react'
import { NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class Nav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


render() {
  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <NavLink className="navbar-brand mx-3" to="/">Training administration portal</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/dashboard">Schedules </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/dashboard/courses">Courses</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/dashboard/trainerdetails">Trainer details</NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink className="nav-link" exact to="/schedule">Create scehdule</NavLink>
      </li> */}   
          

    </ul>

  </div>
  <button
          onClick={this.onLogoutClick}
          className="btn btn-warning mt-0 mx-4 logout"
        >
          Logout
        </button>
</nav>

)
    }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Nav);

// export default Nav;