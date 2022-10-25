import React, { Component } from "react";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { signupUser } from "../../../actions/userActions";

export class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
      confirmPassword: "",
    });
  }

  validate() {
    const { email, password, confirmPassword } = this.state;

    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    
    if (!email || !password || !confirmPassword) {
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
        error:
          " Caps, Lowercase, Numbers and Special Character Required",
      });
    } else if (password !== confirmPassword) {
      this.setState({
        ...this.state,
        error: "passwords must match",
      });
    } else {
      this.setState({
        ...this.state,
        error: "",
      });
      this.props.signupUser(email, password);
    }
  }
  render() {
    return (
      <div>
        <SignUp
          {...this.state}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { signupUser })(SignupContainer);
