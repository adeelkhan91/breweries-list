import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Button, Form, Card } from "react-bootstrap";
import logo from "../../images/logo.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="wrapperContainer">
        <div className="container" id="loginContainer">
          <div className="row">
            <div className="col-sm-12">
              <Card className="loginCard">
                <Card.Header className="cardHeader">
                  <img src={logo} alt="logo" />
                </Card.Header>
                <Card.Body>
                  <Form
                    noValidate
                    onSubmit={this.onSubmit}
                    className="loginForm"
                  >
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        placeholder="Enter Email"
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                          invalid: errors.email || errors.emailnotfound,
                        })}
                      />
                      <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                      </span>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        placeholder="Password"
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                          invalid: errors.password || errors.passwordincorrect,
                        })}
                      />
                      <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                      </span>
                    </Form.Group>
                    <Button type="submit" className="btn loginButton">
                      Log In
                    </Button>
                  </Form>
                </Card.Body>
                <Card.Footer className="cardFooter">
                  <p className="noAccount">
                    Don't have an account?{" "}
                    <Link className="registerLink" to="/register">
                      Register
                    </Link>
                  </p>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
