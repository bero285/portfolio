import React from "react";
import { MyContext } from "../MyContextProvider";
import { useContext } from "react";
function ProjectContainer({ name, tools, image, website, code, description }) {
  const { darkMode, setDarkMode } = useContext(MyContext);
  return (
    <div
      className={`${
        !darkMode ? "bg-light-mode" : ""
      } border p-3 dark:bg-blue  flex flex-col justify-between w-64 md:w-80 shadow-lg rounded-lg`}
    >
      <h1 className="text-teal-600 text-2xl">{name}</h1>
      <div className="py-2 flex flex-wrap gap-2">
        {tools.map((item) => {
          return (
            <>
              <h4 className="bg-little-gray py-1 px-2 text-sm dark:text-white">
                {item}
              </h4>
            </>
          );
        })}
      </div>
      <div className="relative   w-full">
        <img
          src={image}
          className="h-72 md:h-96 rounded-lg w-full object-fit shadow-lg "
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 hover:opacity-90 transition-all duration-500">
          <h1 className="text-white text-xl text-center p-2">{description}</h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 pt-4 justify-center">
        {website ? (
          <>
            <a href={website} target="blank">
              <h3 className="dark:text-white hover:hover:text-teal-600 transition-all duration-400">
                Website Link
              </h3>
            </a>
          </>
        ) : null}

        <a href={code} target="blank">
          <h3 className="dark:text-white hover:hover:text-teal-600 transition-all duration-400">
            Code
          </h3>
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;

