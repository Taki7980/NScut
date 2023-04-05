/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";



function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const SetTypeAlert = (message, type) => {
    setAlert({
      msg: message,
      ty: type
    });
  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      SetTypeAlert("Dark Mode has enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      SetTypeAlert("Default light mode", "primary")
    }
  }
  return (
    <>
      <Router>
        <NavBar mode={Mode} togMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextArea heading="Enter you Sample text:" mode={Mode} />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
