import React from 'react'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <div id='home' className='relative flex flex-col h-full w-full'>
        <video
        autoPlay 
        muted
        loop
        className='rotate-180 absolute top-[-440px] left-0 z-[1] w-full h-full object-cover'>
            <source src='/blackhole.mp4' type='video/mp4' />
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero