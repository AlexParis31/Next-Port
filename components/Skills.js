import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/Html.png';
import Css from '../public/assets/skills/Css.png';
import Reactt from '../public/assets/skills/React.png';
import Python from '../public/assets/skills/Python.png';
import Javascript from '../public/assets/skills/Javascript.png';
import MongoDB from '../public/assets/skills/MongoDB.png';
import PostgreSQL from '../public/assets/skills/PostgreSQL.png';
import Github from '../public/assets/skills/Github.png';


const Skills = () => {

  return (
    <>
    <div id='skills' ></div>
    <div className='p-2 bg-center bg-cover customThree-img '>
      
      <div  className='max-w-[1240px] mx-auto flex flex-col justify-center '>

      
        <p className='font-heading text-center text-5xl xs:text-6xl font-bold text-gray-900 mt-40 mb-20'> MY SKILLS </p>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>

            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>

            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Reactt} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={MongoDB} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={PostgreSQL} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
        </div>


        <div>

        <p class="text-lg text-gray-500 font-semibold mt-10 mb-10"> You can find more of my coding skills on my resume at the following link: </p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mb-20'>
        <a href="https://docs.google.com/document/d/1U3n4RzfGv_trqsryxOv0YCBIn4yWzHqepFt7sPb8aXs/edit" target="_blank"> 
            Resume
            </a>
        </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;


