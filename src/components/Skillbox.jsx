import React from 'react';
import { MyContext } from '../MyContextProvider';
import { useContext } from "react";
function SkillBox({ children }) {
    const { darkMode, setDarkMode } = useContext(MyContext);
    return (
        <div className={`w-32 md:w-40 border-0 h-24 ${darkMode ? 'bg-[#7a7676]' : 'bg-black'}  bg-opacity-10  border-[#888484] flex flex-col justify-center items-center  text-center `}>
            {children}
        </div>
    );
}

export default SkillBox;