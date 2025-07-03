import {projects} from '../components/data';
import React, { useState } from 'react';


function Projects() {
 

  const [openProjectId, setOpenProjectId] = useState(null);

  
  return (
    <div  
      id="projects" 
      className={`
       text-black 
      grid grid-cols-1 md:px-20 lg:px-44 border mx-3 rounded-lg bg-gray-200 `}
    >
      {/* Projects list */}      
      <div className={`w-full animate-slide-down animation-delay-100`}>
        <h1 
          className={`flex justify-center w-full md:rounded-lg font-serif tracking-widest p-2 m-auto bg-gray-200 text-purple-950 list-disc list-inside`}
        >PROJECTS</h1>

        {projects.map((projectlist) => {
          return (
            <div 
              key={projectlist.id}
              className={`m-2 rounded-lg bg-white shadow-2xl`}  
            > 
            <div className='grid [grid-template-columns:3.5rem_1fr_3.5rem] mx-auto w-full bg-white border rounded-lg shadow-xl border-slate-300'>  
                <img 
                  src={projectlist.icon} 
                  className='object-contain w-10 h-10 mx-4 my-3 md:w-24 md:h-24'
                  alt="shoppic"
                />
                <div className='p-3 text-sm'>
                  <p className='font-semibold'>{projectlist.name}</p>
                  <p className='text-slate-600'>{projectlist.description}</p>
                </div>
                <button className='mx-4 my-3'>
                  <img 
                    src="./images/projects/right-arrow.png" 
                    className={`object-contain w-5 h-5 p-1 rounded-full shadow-md bg-slate-200 md:w-12 md:h-12
                      ${openProjectId === projectlist.id ? 'rotate-90' : ''}`}
                    alt="arrow-icon"
                    onClick={() => setOpenProjectId(openProjectId === projectlist.id ? null : projectlist.id)}
                  />              
                </button>

            </div>
            {console.log("Project ID:", projectlist.id, "| Has projects:", projectlist.projects)}
              
            {openProjectId === projectlist.id &&   projectlist.projects?.map((project) => {
                return (
                  <>
                    {/* PROJECT DETAILS */}
                    <div 
                        key={project.id}
                        open={openProjectId} 
                        className={`bg-white shadow-2xl z-40 transition-all transform duration-1000 ease-in-out overflow-hidden                                    
                        ${openProjectId === projectlist.id ? 'max-h-[3000px] animate-project-slide-down  scale-y-100' : 'max-h-0 scale-y-95'}`}>

                        {/* Project Title */}
                        <div className='m-2 text-white bg-purple-900 rounded-t-lg'>
                          <h1 
                            className={`
                            font-sans text-center py-2 text-base font-semibold`}
                          >{project.title}</h1>
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
                          <button className='mr-6'>
                            <img 
                              src="./images/projects/right-arrow.png"
                              className='object-contain w-5 h-5 p-1 rounded-full bg-slate-200 md:w-12 md:h-12'
                            />              
                          </button>
                        </div>
                        <p className='details'>{project.overview}</p>
                        
                        {/*  project features */}
                        <div className='flex justify-between border'>
                          <h2 className='header'>Features</h2>
                          <button className='mr-6'>
                            <img 
                              src="./images/projects/right-arrow.png"
                              className='object-contain w-5 h-5 p-1 rounded-full shadow-md bg-slate-200 md:w-12 md:h-12'
                            />              
                          </button>
                        </div>
                          {project.features?.map((feature, index) => (
                            <p key={index} className='details'>
                              {index + 1}. {feature}
                            </p>
                          ))}    

                        {/* project status */}
                        <div className='flex justify-between border'>
                          <h2 className='header'>Status</h2>
                          <button className='mr-6'>
                            <img 
                              src="./images/projects/right-arrow.png"
                              className='object-contain w-5 h-5 p-1 rounded-full shadow-md bg-slate-200 md:w-12 md:h-12'
                            />              
                          </button>
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
  );
}

export default Projects;