

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/AIMLpage";
import GenAI from "./pages/GenAIPage";
import SaasAI from "./pages/SaaSPage";
import EdTech from "./pages/EdTechPage";




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

         {/* SaaS Service Page */}
        <Route
          path="/saas-product-engineering"
          element={<SaasAI />}
        />
          {/* SaaS Service Page */}
        <Route
          path="/EdTech"
          element={<EdTech />}
        />
   

      </Routes>
    </Router>
  );
};

export default App;
