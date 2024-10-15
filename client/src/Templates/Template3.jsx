import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Image from "../assets/fav.jpg";

const Template3 = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header with Contact Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-center">
            <img
              src={Image}
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold">Suryanshu Verma</h1>
              <p className="text-xl text-gray-600">Frontend Developer</p>
            </div>
          </div>

          {/* Contact Section (inside header) */}
          <div className="mt-4 space-y-2">
            <ul className="space-y-2 text-sm flex flex-wrap gap-4 items-center justify-center">
              <li className="flex items-center justify-center space-x-1">
                <BsTelephoneFill className="text-gray-700" />
                <span className="text-gray-900">9860752617</span>
              </li>
              <li className="flex items-center justify-center space-x-1">
                <FaEnvelope className="text-gray-700" />
                <span className="text-gray-900">veenasa676@gmail.com</span>
              </li>
              <li className="flex items-center justify-center space-x-1">
                <FaLinkedin className="text-gray-700" />
                <a
                  href="https://linkedin.com/in/suryanshuverma"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/suryanshuverma
                </a>
              </li>
              <li className="flex items-center justify-center space-x-1">
                <FaGithub className="text-gray-700" />
                <a
                  href="https://github.com/suryanshuverma0"
                  className="text-blue-600 hover:underline"
                >
                  github.com/suryanshuverma0
                </a>
              </li>
              <li className="flex items-center justify-center space-x-1">
                <FaGlobe className="text-gray-700" />
                <a
                  href="https://suryanshu.com.np"
                  className="text-blue-600 hover:underline"
                >
                  suryanshu.com.np
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className="md:w-1/3 bg-gray-100 p-6">
            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Education</h2>
              <ul className="space-y-2">
                <li>
                  <h3 className="text-lg font-bold">
                    Bachelor Degree in Computer Engineering
                  </h3>
                  <span className="text-gray-600">
                    Advanced College of Engineering and Management, Kathmandu
                  </span>
                  <span className="block text-gray-600">
                    April 2022 - Present
                  </span>
                </li>
                <li>
                  <h3 className="text-lg font-bold">High School</h3>
                  <span className="text-gray-600">
                    Khwopa Secondary School, Kathmandu
                  </span>
                  <span className="block text-gray-600">
                    July 2019 - November 2021
                  </span>
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Skills</h2>
              <ul className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Firebase",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind CSS",
                  "Redux",
                  "Python",
                  "Figma",
                ].map((skill, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Languages</h2>
              <ul className="flex flex-wrap gap-2">
                {["Hindi", "Nepali", "English", "Maithili"].map(
                  (language, index) => (
                    <li
                      key={index}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                    >
                      {language}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="md:w-2/3 p-6">
            {/* Profile Summary */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">Profile</h2>
              <p className="text-gray-700 text-justify">
                I am a passionate Computer Engineering student at Advanced
                College of Engineering and Management, with a deep interest in
                technology and programming. I am actively learning the MERN
                stack and have built several projects using React and Firebase.
                With a strong drive for continuous learning, I am now exploring
                backend development to expand my skill set and contribute to
                innovative solutions.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Frontend Developer</h3>
                  <span className="text-gray-600">Google, Kathmandu</span>
                  <span className="block text-gray-600 mb-2">
                    October 2024 - Present
                  </span>
                  <p className="text-gray-700">
                    I have gained extensive knowledge in frontend development
                    using React, creating responsive and dynamic user
                    interfaces, and collaborating with cross-functional teams to
                    deliver high-quality web applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Backend Developer</h3>
                  <span className="text-gray-600">Meta, California</span>
                  <span className="block text-gray-600 mb-2">
                    January 2023 - June 2024
                  </span>
                  <p className="text-gray-700">
                    Developed robust backend services using Express and Node.js,
                    managed databases with MongoDB, and ensured seamless
                    integration with frontend components to enhance application
                    performance.
                  </p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Pixel Studio</h3>
                  <p className="text-gray-700">
                    Pixel Studio App is a fun and easy-to-use application built
                    with React and Firebase. Users can sign up and log in using
                    email and password, or log in with Google. The app allows
                    you to create pixel art and freehand drawings, which you can
                    save as PNG files.
                  </p>
                  <a
                    href="https://pixelstudio-2e0bd.web.app/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    NoteMaina-Make-Your-Work-Easier
                  </h3>
                  <p className="text-gray-700">
                    NoteMaina is a simple note-taking platform built using React
                    for the frontend and Firebase for the backend, including
                    Authentication, Database, and Hosting. Notes can be saved as
                    PDFs for further use.
                  </p>
                  <a
                    href="https://note-taking-application-f1180.web.app/notes"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Top 10 in National Programming Contest 2023</li>
                <li>Completed 100 Days of Code Challenge</li>
                <li>Speaker at Web Developers Meetup 2022</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
