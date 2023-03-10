import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import TopNav from "../navbar/Navbar";
import { Jumbotron } from "react-bootstrap";
import logoMin from "../../images/bhlogo-min.png";

class Dashboard extends Component {
  state = {
    user: this.props.auth,
    searchData: [],
  };

  componentDidMount() {
    API.getSearchData(this.state.user.user.id)
      .then((res) => this.setUserState(res.data))
      .catch((err) => console.log(err));
  }

  setUserState = (data) => {
    this.setState({ searchData: data });
  };

  onSearchClick = (e) => {
    e.preventDefault();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="background">
        <TopNav />
        <Jumbotron>
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Cheers, {user.name.split(" ")[0]}!</h3>
              <img src={logoMin} className="logoMin" alt="logomin" />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <h5>
                Welcome to <b>Beer Explorer</b>, a MERN stack application for
                beer aficionados to discover, save and map routes to breweries
                all over the US.
                <br />
                <br />
              </h5>
              <h6>
                To get started click{" "}
                <Link
                  to="/beer"
                  className="text-link"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <span className="dashSearch">Search</span>
                </Link>
              </h6>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
