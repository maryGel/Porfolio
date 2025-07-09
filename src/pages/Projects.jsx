import {projects} from '../components/data';
import React, { useState } from 'react';



function Projects() { 

  const [openProjectId, setOpenProjectId] = useState(null);
  
  return (
    <>
      <div id="projects" className={`text-black grid grid-cols-1 rounded-lg pt-2 pb-5 md:mx-10 md:border-none`}>
      
      {/* Projects list */}      
      <div className={`w-full animate-slide-down animation-delay-100`}>
        <h1 
          className={`flex justify-center w-full font-serif tracking-widest p-2  text-purple-950 md:rounded-lg lg:text-white lg:text-xl lg:pt-5 list-disc list-inside`}
        >PROJECTS</h1>

        {projects.map((projectlist) => {
          return (
            <div 
              key={projectlist.id}
              className={`m-6 rounded-lg bg-white shadow-2xl md:mx-5 lg:mx-10`}  
            > 
            <div 
              className={`grid [grid-template-columns:3.5rem_1fr_3.5rem] 
              mx-auto w-full bg-white border rounded-lg shadow-xl border-slate-300`}
            >  
              <img 
                src={projectlist.icon} 
                className={`object-contain w-10 h-10 mx-4 my-3 md:w-12 md:h-12 md:m-4`}
                alt="shoppic"
              />
              <div className='p-3 text-sm md:py-5 md:pl-8'>
                <p className='font-semibold'>{projectlist.name}</p>
                <p className='text-slate-600'>{projectlist.description}</p>
              </div>
              {/* Arrow button to toggle project details */}
              <button className='mx-4 my-3 md:m-1 '>
                <img 
                  src="./images/projects/right-arrow.png" 
                  className={`object-contain w-5 h-5 p-1 rounded-full shadow-md bg-slate-200
                    ${openProjectId === projectlist.id ? 'rotate-90' : ''}`}
                  alt="arrow-icon"
                  onClick={() => setOpenProjectId(openProjectId === projectlist.id ? null : projectlist.id)}
                />              
              </button>

            </div>
            {/* {console.log("Project ID:", projectlist.id, "| Has projects:", projectlist.projects)} */}
              
            {/* SLIDE DOWN PROJECT DETAILS */}
            {openProjectId === projectlist.id &&   projectlist.projects?.map((project) => {
                return (
                  <>
                    <div 
                        key={project.id}
                        open={openProjectId} 
                        className={`bg-white shadow-2xl z-40 transition-all mt-2 transform duration-1000 ease-in-out overflow-hidden                                    
                        ${openProjectId === projectlist.id ? 'max-h-[3000px] animate-project-slide-down  scale-y-100' : 'max-h-0 scale-y-95'}`}>

                        {/* Project Title */}
                        <div className={`grid [grid-template-columns:1fr_6rem_6rem] [md:grid-template-columns:1fr_8rem_8rem] 
                          md:gap-2 p-2 md:m-2 justify-items-center items-center text-white bg-purple-900 rounded-t-lg`}>
                          <h1 
                            className={`
                            font-sans text-center pt-2 text-base font-semibold`}
                          >{project.title}</h1>
    
                            <button className='flex items-center justify-center gap-1 px-2 py-1 text-xs border rounded-md md:gap-2'
                              onClick={() => window.open(project.git, '_blank')}   
                            >
                              Github
                              <img
                                src="./images/projects/github.png" 
                                className={`object-contain w-5 h-5 bg-transparent shadow-md bg-slate-200
                                  `}
                                alt="github-icon"                                                             
                              />
                            </button>
                            <button className='flex items-center justify-center w-24 gap-2 p-1 text-xs border rounded-md'
                              onClick={() => window.open(project.link, '_blank')}   
                            >
                              View App
                            <img 
                              src="./images/projects/share.png" 
                              className={`object-contain w-5 h-5 bg-transparent shadow-md bg-slate-200
                              `}
                              alt="link-icon"                                                            
                            />              
                            </button>
                       
                        </div>
                        {/* Scrollable project images */}
                        <div className='p-4 m-2 overflow-x-auto bg-black/50 whitespace-nowrap scroll-smooth snap-x snap-mandatory'>
                          <div className='flex gap-4'>
                          {project.images.map((image, index) => (
                            <img key={index} src={image} alt={`Project ${project.id} image ${index + 1}`}
                              className='object-cover h-40 p-2 rounded-lg shadow-lg bg-slate-200 w-60 md:w-96 md:h-80'
                            />
                          ))}
                          </div>
                        </div>

                        {/* project overview */}
                        <div className='flex justify-between border'>
                          <h2 className='header'>Overview</h2>  

                        </div>
                        <p className='details'>{project.overview}</p>
                        
                        {/*  project features */}
                        <div className='flex justify-between border'>
                          <h2 className='header'>Features</h2>

                        </div>
                          {project.features?.map((feature, index) => (
                            <p key={index} className='details'>
                              {index + 1}. {feature}
                            </p>
                          ))}    

                        {/* project status */}
                        <div className='flex justify-between border'>
                          <h2 className='header'>Status</h2>
                        </div>
                          <p className='rounded-b-lg details'>{project.status}</p>
                    </div>             
                  </>
                )
              })
              }
               
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default Projects;