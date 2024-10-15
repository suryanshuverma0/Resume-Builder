import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import FavIng from "../assets/fav.jpg";
const Template1 = () => {
  return (
    <>
      <div className=" w-full ">
        <div className="grid grid-cols-12 h-[1000px] overflow-y-auto">
          <div className="col-span-4 bg-gray-800 text-white flex items-center flex-col justify-start">
            <section className="my-12">
              <div className="flex rounded-full justify-center items-center ">
                <img
                  src={FavIng}
                  alt="image"
                  className="rounded-full  w-36 h-36 object-cover  shadow-md"
                />
              </div>
            </section>

            <section className="my-4 w-full">
              <div className="relative text-xl font-bold after:content-[''] after:block after:w-full after:h-[2px] after:bg-white after:mt-4 after:mb-4 px-2">
                <h1>Contact</h1>
              </div>
              <div className="text-sm flex flex-col gap-3 w-full pl-4">
                <div className="flex gap-2 items-center justify-start w-full">
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <span>9860752617</span>
                </div>
                <div className="flex gap-2 items-center justify-start w-full">
                  <span>
                    <FaEnvelope />
                  </span>
                  <span>veenasa676@gmail.com</span>
                </div>
              </div>
            </section>

            <section className="my-4 w-full">
              <div className="relative text-xl font-bold after:content-[''] after:block after:w-full after:h-[2px] after:bg-white after:mt-4 after:mb-4 px-2">
                <h1>Education</h1>
              </div>
              <div className="text-sm pl-6">
                <ul className="list-disc flex justify-start items-center flex-col w-full">
                  <li className="mb-4 w-full">
                    <h1 className="font-bold">
                      Bachelor in Computer Engineering
                    </h1>
                    <span className="block">Tribhuwan University</span>
                    <span>Jan 2020 - Present</span>
                  </li>
                  <li className="mb-4 w-full">
                    <h1 className="font-bold">High School</h1>
                    <span className="block">Khwopa Secondary School</span>
                    <span>Jan 2019 - Jan 2021</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="my-4 w-full">
              <div className="relative text-xl font-bold after:content-[''] after:block after:w-full after:h-[2px] after:bg-white after:mt-4 after:mb-4 px-2">
                <h1>Skills</h1>
              </div>
              <div className="text-sm pl-10">
                <ul className="list-disc grid grid-cols-1 gap-2">
                  <li className="">HTML</li>
                  <li className="">CSS</li>
                  <li className="">JavaScript</li>
                  <li className="">React</li>
                  <li className="">Figma</li>
                  <li className="">C/C++</li>
                </ul>
              </div>
            </section>

            <section className="my-4 w-full">
              <div className="relative text-xl font-bold after:content-[''] after:block after:w-full after:h-[2px] after:bg-white after:mt-4 after:mb-4 px-2">
                <h1>Language</h1>
              </div>
              <div className="text-sm pl-10">
                <ul className="list-disc grid grid-cols-1	 gap-2">
                  <li className="">Nepali</li>
                  <li className="">English</li>
                  <li className="">HIndi</li>
                  <li className="">Maithali</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="col-span-8  flex flex-col gap-6 p-6">
            <div className="p-4">
              <h1 className="font-bold text-2xl text-black">Suryanshu Verma</h1>
              <h3 className="text-xl font-semibold ">Frontend Developer</h3>
            </div>

            <section>
              <div className="relative text-xl font-bold after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-4 mb-4">
                <h1>Profile</h1>
              </div>
              <div className="text-sm text-justify">
                <p>
                  Frontend Developer with 2 years of experience in building user
                  interfaces for websites and web applications. Proficient in
                  HTML, CSS, and JavaScript; plus modern libraries and
                  frameworks like React. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis autem qui ea culpa possimus vitae
                  voluptas vero, deleniti rerum, quisquam molestias?
                  Exercitationem distinctio in nesciunt hic aliquam? Qui,
                  obcaecati dicta.
                </p>
              </div>
            </section>

            <section>
              <div className="relative text-xl font-bold after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-4 mb-4">
                <h1>Work Experience</h1>
              </div>
              <div className="text-sm text-justify">
                <ul className="list-disc pl-6">
                  <li className="mb-4">
                    <div className="flex justify-between items-center gap-4 pr-4">
                      <h1 className="font-bold text-md">Frontend Developer</h1>
                      <span>Jan 2020 - Present</span>
                    </div>
                    <h3 className="font-semibold">Google</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis autem qui ea culpa possimus vitae voluptas vero,
                      deleniti rerum, quisquam molestias? Exercitationem
                      distinctio in nesciunt hic aliquam? Qui, obcaecati dicta.
                    </p>
                  </li>
                  <li className="mb-4">
                    <div className="flex justify-between items-center gap-4 pr-4">
                      <h1 className="font-bold text-md">Frontend Developer</h1>
                      <span>Jan 2020 - Present</span>
                    </div>
                    <h3 className="font-semibold">IBM</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis autem qui ea culpa possimus vitae voluptas vero,
                      deleniti rerum, quisquam molestias? Exercitationem
                      distinctio in nesciunt hic aliquam? Qui, obcaecati dicta.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="relative text-xl font-bold after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-4 mb-4">
                <h1>Projects</h1>
              </div>
              <div className="text-sm text-justify">
                <ul className="list-disc pl-6">
                  <li className="mb-4">
                    <div className="flex flex-col justify-start gap-4 pr-4">
                      <h1 className="font-bold text-md">Pixel Studio</h1>
                      <p>
                        Pixel Studio App is a fun and easy-to-use application
                        built with React and Firebase. Users can sign up and log
                        in using email and password, or log in with Google. The
                        app allows you to create pixel art and freehand
                        drawings, which you can save as PNG files.{" "}
                      </p>
                    </div>
                    <a
                      href="https://pixelstudio-2e0bd.web.app/
"
                      className="font-semibold"
                    >
                      Live Demo
                    </a>
                  </li>
                  <li className="mb-4">
                    <div className="flex flex-col justify-start gap-4 pr-4">
                      <h1 className="font-bold text-md">
                        NoteMaina-Make-Your-Work-Easier Public
                      </h1>
                      <p>
                        NoteMaina is a simple note taking platform build using
                        React library for frontend and Firebase for backend,
                        Authentication, Database and Hosting. Note can be save
                        as PDF for further use.{" "}
                      </p>
                    </div>
                    <a
                      href="https://note-taking-application-f1180.web.app/notes
"
                      className="font-semibold"
                    >
                      Live Demo
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="relative text-xl font-bold after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-4 mb-4">
                <h1>Achievements</h1>
              </div>
              <div className="text-sm text-justify">
                <ul className="list-disc pl-6">
                  <li className="mb-4">
                    <div className="flex justify-between items-center gap-4 pr-4">
                      <h1 className="font-bold text-md">Frontend Developer</h1>
                      <span>Jan 2020 - Present</span>
                    </div>
                    <h3 className="font-semibold">Google</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis autem qui ea culpa possimus vitae voluptas vero,
                      deleniti rerum, quisquam molestias? Exercitationem
                      distinctio in nesciunt hic aliquam? Qui, obcaecati dicta.
                    </p>
                  </li>
                  <li className="mb-4">
                    <div className="flex justify-between items-center gap-4 pr-4">
                      <h1 className="font-bold text-md">Frontend Developer</h1>
                      <span>Jan 2020 - Present</span>
                    </div>
                    <h3 className="font-semibold">IBM</h3>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima distinctio quaerat corrupti, vel ipsum porro quis a tempora ullam vitae obcaecati voluptates omnis ducimus, fugiat facilis ut iusto? Placeat voluptas reprehenderit beatae minus autem maiores quae voluptates corporis! Animi, quo.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Template1;
