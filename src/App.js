import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// react-router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase
import { initializeApp } from "firebase/app";
import "firebase/auth";

// components
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import firebaseConfig from "./config/firebaseConfig";

//initialize firebase
initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
