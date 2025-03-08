
import About from '@/components/main/About'
import Contact from '@/components/main/Contact'
import Hero from '@/components/main/Hero'
import Project from '@/components/main/Project'
import Skills from '@/components/main/Skills'
import React from 'react'

const page = () => {
  return (
    <main className='h-full w-full'>
    <div className='flex flex-col h-[850px] gap-20 '>
       <Hero />
       <div > 
        <About />
       </div>
       <Skills />
       <div >
         <Project />
       </div>
       <div id='contact'>
        <Contact />
       </div>
    </div>
    </main>
  )
}

export default page