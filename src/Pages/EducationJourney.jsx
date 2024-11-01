import React from "react";

const EducationJourney = () => {
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
      title: "Jspider Noida",
      date: "March 20, 2024",
      content:
        "Currently, I am expanding my skills in Java Fullstack Development through training at JSpiders, Noida.",
      isActive: true,
    },
  ];

  return (
    <main
      className="min-h-screen flex items-center justify-center p-4 text-white"
      id="education"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
    >
      <div className="timeline w-full max-w-3xl bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-700">
        {events.map((event, index) => (
          <div
            key={index}
            className={`tl-content ${
              event.isActive ? "tl-content-active" : ""
            }`}
          >
            <div className="tl-header relative grid py-4">
              <span
                className={`tl-marker ${
                  event.isActive
                    ? "bg-lime-500 border-lime-500 shadow-lg"
                    : "bg-gray-300"
                } w-5 h-5 rounded-full`}
              ></span>
              <p
                className={`tl-title ${
                  event.isActive ? "font-bold text-green-600" : "font-semibold"
                }`}
              >
                {event.title}
              </p>
              <time className="tl-time text-xs">{event.date}</time>
            </div>
            <div className="tl-body pl-6 pb-4 border-l-2 border-gray-300">
              <p className="text-sm">{event.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default EducationJourney;
