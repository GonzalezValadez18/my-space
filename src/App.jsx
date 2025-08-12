import React from "react";
import AreaView from "./components/AreaView";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <AreaView>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AreaView>
      <Footer />
    </Router>
  );
}

export default App;
