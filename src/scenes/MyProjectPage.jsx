import React, { useEffect, useRef } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { MyContext } from "../MyContextProvider";
import { useContext } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ProjectContainer from "../components/ProjectContainer";
import { useNavigate, Link } from "react-router-dom";
import projects from "../projectArray";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillHtml5,
  AiFillFacebook,

} from "react-icons/ai";
function MyProjectPage(props) {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(MyContext);
  const projectRef = useRef(null);
  const projectIsInView = useInView(projectRef, { once: true });
  const projectControls = useAnimation();

  useEffect(() => {
    if (projectIsInView) {
      projectControls.start("visible");
    }
  }, [projectIsInView]);
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-5 md:px-10 lg:px-20 pb-10 dark:bg-gray-900 ">
        <nav className="py-10 mb-5 flex justify-between items-center">
          <h1 className="text-xl font-burtons dark:text-white">Projects</h1>
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
                to="/portfolio/home"
                onClick={handleClick}
                className="bg-gradient-to-r cursor-pointer from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
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
            className="flex flex-col items-center py-10 mt-20"
            ref={projectRef}
          >
            <h1 className="text-3xl  dark:text-white pb-10">My Projects</h1>
            <div className="flex flex-wrap justify-center gap-8">
              {projects.map((item) => {
                return (
                  <ProjectContainer
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
              to="/portfolio/home"
              onClick={handleClick}
              className="bg-gradient-to-r cursor-pointer mt-5 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md "
            >
              <h2 className="">Home</h2>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center pt-20 pb-0">
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

        </motion.div>
      </div>
    </div>
  );
}

export default MyProjectPage;
