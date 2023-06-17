import React, { useEffect, useRef } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { MyContext } from "../MyContextProvider";
import { useContext } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Page404(props) {
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
  return (
    <div
      className={`h-screen ${darkMode ? "dark " : ""}`}
      style={{ height: "100vh" }}
    >
      <div className="bg-white px-5 h-full   md:px-10 lg:px-20 dark:bg-gray-900 ">
        <nav className="py-10 mb-5 flex justify-between items-center">
          <h1 className="text-xl font-burtons dark:text-white">404</h1>
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
              <a
                onClick={() => navigate("/portfolio/home")}
                className="bg-gradient-to-r cursor-pointer from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Home
              </a>
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
            className="flex flex-col justify-center  items-center py-10 mt-20 my-auto"
            ref={projectRef}
          >
            <h1 className="text-5xl  dark:text-white pb-10">404</h1>
            <h1 className="text-3xl text-center  dark:text-white pb-10">
              Oops, Something Went Wrong
            </h1>

            <a
              onClick={() => navigate("/portfolio/home")}
              className="bg-gradient-to-r cursor-pointer mt-5 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              <h2 className="">Home</h2>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Page404;
