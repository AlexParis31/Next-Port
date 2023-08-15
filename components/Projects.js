import React, { useState } from 'react';
import tvshowImg from '../public/assets/projects/Screenshot 2023-05-10 at 1.44.56 PM.png';
import carImg from '../public/assets/projects/Screenshot 2023-05-11 at 5.38.16 PM.png';
import transImg from '../public/assets/projects/Screenshot 2023-05-12 at 11.09.53 AM.png';
import ProjectItem from './ProjectItem';


const Projects = () => {

    return ( 
        <>
        <div id='projects' ></div>
        <div  className='p-2 bg-center bg-cover customThree-img '>

            <div className='max-w-[1240px] mx-auto flex flex-col justify-center  '>

                <p className='font-heading text-center text-5xl xs:text-6xl font-bold text-gray-900 mt-40 '>MY PROJECTS </p>

                <p class="text-lg text-gray-500 text-center font-semibold mt-5 ">Here are some of the main projects I have worked on lately, but there is more in the works..  </p>
                <p class="text-lg text-gray-500 text-center font-semibold mt-2 mb-7">Check out the rest of my work on my github account linked below </p>

                <div className='grid md:grid-cols-2 gap-8 my-10'>
                    <ProjectItem
                    title='Tv Shows App'
                    backgroundImg={tvshowImg}
                    frameworks="Express / MongoDB / Node / Jquery "
                    githubUrl='https://github.com/AlexParis31/Full-Stack-Application'
                    herokuUrl='https://tvshowcatalogue-bd11ccdd362a.herokuapp.com/'
                    tech="Archive TV shows you've seen and rank them based on your personal rating"
                    />

                    <ProjectItem
                    title='Cars Catalogue'
                    backgroundImg={carImg}
                    frameworks="MongoDB / Express / React.js / Node.js"
                    githubUrl='https://github.com/AlexParis31/front_end_pthree'
                    herokuUrl=''
                    tech='Create a list of your dream cars and divide them by category'
                    />

                    <ProjectItem
                    title='Per(n)sonal Budgetting'
                    backgroundImg={transImg}
                    frameworks="PostgreSQL / Express / React.js / Node.js"
                    githubUrl='https://github.com/AlexParis31/Capstone-Front'
                    herokuUrl='https://pernsonalbudgetting.herokuapp.com/'
                    tech='Keep track of your past transactions, check your amount of remaining funds, and create budgets for future spending'
        
                    />

                    <ProjectItem
                    title='Per(n)sonal Budgetting'
                    backgroundImg={transImg}
                    frameworks="MongoDb / Typescript / Angular / Node.js"
                    githubUrl=''
                    herokuUrl=''
                    tech=''
        
                    />              
                   

                </div>
            </div>
        </div>
      </>
    );
};

export default Projects;