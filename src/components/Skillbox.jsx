import React from 'react';

function SkillBox({children}) {
    return (
        <div className='w-32 md:w-40 border-0 h-24 bg-[#ededed] bg-opacity-10  border-[#888484] flex flex-col justify-center items-center  text-center '>
            {children}
        </div>
    );
}

export default SkillBox;