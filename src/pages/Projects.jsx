import {projects} from '../components/data';


function Projects() {
  return (
    <div  
      id="projects" 
      className={`
      object-cover h-screen overflow-y-auto text-black bg-center bg-no-repeat bg-cover
      grid grid-cols-1 gap-4 py-5 md:px-20 lg:px-44 `}
    >
      
      <h1 
        className={`flex justify-center w-full md:rounded-lg py-3 font-serif tracking-widest 
        text-purple-950 border bg-white/40 shadow-xl border-fuchsia-800`}
      >PROJECTS</h1>
      
      <div className={`w-full animate-slide-down animation-delay-1000`}>
        {projects.map((project) => {
          return (
            <div 
              key={project.id}
              className='mx-10 rounded-lg shadow-2xl bg-white/45'  
            > 
              {/* Ptoject Title */}
            <div className='mt-2 text-white bg-purple-900 rounded-t-lg'>
             <h1 
              className={`
              font-sans text-center py-2 text-base font-semibold`}
            >{project.title}</h1>
            
            </div>
              {/* Scrollable project images */}
            <div className='p-4 mt-3 overflow-x-auto bg-black/50 whitespace-nowrap scroll-smooth snap-x snap-mandatory'>
              <div className='flex gap-4'>
              {project.images.map((image, index) => (
                <img key={index} src={image} alt={`Project ${project.id} image ${index + 1}`}
                  className='object-cover h-40 p-2 rounded-lg shadow-lg bg-slate-200 w-60 md:w-96 md:h-80'
                />
              ))}
              </div>
            </div>

              {/* description */}
              <h2 className='header'>Overview</h2>
              <p className='details'>{project.overview}</p>
              <h2 className='header'>Features</h2>
                {project.features?.map((feature, index) => (
                  <p key={index} className='mb-2 details'>
                    {index + 1}. {feature}
                  </p>
                ))}                  
              <h2 className='header'>Status</h2>
              <p className='mb-10 rounded-b-lg details'>{project.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;