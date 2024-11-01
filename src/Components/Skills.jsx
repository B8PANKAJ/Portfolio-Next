import React from "react";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-h-fit text-center p-4 overflow-x-hidden"
      data-aos="fade-down"
      data-aos-duration="2500"
    >
      <h1 className="text-3xl sm:text-5xl text-white mb-3 font-semibold">
        Tech Stack
      </h1>

      {/* First Scroll - Conditional for larger screens */}
      <div
        className="relative flex w-full max-w-full sm:max-w-[700px] overflow-hidden sm:mask-gradient"
        style={{ "--t": "20s" }}
      >
        <div className="whitespace-nowrap hidden sm:flex animate-scroll">
          <SkillSet
            items={[
              "HTML",
              "CSS",
              "Javascript",
              "React JS",
              "Redux",
              "Bootstrap",
              "Tailwind CSS",
              "Sass",
            ]}
          />
        </div>
        <div className="whitespace-nowrap hidden sm:flex animate-scroll2">
          <SkillSet
            items={[
              "HTML",
              "CSS",
              "Javascript",
              "React JS",
              "Redux",
              "Bootstrap",
              "Tailwind CSS",
              "Sass",
            ]}
          />
        </div>

        {/* Stacked Items on Mobile */}
        <div className="flex sm:hidden flex-wrap justify-center gap-4">
          <SkillSet
            items={[
              "HTML",
              "CSS",
              "Javascript",
              "React JS",
              "Redux",
              "Bootstrap",
              "Tailwind CSS",
              "Sass",
            ]}
          />
        </div>
      </div>

      {/* Second Scroll - Conditional for larger screens */}
      <div
        className="relative flex w-full max-w-full sm:max-w-[700px] overflow-hidden sm:mask-gradient mt-8"
        style={{ "--t": "15s" }}
      >
        <div className="whitespace-nowrap hidden sm:flex animate-scroll">
          <SkillSet
            items={[
              "Core Java",
              "Node JS",
              "Express JS",
              "Oracle SQL",
              "MongoDB",
              "JDBC",
              "Hibernate",
              "Spring Boot",
            ]}
          />
        </div>
        <div className="whitespace-nowrap hidden sm:flex animate-scroll2">
          <SkillSet
            items={[
              "Core Java",
              "Node JS",
              "Express JS",
              "Oracle SQL",
              "MongoDB",
              "JDBC",
              "Hibernate",
              "Spring Boot",
            ]}
          />
        </div>

        {/* Stacked Items on Mobile */}
        <div className="flex sm:hidden flex-wrap justify-center gap-4">
          <SkillSet
            items={[
              "Core Java",
              "Node JS",
              "Express JS",
              "Oracle SQL",
              "MongoDB",
              "JDBC",
              "Hibernate",
              "Spring Boot",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const SkillSet = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-flex m-2 px-4 py-2 rounded-md tracking-widest uppercase bg-gray-800 text-white transition-all duration-500 hover:bg-pink-500 cursor-pointer"
        >
          {item}
        </span>
      ))}
    </>
  );
};

export default Skills;
