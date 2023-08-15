import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Hero from '../components/Hero.js'
import About  from '../components/About.js'
import Skills from '../components/Skills.js'
import Projects from '../components/Projects.js'
import Contact from '../components/Contact.js'
// import Main from '../components/Main.js'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>

        <title>Alex Parisi</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />

        
        
        
        
      </Head>

      <div >

      <Hero heading="Alex Parisi" message='Software Engineer'/>
      {/* <Main/> */}

      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
     
      
        
    </>
  )
}
