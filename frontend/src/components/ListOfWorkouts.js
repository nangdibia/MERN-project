import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteWorkout } from "../actions/workoutActions";

function ListOfWorkouts(props) {
  const { workouts, deleteWorkout } = props;
  return (
    <div className="workouts-container">
      {workouts && workouts.length > 0 ? (
        workouts.map((workout, index) => {
          return (
            <div key={index} className="workouts-inner">
              <Link to={`/${workout._id}`} className="workout-title">
                <h3>{workout.title}</h3>
              </Link>
              <p onClick={() => deleteWorkout(workout._id)}>
                {workout.createdAt}
              </p>
            </div>
          );
        })
      ) : (
        <p>No workouts</p>
      )}
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { deleteWorkout })(ListOfWorkouts);
