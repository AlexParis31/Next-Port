import React from 'react'

const Hero = ({heading, message}) => {
    return (
        <div className='flex items-center justify-left h-screen bg-fixed bg-center bg-cover custom-img'>
          {/* Overlay */}
          <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]  ' />
          <div className='p-5  z-[2] mt-[-5rem] ml-[3rem] md:ml-[7rem]'>
            <h2 className='text-8xl sm:text-9xl text-[white] outline-4 font-Montserrat'>{heading}</h2>
            <p className='py-5 bg-[#ffffff] mt-5 text-center text-3xl sm:text-5xl font-SpaceMono text-[#2c8dbab9]'>{message}</p>
          </div>
        </div>
      );
    };
   

export default Hero