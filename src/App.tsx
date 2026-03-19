import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./AppContext";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Programs } from "./pages/Programs";
import { Admissions } from "./pages/Admissions";
import { Courses } from "./pages/Courses";
import { Basket } from "./pages/Basket";
import { About, Gallery, Contact } from "./pages/AdditionalPages";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
};

export default App;
