import React from "react";

const events = [
  {
    title: "High School",
    date: "March 20, 2019",
    content:
      "I have completed 10th grade in 2019 through Dr. Shiv Charan Sharma Higher Secondary School.",
    isActive: true,
  },
  {
    title: "Intermediate",
    date: "April 18, 2021",
    content:
      "I have completed 12th grade in 2021 through Shri Ram Inter College.",
    isActive: true,
  },
  {
    title: "Graduation",
    date: "August 14, 2024",
    content:
      "I have completed my graduation in 2024 through Avviare Educational Hub affiliated with Glocal University, Sahranpur.",
    isActive: true,
  },
  {
    title: "Jspiders Noida",
    date: "March 20, 2024",
    content:
      "Currently, I am expanding my skills in Java Fullstack Development through training at JSpiders, Noida.",
    isActive: true,
  },
  {
    title: "Four Steps Digital Consulting Pvt Ltd",
    date: "Dec 2024",
    content:
      "Currently, Working as Software Developer Trannie expand my skills on real world Projects.",
    isActive: true,
  },
];

const EducationJourney = () => {
  return (
    <section className="bg-white text-black py-8">
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div
          className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
          data-aos="fade-down"
        >
          <p className="ml-2 text-black uppercase tracking-loose">
            My Journey
          </p>
          <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
            Education & Experience Timeline
          </p>
          <p className="text-sm md:text-base text-black mb-4">
            Here’s an overview of my educational journey and skill development
            over the years.
          </p>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2 absolute h-full border-black"
                    data-aos="zoom-in-right"
              style={{ left: "50%", borderRadius: "1%" }}
            ></div>
            {events.map((event, index) => (
              <div
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${
                  index % 2 === 0
                    ? "flex-row-reverse left-timeline"
                    : "right-timeline"
                }`}
                data-aos="zoom-in-right"
              >
                <div className="order-1 w-5/12"></div>
                <div
                  className={`order-1 w-5/12 px-1 py-4 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <p className="mb-3 text-base text-black">{event.date}</p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    {event.title}
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                    {event.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;
