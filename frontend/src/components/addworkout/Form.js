import React, { useState } from "react";
import { connect } from "react-redux";
import { createWorkout } from "../../actions/workoutActions";

const Form = (props) => {
  const { createWorkout } = props;
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));

    // let user = this.props.user;
    console.log(user);
    if (user) {
      createWorkout(title, load, reps, user);
    }

    setTitle("");
    setLoad("");
    setReps("");
  }

  return (
    <div>
      <div className="form-inner">
        <h1>Add Workouts</h1>
        <form>
          <div className="">
            <label htmlFor="">Enter the title</label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="">
            <label htmlFor="">Enter the load</label>
            <input
              type="number"
              name="load"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
            />
          </div>
          <div className="">
            <label htmlFor="">Enter the reps</label>
            <input
              type="number"
              name="reps"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
            />
          </div>
          <input
            type="submit"
            value="Add Workout"
            id="btn"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: [...state.userReducer.users],
  };
};

export default connect(mapStateToProps, { createWorkout })(Form);
