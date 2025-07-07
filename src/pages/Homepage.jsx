import { useState } from 'react';
import { intro } from '../components/data';
import MobileHome from '../components/MobileHome';
import IconItems from '../components/Icons';

function HomePage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className={`md:bg-[url('/images/Background.jpg')] lg:bg-none  hidden w-full md:flex mt-20 lg:pt-10 lg:h-auto`}>
        
        <img src="/images/Profile.jpg"
          className={`rounded-full ml-10 my-10 shadow-2xl border w-64 h-64 md:w-52 md:h-52 lg:w-60 lg:h-60 md:my-20
            lg:my-16 lg:ml-10 animate-slide-right animation-delay-1000 
            `}
        />
        <div className={`px-10 py-20 text-xs leading-relaxed text-white font-light
          md:pt-24 lg:pt-20 xl:text-xl lg:text-base animate-slide-left animation-delay-1000
          `}>
          <p
            className='text-3xl md:text-lg lg:text-2xl'
          >React Developer</p>
          <p
            className='mt-2 font-serif text-5xl leading-relaxed md:text-2xl lg:text-5xl'
            >Hi, I'm Angel!
          </p>
          <p className={`pt-5 lg:text-base lg:bg-black/50 leading-relaxed ${!showMore ? 'line-clamp-2' : ''}`}>{intro}</p>  
          <button
            className='p-3 mt-2 font-serif text-xs text-white bg-yellow-600 hover:underline'
            onClick={() => setShowMore(prev => !prev)}
          >
            {showMore ? 'View less' : 'View more'}
          </button>     
        </div>
      </div>
      <MobileHome 
        showMore ={showMore}
        setShowMore ={setShowMore}
      />
      <IconItems />
    </>
  );
}

export default HomePage;