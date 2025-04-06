"use client"
import React, { useState } from 'react'
import project2 from '@/public/projects/project-chat-url.png'
import Image from 'next/image'
import project3 from '@/public/projects/object-detection.png'
import project1 from '@/public/projects/project-apple.png'


const projects = [
    {
        
        id: 1,
        year: 2025,
        title: 'Real-Time Object Detection',
        description: 'Built a browser-based app using COCO-SSD to detect objects with 80%+ accuracy in real-time via webcam. Optimized with Next.js for 30% faster load times and smooth, client-side inference. Enabled responsive UI with live object labeling and full cross-device support.Tech Stack: Next.js, TensorFlow.js, JavaScript',
        image: project3,
        link: 'https://object-detection-next-js-sage.vercel.app/'
    },
    {
        id: 2,
        year: 2024,
        title: 'Chat With URL',
        description: '"Chat with URL" is a GenAI-powered Q&A chatbot that allows users to interact with web content by inputting a URL. It uses Retrieval-Augmented Generation (RAG) and Google LLM to provide detailed, context-aware answers.',
        image: project2,
        link: 'https://omkar2240-chat-with-url-url-lkgqmu.streamlit.app/'
    },
    {
        id: 3,
        year: 2025,
        title: 'Apple Macbook Landing Page',
        description: "Built a MacBook Pro landing page with a focus on modern web design! Designed a visually appealing and responsive user interface Integrated stunning visuals to enhance product presentation. This project helped me improve my frontend development skills, especially in building responsive and aesthetically engaging web pages. Technologies used: Next.js, Three.js, React Router Dom, TyeScript, Tailwindcss, and Drei. ",
        image: project1,
        link: 'https://macbooklandingpage.vercel.app/'
    }
]

const Project = () => {
    const [SelectedProjects, setSelectedProjects] = useState(projects[0])
    return (
        <section  className='text-white pb-20 ' >
            <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12  '>
                <div>
                    <h2 className='text-6xl mb-3 font-bold'>Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}Projects{" "}
                    </span></h2>
                    <h2 className=' mb-8 text-gray-500'>Click on image to preview the projects</h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProjects(project)}
                            className='cursor-pointer mb-8 group'>
                            <p className='text-gray-400 text-lg mb-2'>{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${SelectedProjects.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                                {project.title}
                            </h3>
                            {SelectedProjects.id === project.id && (
                                <div className='border-b-2 border-gray-200 my-4'></div>
                            )}
                            {SelectedProjects.id === project.id && (
                                <p className='text-gray-400 transition-all duartion-500 ease-in-out '>
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className='border-3 h-[458px]'>
                <a href={SelectedProjects.link} target='_blank'>
                    <Image src={SelectedProjects.image.src}
                        alt={SelectedProjects.title}
                        className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out'
                        style={{ width: 800, height: 450 }}
                        width={800}
                        height={350} />
                </a>
                </div>
            </div>
        </section>
    )
}

export default Project