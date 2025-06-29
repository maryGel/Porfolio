import { useState } from 'react';
import { intro } from '../components/data';
import MobileHome from '../components/MobileHome';
import IconItems from '../components/Icons';

function HomePage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className={`bg-[url('/images/Background.jpg')] hidden w-full md:flex mt-20`}>
        <img src="/images/Profile.jpg"
          className={`rounded-full ml-10 my-10 shadow-2xl w-64 h-64 border 
            scale-100  md:scale-100 lg:scale-125
            lg:my-20 lg:ml-32 
            `}
        />
        <div className={`px-10 py-20 text-xs leading-relaxed text-white font-light
          lg:pl-20 lg:pr-28 lg:pt-32 xl:text-xl lg:text-base
          `}>
          <p>React Developer</p>
          <p
            className='mt-2 font-serif text-2xl leading-relaxed'
            >Hi, I'm Angel!! 
          </p>
          <p className={`pt-5 leading-relaxed ${!showMore ? 'line-clamp-2' : ''}`}>{intro}</p>  
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