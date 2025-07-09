import { aboutme } from '../components/data';

function AboutMe() {


  return (
    <>
    <div
      id="aboutme" 
      className={`grid grid-cols-1 mt-14  rounded-lg
        pb-5 xl:m-20
        `}
    >
      <div
        id='aboutme'
        className={`w-full animate-slide-down animation-delay-100`}
      >
        <h1
          className='flex justify-center w-full p-2 font-serif tracking-widest list-disc list-inside lg:text-white text-purple-950 md:rounded-lg lg:text-xl lg:py-5 lg:mb-5'
        >
          ABOUT ME
        </h1>
      </div>
        {/* About Me content */}
      <div className={`bg-[url('/images/Background.png')] relative bg-object-cover lg:rounded-lg grid grid-cols-1`}>
        {/* Background Image + Gradient Layer */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/80 to-black/50"></div>
        {aboutme.map((item) => {
          return(
            <div key={item.id} className={`m-10 rounded-lg z-20 text-white text-justify shadow-2xl md:mx-5 lg:mx-10`}>
              <p className='p-5 font-thin'>{item.description}</p>  
              <p className='flex justify-center mt-5 font-semibold tracking-wider text-white uppercase'>Certificates</p>     
              <div className='grid grid-cols-2 gap-4 p-8 sm:px-20 lg:gap-5 lg:px-28'>
                {/* Certificate Images */}
                
                <a><img className='cursor-pointer' onClick={() => window.open(item.links[0], '_blank')} src="./images/certificates/Cert1.png"/></a>
                <a><img className='cursor-pointer' onClick={() => window.open(item.links[1], '_blank')} src="./images/certificates/Cert2.png"/></a>
                <a><img className='cursor-pointer' onClick={() => window.open(item.links[2], '_blank')} src="./images/certificates/Cert3.png"/></a>
                <a><img className='cursor-pointer' onClick={() => window.open(item.links[3], '_blank')} src="./images/certificates/Cert4.png"/></a>

              </div>

            </div>
            
          );
        })}     
        
      </div>

    </div>
      
    </>
  );
}

export default AboutMe;