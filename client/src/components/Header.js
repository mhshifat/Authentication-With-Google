import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { currentUser } from "../store/reducers/actions/currentUser";
import { logoutUser } from "../store/reducers/actions/logoutUser";

class Header extends Component {
  componentDidMount = () => {
    axios.get("/auth/current").then(res => this.props.currentUser(res.data));
  };
  renderToTheScreen = () => {
    if (this.props.auth.isAuthenticated) {
      return (
        <li>
          <a href="" onClick={this.logoutHandler}>
            Logout
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <a href="/auth/google">Login With Google</a>
        </li>
      );
    }
  };
  logoutHandler = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <Link
              to={this.props.auth.isAuthenticated ? "/dashboard" : "/"}
              className="brand-logo"
            >
              Emaily
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderToTheScreen()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  {
    currentUser,
    logoutUser
  }
)(Header);
