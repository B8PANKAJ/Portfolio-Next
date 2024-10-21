import React, { useEffect, useState } from "react";
import Projects from "./Pages/Porjects";
import HeroSection from "./Pages/HeroSection";
import Skills from "./Components/Skills";
import Navbar from "./Components/Navgation";
import Footer from "./Components/Footer";
import EducationJourney from "./Pages/EducationJourney";

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMovement = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };
    document.addEventListener("mousemove", handleMouseMovement);

    return () => {
      document.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);
  return (
    <>
      {" "}
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <EducationJourney />
      <Footer />
    </>
  );
};

export default App;
