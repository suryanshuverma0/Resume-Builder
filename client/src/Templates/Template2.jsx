const Template2 = () => {
  return (
    <>
      <div className="bg-white p-8">
        <section>
          <div className="flex items-center gap-3 flex-col">
            <div className="flex flex-col gap-2 items-center py-3">
              <h1 className="text-2xl font-bold tracking-widest">
                Suryanshu Verma
              </h1>
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
            </div>
            <div className="flex gap-4 items-center text-md">
              <span>9860752617</span>
              <span>veenasa676@gmail.com</span>
            </div>
            <p className="text-md text-justify py-4">
              {" "}
              I am a passionate Computer Engineering student at Advanced College
              of Engineering and Management, with a deep interest in technology
              and programming. I am actively learning the MERN stack and have
              built several projects using React and Firebase. With a strong
              drive for continuous learning, I am now exploring backend
              development to expand my skill set and contribute to innovative
              solutions.{" "}
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div>
            <h1 className="font-semibold font-serif">EXPERIENCE</h1>
            <hr className="my-2" />
          </div>
          <div>
            <ul className="flex flex-col gap-6 text-md">
              <li className="list-none">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h1 className="font-semibold">Frontend Developer</h1>
                    <span className="italic">Google</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span>Kathmandu</span>
                    <div>
                      <span>October 2024</span>-<span>Present</span>
                    </div>
                  </div>
                </div>
                <p className="pt-2">
                  I learned a good knowledge of frontednd development in React
                </p>
              </li>

              <li className="list-none">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h1 className="font-semibold">Backend Developer</h1>
                    <span className="italic">Meta</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span>California</span>
                    <div>
                      <span>Janauary 2023</span>-<span>June 2024</span>
                    </div>
                  </div>
                </div>
                <p className="pt-2">
                  I learned a good knowledge of backend development in Express
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <div>
            <h1 className="font-semibold font-serif">EDUCATION</h1>
            <hr className="my-2" />
          </div>
          <div>
            <ul className="flex flex-col gap-6 text-md">
              <li className="list-none">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h1 className="font-semibold">Bachelor Degree</h1>
                    <span className="italic">
                      Advanced College of Engineering and Management
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span>Kathmandu</span>
                    <div>
                      <span>April 2022</span>-<span>Present</span>
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-none">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h1 className="font-semibold">High School</h1>
                    <span className="italic">Khwopa secondary School</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span>Kathmandu</span>
                    <div>
                      <span>July 2019 </span>-<span>November 2021</span>
                    </div>
                  </div>
                </div>
                <p className="pt-2">
                  I learned a good knowledge of backend development in Express
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <div>
            <h1 className="font-semibold font-serif">PROJECTS</h1>
            <hr className="my-2" />
          </div>
          <div>
            <ul className="flex flex-col gap-6 text-md">
              <li className="list-none">
                <div className="">
                  <h1 className="font-semibold">Pixel Studio</h1>
                  <p>
                    {" "}
                    Pixel Studio App is a fun and easy-to-use application built
                    with React and Firebase. Users can sign up and log in using
                    email and password, or log in with Google. The app allows
                    you to create pixel art and freehand drawings, which you can
                    save as PNG files.{" "}
                  </p>
                  <a
                    className="text-purple-900"
                    href="https://pixelstudio-2e0bd.web.app/"
                  >
                    Live Demo
                  </a>
                </div>
              </li>

              <li className="list-none">
                <div className="">
                  <h1 className="font-semibold">
                    NoteMaina-Make-Your-Work-Easier Public
                  </h1>
                  <p>
                    {" "}
                    NoteMaina is a simple note taking platform build using React
                    library for frontend and Firebase for backend,
                    Authentication, Database and Hosting. Note can be save as
                    PDF for further use.{" "}
                  </p>
                  <a
                    className="text-purple-900"
                    href="https://note-taking-application-f1180.web.app/"
                  >
                    Live Demo
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <div>
            <h1 className="font-semibold font-serif">ACHIEVEMENTS</h1>
            <hr className="my-2" />
          </div>
          <div>
            <ul className="flex flex-col gap-6 text-md">
              <li className="list-none">
                <div className="">
                  <h1 className="font-semibold">
                    Introduction to Web Development with HTML, CSS and
                    JavaScript
                  </h1>
                  <span className="italic">IBM</span>
                </div>
              </li>

              <li className="list-none">
                <div className="">
                  <h1 className="font-semibold">Programming with JavaScript</h1>
                  <span className="italic">Meta</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <div>
            <h1 className="font-semibold font-serif">SKILLS</h1>
            <hr className="my-2" />
          </div>
          <ul className="flex flex-wrap  gap-4 items-center">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Firebase</li>
            <li>C/++</li>
            <li>Figma</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Python</li>
          </ul>
        </section>

        <section className="mt-8">
          <div>
            <h1 className="font-semibold font-serif">LANGUAGES</h1>
            <hr className="my-2" />
          </div>
          <ul className="flex flex-wrap  gap-4 items-center">
            <li>Hindi</li>
            <li>Nepali</li>
            <li>Engilsh</li>
            <li>Maithali</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Template2;
