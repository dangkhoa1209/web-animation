import './App.css';
import React from 'react';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
