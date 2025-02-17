import React from "react";
import Shopless from "../Assets/Images/Shopless-Ecomm.png";
import Dice from "../Assets/Images/Dice-game.png";
import Aaorush from "../Assets/Images/Aaorush-Chatbot.png";
import numtonum from "../Assets/Images/numtonum.png";
import { IoArrowUp } from "react-icons/io5";

const Projects = () => {
  return (
    <div className="mobile-prest" id="projects">
      <h1
        className="text-3xl sm:text-5xl text-white mb-3 font-semibold text-center"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Recent Projects
      </h1>
      <div
        data-aos="zoom-in-up"
        style={{ minHeight: "300vh" }}
        className="relative flex flex-col px-4 pt-24 pb-12 font-sans sm:px-6 lg:px-8"
      >
        <div style={{ textAlign: "center" }} className="flex-1 space-y-8 ">
          <div
            style={{ top: "calc(1rem * 1)" }}
            className="sticky max-w-[80vw] px-8 py-12 mx-auto space-y-4 bg-white border rounded-2xl shadow-lg flex justify-between shadow-black-bg"
          >
            {" "}
            <div id="hero" class="pt-5 lg:flex items-center text-justify">
              <div class="mt-6 w-full flex-1 lg:mt-0">
                <div></div>
                <img class="rounded-2xl" src={Aaorush} />
              </div>
              <div class="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
                <div class="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
                  <h1 class="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                    Help Bot
                  </h1>
                  <p class="mt-4 xl:mt-2">
                    I developed a responsive site where users can interact by
                    entering specific messages, triggering automated replies.
                    The system recognizes predefined inputs and provides
                    real-time responses, enhancing user engagement and offering
                    an interactive experience.
                  </p>
                  <a
                    href="https://aorushchatbot.netlify.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button
                      type="submit"
                      className="flex gap-2 mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 mt-5 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full 
                      before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 
                      overflow-hidden border-2 rounded-[13px] group"
                    >
                      Explore
                      <IoArrowUp className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-black ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ top: "calc(1rem * 2)" }}
            className="sticky  max-w-[80vw] px-8 py-12 mx-auto space-y-4 bg-white border rounded-lg shadow-lg"
          >
            <div id="hero" class="pt-5 lg:flex items-center text-justify">
              <div class="mt-6 w-full flex-1 lg:mt-0">
                <div></div>
                <img class="rounded-2xl" src={Dice} />
              </div>
              <div class="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
                <div class="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
                  <h1 class="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                    Dice Game
                  </h1>
                  <p class="mt-4 xl:mt-2">
                    I developed an engaging and interactive dice game as my
                    project. This project demonstrated my strong problem solving
                    skills in react.
                  </p>
                  <a
                    href="https://dice-for-fun.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="submit"
                      className="flex gap-2 mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 mt-5 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full 
                      before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 
                      overflow-hidden border-2 rounded-[13px] group"
                    >
                      Explore
                      <IoArrowUp className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-black ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ top: "calc(1rem * 3)" }}
            className="sticky w-full max-w-[80vw] px-8 py-12 mx-auto space-y-4 bg-white border rounded-lg shadow-lg"
          >
            <div id="hero" class="pt-5 lg:flex items-center text-justify">
              <div class="mt-6 w-full flex-1 lg:mt-0">
                <div></div>
                <img class="rounded-2xl" src={Shopless} />
              </div>
              <div class="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
                <div class="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
                  <h1 class="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                    Shopless
                  </h1>
                  <p class="mt-4 xl:mt-2">
                    An e-commerce web app built using MERN stack for college
                    students; featuring secure login, easy-to-use cart
                    management, and a reliable payment system, ensuring safe
                    transactions and streamlined shopping experiences.
                  </p>
                  <a
                    href="https://shopless.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="submit"
                      className="flex gap-2 mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 mt-5 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full 
                      before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 
                      overflow-hidden border-2 rounded-[13px] group"
                    >
                      Explore
                      <IoArrowUp className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-black ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ top: "calc(1rem * 8)" }}
            className="sticky w-full max-w-[80vw] px-8 py-12 mx-auto space-y-4 bg-white border rounded-lg shadow-lg"
          >
            <div id="hero" class="pt-5 lg:flex items-center text-justify">
              <div class="mt-6 w-full flex-1 lg:mt-0">
                <div></div>
                <img class="rounded-2xl" src={numtonum} />
              </div>
              <div class="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
                <div class="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
                  <h1 class="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                    Num To Num
                  </h1>
                  <p class="mt-4 xl:mt-2">
                    I developed a number validation and transformation project
                    using React, which allows users to reverse a number, check
                    for palindromes, and determine if a number is even, odd, or
                    fits other numerical criteria. The application offers an
                    interactive user interface, efficiently handling multiple
                    number types and conditions with real-time results..
                  </p>
                  <a
                    href="https://num-to-num.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="submit"
                      className="flex gap-2 mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 mt-5 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full 
                      before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 
                      overflow-hidden border-2 rounded-[13px] group"
                    >
                      Explore
                      <IoArrowUp className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-black ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
