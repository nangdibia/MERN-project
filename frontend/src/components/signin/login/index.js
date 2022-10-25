import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/userActions";
import Login from "./Login";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  onChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validate();
    this.setState({
      email: "",
      passsword: "",
    });
  }

  validate() {
    const { email, password } = this.state;

    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    if (!email || !password) {
      this.setState({
        ...this.state,
        error: "All Fields Are Required",
      });
    } else if (!email.match(regEmail)) {
      this.setState({
        ...this.state,
        error: "Enter Valid Email",
      });
    } else if (!password.match(regPass)) {
      console.log(password.match(regPass));
      this.setState({
        ...this.state,
        error: "Invalid Password",
      });
    } else {
      this.setState({
        email: "",
        password: "",
        error: "",
      });
      let user = JSON.parse(localStorage.getItem("user"));

      this.props.loginUser(email, password, this.setState, user);
    }
  }
  render() {
    return (
      <div>
        <Login
          {...this.state}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { loginUser })(LoginContainer);
