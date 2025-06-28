import { intro } from '../components/data';

function MobileHome({showMore, setShowMore}) {
  return (
    <>
      <div className={`bg-[url('/images/Background.jpg')] w-full md:hidden mt-20 justify-center py-2`}>
        <img src="/images/Profile.jpg"
          className={`rounded-full mx-auto shadow-2xl w-64 h-64 border 
            scale-75  md:scale-100 lg:scale-125
            lg:my-20 lg:ml-32 
            `}
        />
        <div className={`px-10 py-2 text-xs text-center leading-relaxed text-white font-light
          `}>
          <p>React Developer</p>
          <p
            className='pb-2 mt-3 font-serif text-2xl leading-relaxed'
            >Hi, I'm Angel!
          </p>
          <hr/>
          <p className={`pt-5 text-justify leading-relaxed ${!showMore ? 'line-clamp-3' : ''}`}>{intro}</p>  
          <button
            className='p-3 mt-2 font-serif text-xs text-white bg-yellow-600 hover:underline'
            onClick={() => setShowMore(prev => !prev)}
          >
            {showMore ? 'View less' : 'View more'}
          </button>     
        </div>
      </div>

    </>
  );
}

export default MobileHome;