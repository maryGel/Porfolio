import { skills } from '../components/data';

function Skills() {
  return (
    <div  
    id="skills" 
    className={`bg-[url('/images/Background.jpg')] lg:bg-none bg-cover  text-black grid grid-cols-1 pt-5
       lg:mt-10
      `}
     >
      <h1 
        className={`flex justify-center w-full font-serif tracking-widest p-2 m-auto md:p-5 lg:text-xl text-white `}
      >SKILLS</h1>

      <div className={`w-full animate-slide-down animation-delay-100 grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 lg:gap-5 lg:p-5`}>
          {skills.map((skill) => {
            return (
              <div className={`m-2 rounded-lg bg-white opacity-90 shadow-2xl md:mx-5 lg:mx-6 border border-purple-950`}>
                <div>
                  <div className='flex justify-center p-2 text-base font-semibold bg-black/10 text-purple-950 lg:m-3'>
                    <p>{skill.name}</p>  
                  </div>
                  <div className='flex justify-center'>
                    {skill.icons.map((icon, index) => {
                      return (
                        <img 
                          key={index} 
                          src={icon} 
                          className='object-contain w-6 h-6 m-2' 
                          alt={`skill-icon-${index}`} 
                        />
                      )
                    }
                    )}
                  </div>
                    {skill.items.map((item) => {
                      return (
                        <div key={item.id} className='p-2 font-thin'>
                        <h2 className='pl-4 text-sm font-semibold lg:text-base'>{item.item}</h2>
                        <p className='py-1 pl-8 text-sm lg:text-base'>{item.description}</p>
                        </div>
                      )
                    })}
                </div>
              </div>             
            )
          })}     
      </div>
    </div>
  );
}

export default Skills;