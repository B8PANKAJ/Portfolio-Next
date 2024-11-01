import React, { useState, useEffect } from "react";
import profile_photo from "../Assets/Images/profile_photo.jpg";
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
    }, 80); // Smooth progress interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <main
      className="flex justify-center items-center p-8 mt-7"
      id="about-me"
      data-aos="zoom-out"
      data-aos-duration="2000"
    >
      <section
        className="bg-cover bg-center p-8 lg:p-12 rounded-2xl overflow-hidden lg:w-3/4 xl:w-2/3 mx-auto"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1487835/pexels-photo-1487835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="flex flex-col justify-between space-y-8 text-white">
          {/* Profile Image */}
          <div className="flex justify-center pb-8">
            <img
              src={profile_photo}
              alt="avatar"
              className="h-24 w-24 lg:h-32 lg:w-32 object-cover rounded-full border-4 border-white rotate-90"
            />
          </div>

          {/* Introduction and Description */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Hello There, My Name is Pankaj{" "}
              <span className="text-black text-4xl lg:text-6xl">.</span>
            </h1>
            <div className="w-16 border-b-4 border-white my-4 mx-auto lg:mx-0"></div>
            <p className="text-sm lg:text-base leading-relaxed">
              I’m a passionate Fullstack Developer with a strong focus on
              frontend technologies and currently deepening my expertise in Java
              and backend development through training at JSpiders, Noida.
              <br />
              <br />
              I graduated with a Bachelor's degree in Computer Applications
              (BCA) in 2024, and since then, I’ve honed my skills across various
              web technologies, from creating responsive and interactive UIs
              with React and Tailwind CSS to managing efficient workflows with
              Git and version control tools.
              <br />
              <br />
              Currently, I’m working on building innovative web projects that
              leverage my knowledge of JavaScript, React, CSS frameworks, and
              more. When I'm not coding, you’ll find me exploring new trends in
              web development, participating in coding communities, or planning
              my next big project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
