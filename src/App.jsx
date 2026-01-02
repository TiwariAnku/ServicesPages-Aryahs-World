

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/AIMLpage";
import GenAI from "./pages/GenAIPage";




const App = () => {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

      
        <Route
          path="/genai-automation-services"
          element={<GenAI />}
        />

      </Routes>
    </Router>
  );
};

export default App;
