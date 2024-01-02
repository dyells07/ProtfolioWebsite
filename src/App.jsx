

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Footer, Navbar,AudioManager } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const NotFound = () => <Navigate to="/ThreeJSProtfolioWebsite" replace />;

const App = () => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [statusCode, setStatusCode] = useState(null);

  useEffect(() => {
    const handleStatusChange = (event) => {
      if (event.persisted) {
        setStatusCode(event.detail.statusCode);
      }
    };

    window.addEventListener("httpError", handleStatusChange);

    return () => {
      window.removeEventListener("httpError", handleStatusChange);
    };
  }, []);

  return (
    <main className='bg-slate-300/20'>
      <AudioManager isPlaying={isPlayingMusic} />
      <Router>
        <Navbar />
        <Routes>
        <Route
  path='/ThreeJSProtfolioWebsite'
  element={<Home setIsPlayingMusic={setIsPlayingMusic} />}
/>

          <Route path='/ThreeJSProtfolioWebsite/about' element={<About />} />
          <Route path='/ThreeJSProtfolioWebsite/projects' element={<Projects />} />
          <Route path='/ThreeJSProtfolioWebsite/contact' element={<Contact />} />
          {statusCode === 404 && <Route path='/*' element={<NotFound />} />}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
