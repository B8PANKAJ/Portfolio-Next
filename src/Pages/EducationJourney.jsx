import React from "react";

const EducationJourney = () => {
  const events = [
    {
      title: "High School",
      date: "March 20, 2019",
      content:
        "I Have completed 10th grade in 2019 through Dr. Shiv Charan Sharma Higher Secondary School",
      isActive: true,
    },
    {
      title: "Intermmeidate",
      date: "April 18, 2021",
      content:
        "I Have completed 12th grade in 2021 through Shri Ram Inter Collage",
      isActive: true,
    },
    {
      title: "Graduation",
      date: "August 14, 2024",
      content:
        "I Have completed Graduation in 2024 through Avviare Educational Hub Affilated By Glocal University, Sahranpur",
      isActive: true,
    },
    {
      title: "Jspider Noida",
      date: "March 20, 2024",
      content:
        "Currently, I am expanding My skills in Java Fullstack Development through training at JSpiders,Noida.",
      isActive: true,
    },
  ];

  return (
    <main
      className="min-h-screen flex items-center justify-center p-4 text-white "
      id="education"
    >
      <div className="timeline max-w-md rounded-xl shadow-lg p-6 border">
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
                }`}
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
              <p>{event.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default EducationJourney;
