import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MyContext } from "./MyContextProvider";
import { useContext } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import avatar from "./assets/freelancer.png";
import { FaReact, FaCss3, FaJs,FaNode } from "react-icons/fa";
import tailwind from "./assets/tailwind.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillHtml5,
  AiFillFacebook,
  
} from "react-icons/ai";
import ProjectContainer from "./components/ProjectContainer";
import projects from "./projectArray";
import { motion, useInView, useAnimation } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import SkillBox from "./components/Skillbox";
function App() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(MyContext);
  const proffesion = "Frontend Developer";
  const [word, setWord] = useState("");
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const mainIsInView = useInView(mainRef, { once: true });
  const aboutIsInView = useInView(aboutRef, { once: true });
  const skillIsInView = useInView(skillRef, { once: true });
  const projectIsInView = useInView(projectRef, { once: true });
  const mainControls = useAnimation();
  const aboutControls = useAnimation();
  const skillControls = useAnimation();
  const projectControls = useAnimation();
  useEffect(() => {
    if (mainIsInView) {
      mainControls.start("visible");
    }
  }, [mainIsInView]);
  useEffect(() => {
    if (aboutIsInView) {
      aboutControls.start("visible");
    }
  }, [aboutIsInView]);

  useEffect(() => {
    if (skillIsInView) {
      skillControls.start("visible");
    }
  }, [skillIsInView]);

  useEffect(() => {
    if (projectIsInView) {
      projectControls.start("visible");
    }
  }, [projectIsInView]);

  useEffect(() => {
    let timeoutIds = [];
    let index = -1;

    const addLetter = () => {
      setWord((prevWord) => prevWord + proffesion[index]);
      index = index + 1;

      if (index < proffesion.length - 1) {
        timeoutIds.push(setTimeout(addLetter, 150));
      }
    };

    timeoutIds.push(setTimeout(addLetter, 200));

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-5 md:px-10 lg:px-20 dark:bg-gray-900">
        {/*Navbar*/}

        <nav className="py-10 mb-5 flex justify-between items-center">
          <h1 className="text-xl font-burtons dark:text-white">Portfolio</h1>
          <ul className="flex items-center">
            <li>
              {darkMode ? (
                <BsFillSunFill
                  size={25}
                  className="cursor-pointer"
                  color="white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              ) : (
                <BsFillMoonStarsFill
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setDarkMode(!darkMode)}
                />
              )}
            </li>
            <li>
              <Link
                to="/portfolio/projects"
                onClick={handleClick}
                className="bg-gradient-to-r cursor-pointer from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        {/*Introduction*/}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div className="text-center p-2 " ref={mainRef}>
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Giorgi Beriashvili
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
              {word}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white ">
              A passionate Frontend Developer having an experience of building
              Websites. I'm committed,flexible, and willing to help with you
              initiatives.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16  text-gray-600">
            <a
              href="https://www.linkedin.com/in/giorgi-beriashvili-072526255/"
              target="_blank"
            >
              <AiFillLinkedin className="dark:text-white" />
            </a>
            <a
              href="https://github.com/bero285"
              target="_blank"
              className="cursor-pointer"
            >
              <AiFillGithub className="dark:text-white" />
            </a>
          </div>
          <div className="flex justify-center mt-4 ">
            <div className="flex justify-center relative bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 overflow-hidden md:h-80 md:w-80 ">
              <img
                src={avatar}
                alt=""
                className="w-52 h-52 mt-1 md:mt-6 md:w-60 md:h-60 object-fit "
              />
            </div>
          </div>
        </motion.div>
        {/*About*/}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={aboutControls}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div
            ref={aboutRef}
            className="py-16 flex mt-40 md:w-8/12 md:mx-auto  flex-col items-center"
          >
            <h3 className="text-3xl py-1  dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl max-w-7xl mx-auto text-center">
              Web developer with a keen eye for detail and a focus on delivering
              high-quality results. Proficient in JavaScript, React, React
              Native, Tailwind, and HTML/CSS also fammiliar with
              Node,Express,Mongodb. Skilled in creating dynamic and
              user-friendly interfaces, ensuring exceptional user experiences.
              Detail-oriented and tech-savvy, I excel in strategic thinking and
              problem-solving. A strong team player who collaborates effectively
              to achieve project goals. Constantly staying up-to-date with the
              latest technologies and trends in web development. Let's work
              together to bring your web projects to life.
            </p>
          </div>
        </motion.div>
        {/*Skills*/}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={skillControls}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div className="flex flex-col items-center mt-36 py-5" ref={skillRef}>
            <h1 className="text-3xl pb-5  dark:text-white">My Skills</h1>
            <div className="flex gap-16 py-5  flex-wrap  justify-center items-center w-11/12 md:w-4/5 lg:w-9/12">
              <SkillBox>
              <AiFillHtml5 size={50} color="#e34c26" />
                <h3 className="text-xl  dark:text-white">Html</h3>
              </SkillBox>

              <SkillBox>
              <FaCss3 size={45} color="#264de4" />
                <h3 className="text-xl  dark:text-white">Css</h3>
              </SkillBox>

              <SkillBox>
              <FaJs
                  size={50}
                  color="yellow"
                  className="bg-black dark:bg-transparent"
                />

                <h3 className="text-xl dark:text-white">JavaScript</h3>
              </SkillBox>


              <SkillBox>
              <FaReact size={50} color={darkMode ? "white" : "black"} />
                <h3 className="text-xl  dark:text-white">React</h3>
              </SkillBox>
              
              <SkillBox>
              <FaReact size={50} color="cyan" />
                <h3 className="text-xl  dark:text-white">React Native</h3>
              </SkillBox>
              
              <SkillBox>
              <img src={tailwind} className="w-16" />
                <h3 className="text-xl  dark:text-white">Tailwind Css</h3>
              </SkillBox>
              
              <SkillBox>
              <FaNode className="dark:text-white" size={55} />
                {/* <h3 className="text-xl  dark:text-white">Node</h3> */}
              </SkillBox>
              
              <SkillBox>
              <img  className="w-12" src="https://mongodb-js.github.io/leaf/mongodb-leaf_512x512.png"/>
                <h3 className="text-xl  dark:text-white">MongoDB</h3>
              </SkillBox>

              <SkillBox>
              <i
                  className="fa-brands fa-git-alt"
                  style={{ fontSize: "50px", color: "#F1502F" }}
                ></i>

                <h3 className="text-xl  dark:text-white">Git</h3>
              </SkillBox>
              
              <SkillBox>
              <AiFillGithub className="dark:text-white" size={50} />
                <h3 className="text-xl  dark:text-white">Github</h3>
              </SkillBox>

           


            </div>
          </div>
        </motion.div>

        {/*projects */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={projectControls}
          transition={{ duration: 1, delay: 0.25, ease: "easeIn" }}
        >
          <div
            className="flex flex-col items-center py-5 mt-36"
            ref={projectRef}
          >
            <h1 className="text-3xl  dark:text-white pb-10 ">My Projects</h1>
            <div className="flex flex-wrap justify-center gap-8">
              {projects.slice(0, 4).map((item) => {
                return (
                  <ProjectContainer
                    key={item.name}
                    name={item.name}
                    tools={item.tools}
                    image={item.image}
                    website={item.website}
                    code={item.code}
                    description={item.description}
                  />
                );
              })}
            </div>
            <Link
              onClick={handleClick}
              to="/portfolio/projects"
              className="bg-gradient-to-r cursor-pointer mt-5 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md "
            >
              <h2 className="">More Projects</h2>
            </Link>
          </div>
        </motion.div>

        {/*contact me */}
        <div className="flex flex-col justify-center items-center pt-20 pb-10">
          <h1 className="animate-bounce text-3xl  dark:text-white">
            Contact Me
          </h1>
          <div className="text-5xl flex justify-center gap-16 pt-10 text-gray-600">
            <a
              href="https://www.linkedin.com/in/giorgi-beriashvili-072526255/"
              target="_blank"
            >
              <AiFillLinkedin className="dark:text-white" />
            </a>
            <a href="https://github.com/bero285" target="_blank">
              <AiFillGithub className="dark:text-white" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008372558451"
              target="_blank"
            >
              <AiFillFacebook className="dark:text-white" />
            </a>
          </div>
          <h1 className="text-2xl pt-3  dark:text-white">
            gioberia23@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
