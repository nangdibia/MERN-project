import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/addworkout/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/signin/login/Login";
import SignUp from "./components/signin/signup/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<Form />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
