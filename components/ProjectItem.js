import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Github from '../public/assets/skills/Github.png';
import Links from '../public/assets/skills/Link.png';

const ProjectItem = ({title, backgroundImg, tech, frameworks, githubUrl, herokuUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>

        <Image className='rounded-xl group-hover:opacity-0' src={backgroundImg} alt='/' /> 

        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>
            
            
            
                <p className='text-center py-3  bg-white text-gray-700 font-bold text-4xl cursor-pointer my-4'>{title}</p>

                <h3 className='font-Montserrat text-xl text-white tracking-wider text-center'>{frameworks}</h3>
            
            <p className='pb-4 pt-2 text-white text-center my-4'>{tech}</p>
            <div className='flex justify-center'>
            <Link href={githubUrl} target="_blank" className='mr-5'>
                <Image src={Github} width='64px' height='64px' alt='/'  />
            </Link>
            <Link href={herokuUrl} target="_blank">
              <Image src={Links} width='64px' height='64px' alt='/'  />
            </Link>
            </div>
        </div>
        
    </div>
  )
}

export default ProjectItem