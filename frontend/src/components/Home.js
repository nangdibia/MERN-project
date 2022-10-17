import {fetchAllWorkouts} from "../actions/workoutActions";
import { connect } from "react-redux";
import ListOfWorkouts from "./ListOfWorkouts";

import React, { Component } from "react";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchAllWorkouts();
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
  };
};

export default connect(mapStateToProps, { fetchAllWorkouts })(Home);
