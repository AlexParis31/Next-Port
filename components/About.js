import React, { useState } from 'react';

const Aboutt = () => {
    return (
    <div id="about"> 
        <div className='p-5 text-white z-[2] bg-center bg-cover customThree-img '>
            <div class="py-16  ">  
                <div class="container bg-cover bg-center customTwo-img p-5 mx-auto mt-8 px-6 text-gray-600 md:px-12 xl:px-6 ">
                <h2 class="font-Montserrat text-center text-7xl xs:text-6xl text-black mt-20 mb-5" >Hello! I'm Alex, </h2>
                <h2 className='text-4xl text-center font-Montaga tracking-wide text-black mb-10 '>A passionate and versatile software engineer.</h2>
                    <div class="space-y-6 md:space-y-0 md:flex justify-center md:gap-6 lg:items-center lg:gap-12">

                        <div class="md:5/12 lg:w-4/12">
                            <img src="https://i.ibb.co/syBWGsS/Screen-Shot-2023-03-01-at-5-19-11-PM-2.png" alt="image" loading="lazy"  />
                        </div>

                        <div class="md:7/12 lg:w-5/12">
                            <p class="mt-6 font-bold text-gray-600 md:text-2xl"> </p>

                            <p class="mt-6 text-[#000000c6] md:text-2xl">Born and raised in beautiful Italy, I later pursued my undergraduate degree in the United States, where I honed my skills and developed a deep passion for technology. My international background has taught me how to quickly adapt to new environments, embrace different perspectives, and work effectively with individuals from various backgrounds.</p>

                            <p class="mt-6 text-[#000000c6] md:text-2xl">I am a collaborative team player who thrives in an environment that fosters creativity and encourages continuous growth. One of my greatest strengths is my ability to learn new technologies and concepts rapidly. </p>

                            {/* <p class="mt-6 text-[#000000] md:text-xl">Born as a dual American-Italian citizen and having lived, studied, and worked in a multitude of places in both countries, I have developed a high level of adaptability. I integrate easily into new environments and appreciate diverse persepectives which makes me a very collaborative team player; I enjoy challenges and novelty and have an insiatable curiosity and deep passion for expanding my knowledge and technolgical skills </p>

                            <p class="mt-6 text-black md:text-xl"> I am a collaborative team player who thrives in an environment that fosters creativity and encourages continuous growth. One of my greatest strengths is my ability to learn new technologies and concepts rapidly. With an insatiable curiosity and a deep passion for expanding my knowledge, I am always eager to dive into new technologies, frameworks, and programming languages. </p> */}

                            

                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    );
};

export default Aboutt;