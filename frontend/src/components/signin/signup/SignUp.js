import React from "react";

const SignUp = (props) => {
  const { onChange, handleSubmit, email, password, confirmPassword, error } =
    props;
    console.log(error);
  return (
    <div>
      <div className="form-inner">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="">Enter your Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="">
            <label htmlFor="">Enter your password </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="">
            <label htmlFor="">Confirm your password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
            />
          </div>
          <span className="text-danger input-error">{error}</span>
          <button id="btn" type="submit">
            Sign Up
          </button>
          {/* <input type="submit" value="Sign Up" id="btn" /> */}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
