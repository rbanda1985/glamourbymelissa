import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" component={<Home />} element={<Home />} />
        <Route
          path="/services"
          component={<Services />}
          element={<Services />}
        />
        <Route
          path="/education"
          component={<Education />}
          element={<Education />}
        />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
