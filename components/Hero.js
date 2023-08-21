import React from 'react'

const Hero = ({heading, message}) => {
    return (
        <div className='flex flex-col items-center h-screen bg-fixed bg-center bg-cover bg-[#a1cad8da] '>
          {/* Overlay */}
          
          <div className='p-5 mt-[15rem] ml-[-30rem] '>
            <h2 className='text-8xl sm:text-9xl text-[white] outline-4 font-Montserrat'>{heading}</h2>
            <p className='py-5 bg-[#ffffff] mt-5 text-center text-3xl sm:text-5xl font-SpaceMono text-[#2c8dbab9]'>{message}</p>
            
          </div>
          <p className='mt-6 text-xl sm:text-xl font-SpaceMono'>I'm a bilingual software engineer with a passion for travelling. Check Out my skills and projects below!</p>
        </div>
      );
    };
   

export default Hero