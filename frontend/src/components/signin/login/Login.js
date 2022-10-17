import React from "react";

const Login = () => {
  return (
    <div>
      <div className="form-inner">
        <h1>Sign Up</h1>
        <form>
          <div className="">
            <label htmlFor="">Enter your username</label>
            <input type="text" name="username" />
          </div>
          <div className="">
            <label htmlFor="">Enter your password </label>
            <input type="text" name="password" />
          </div>
        
          <input type="submit" value="Login" id="btn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
