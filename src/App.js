import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Education from "./components/Education";
import Footer from "./components/Footer";
// import Careers from "./components/Careers";
import ExtensionMethods from "./components/ExtensionMethods";
import ExtensionForm from "./components/ExtensionForm";
import ColorForm from "./components/ColorForm";

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
        {/* <Route path="/careers" component={<Careers />} element={<Careers />} /> */}
        <Route 
          path="/extension-methods"
          component={<ExtensionMethods />}
          element={<ExtensionMethods />}
          />
        <Route 
          path="/extension-form"
          component={<ExtensionForm />}
          element={<ExtensionForm />}
          />
        <Route 
          path="color-form"
          component={<ColorForm />}
          element={<ColorForm />}
        />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
