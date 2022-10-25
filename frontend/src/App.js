import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/addworkout/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginContainer from "./components/signin/login";
import SignupContainer from "./components/signin/signup";
import SingleWorkout from "./components/SingleWorkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<Form />} />
            <Route path="/:id" element={<SingleWorkout />} />
            <Route path="/signup" element={<SignupContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
