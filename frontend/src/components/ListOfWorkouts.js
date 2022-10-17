import React from "react";

function ListOfWorkouts(props) {
  const { workouts } = props;
  return (
    <div className="workouts-container">
        
      {workouts && workouts.length > 0 ? (
        workouts.map((workout, index) => {
          return (
            <div key={index} className="workouts-inner">
              <h3>{workout.title}</h3>
              <p>{workout.createdAt}</p>
            </div>
          );
        })
      ) : (
        <p>No workouts</p>
      )}
    </div>
  );
}

export default ListOfWorkouts;
