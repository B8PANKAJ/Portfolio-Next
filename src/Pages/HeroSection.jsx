// HeroSection.jsx
import React, { useState, useEffect } from "react";
import profile from "../Assets/Images/profile.jpg";
import {
  RiLightbulbLine,
  RiTwitterFill,
  RiFacebookCircleFill,
  RiInstagramFill,
} from "react-icons/ri";

const HeroSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressStartValue = 0;
    const progressEndValue = 100;
    const interval = setInterval(() => {
      progressStartValue++;
      setProgress(progressStartValue);
      if (progressStartValue === progressEndValue) {
        clearInterval(interval);
      }
    }, 80); // 80ms interval for smooth progress

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <main className="container mx-auto pb-8 mt-7" id="about-me">
      {/* Container 1 */}
      <section
        className="bg-cover bg-center p-12 rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1487835/pexels-photo-1487835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="flex flex-col justify-between space-y-8">
          <div className="pb-8">
            <img
              src={profile}
              alt="avatar"
              className="h-24 w-24 object-cover object-center rounded-full mt-4"
            />
          </div>
          <div>
            <h1 className="text-5xl text-white">
              Hloo There, My Name Is Pankaj{" "}
              <span className="text-black text-7xl">.</span>
            </h1>
            <div className="w-full border-b-2 border-white my-4"></div>
            <p className="text-white text-justify">
              I’m a passionate Fullstack Developer with a strong focus on
              frontend technologies and currently deepening my expertise in Java
              and backend development through training at JSpiders, Noida.{" "}
              <br /> I graduated with a Bachelor's degree in Computer
              Applications (BCA) in 2024, and since then, I’ve honed my skills
              across various web technologies, from creating responsive and
              interactive UIs with React and Tailwind CSS to managing efficient
              workflows with Git and version control tools. I’m also exploring
              the backend side of things, diving into Java-based frameworks to
              enhance my capabilities as a versatile developer. <br /> My goal
              is to build seamless web experiences, and I have a keen eye for
              design, ensuring that aesthetics and functionality go hand-in-hand
              in every project I undertake. In addition to my technical skills,
              I enjoy solving problems, collaborating in teams, and constantly
              learning new technologies. <br /> Currently, I’m working on
              building innovative web projects that leverage my knowledge of
              JavaScript, React, CSS frameworks, and more. When I'm not coding,
              you’ll find me exploring new trends in web development,
              participating in coding communities, or planning my next big
              project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
