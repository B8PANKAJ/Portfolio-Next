import React, { useState } from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.bio,
    };

    emailjs
      .send(
        "service_tp0htho",
        "template_ijzrrpq",
        templateParams,
        "FrLzK_Q9eHMbcHCLl"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send your message.");
        }
      );

    setFormData({ name: "", email: "", bio: "" });
  };

  return (
    <div
      className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 space-y-8 md:space-y-0"
      id="contact"
      data-aos="zoom-in-up"
    >
      <div className="w-full max-w-md mx-auto relative overflow-hidden z-10 bg-transparent p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12 md:mr-4 md:w-1/2">
        <h2 className="text-2xl font-bold text-black mb-6">Contact Me!</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="mt-1 p-2 w-full border border-gray-600 rounded-md text-black"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="bio"
            >
              Enter Your Message
            </label>
            <textarea
              className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white"
              rows="3"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Drop Your Message Here"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <div className="text-center h-auto flex flex-col items-center justify-center mt-8 md:mt-0 md:ml-4 md:w-1/2">
        <a href="#" className="text-2xl font-semibold text-gray-900 mb-5">
          Pankaj.
        </a>
        <span className="block text-sm text-black mb-5">
          © 2024-till Now ™. All Rights Reserved. Follow Me on Social Media
        </span>
        <div className="flex space-x-6 mt-5 justify-center">
          {[
            {
              href: "https://github.com/B8PANKAJ",
              label: "GitHub",
              Icon: FaGithub,
            },
            {
              href: "https://www.facebook.com/profile.php?id=100026168350246&mibextid=ZbWKwL",
              label: "Facebook",
              Icon: FaFacebook,
            },
            {
              href: "https://www.instagram.com/_pankaj11111/profilecard/?igsh=MWlxbjl6Y2hibzg0dQ==",
              label: "Instagram",
              Icon: FaInstagram,
            },
            {
              href: "https://www.linkedin.com/in/pankaj-kumar-3232b3294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              label: "LinkedIn",
              Icon: FaLinkedin,
            },
          ].map(({ href, label, Icon }, index) => (
            <div key={index} className="group relative">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="w-8 h-8 hover:scale-125 text-black duration-200" />
              </a>
              <span className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
