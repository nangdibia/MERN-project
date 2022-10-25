import { fetchAllWorkouts } from "../actions/workoutActions";
import { connect } from "react-redux";
import ListOfWorkouts from "./ListOfWorkouts";
// import { LOGIN } from "../types";
import { loginUser } from "../actions/userActions";
import React, { Component } from "react";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchAllWorkouts();
    let user = JSON.parse(localStorage.getItem("user"));

    // logging in user after refresh

    if (user) {
      const { email, password } = user;
      return this.props.loginUser(email, password);
    }
  }
  render() {
    return (
      <div className="text-danger container-fluid">
        <div className="home-inner">
          <div className="title">
            <h2>Workouts</h2>

            <ListOfWorkouts
              workouts={this.props.workouts}
              fetchAllWorkouts={this.props.fetchAllWorkouts}
            />
          </div>

          <div className="home-body"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: [...state.workoutReducer.workouts],
    workouts: [...state.userReducer.users],
  };
};

export default connect(mapStateToProps, { fetchAllWorkouts, loginUser })(Home);
