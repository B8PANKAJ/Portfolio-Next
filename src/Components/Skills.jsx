import { FaJava, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiExpress,
  SiOracle,
  SiMongodb,
  SiSpringboot,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiJest,
  SiJunit5,
  SiJirasoftware,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { MdDataObject } from "react-icons/md";

const techStack = [
  { name: "Core Java", icon: <FaJava className="text-orange-600" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express JS", icon: <SiExpress className="text-gray-700" /> },
  { name: "Oracle SQL", icon: <SiOracle className="text-red-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "JDBC", icon: <MdDataObject className="text-blue-600" /> },
  { name: "Hibernate", icon: <SiJunit5 className="text-green-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "HTML", icon: <TbBrandHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <TbBrandCss3 className="text-blue-500" /> },
  {
    name: "Javascript",
    icon: <TbBrandJavascript className="text-yellow-500" />,
  },
  { name: "React JS", icon: <FaReact className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Sass", icon: <FaSass className="text-pink-400" /> },
];

const Skills = () => {
  return (
    <>
      <h1
        className="text-3xl sm:text-5xl text-white mb-3 font-semibold text-center"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Recent Projects
      </h1>
      <marquee className="overflow-hidden whitespace-nowrap py-4">
        <div className="flex space-x-10 animate-marquee hover:pause">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-black text-lg font-semibold px-4"
            >
              {tech.icon} <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </marquee>
    </>
  );
};

export default Skills;

// Tailwind Animations
// Add this to your Tailwind config file or CSS file
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-100%); }
// }
// .animate-marquee {
//   display: flex;
//   animation: marquee 15s linear infinite;
// }
// .hover\:pause:hover {
//   animation-play-state: paused;
// }
