function Contact() {
  return (
    <>
      <div id="contact" className={`grid grid-cols-1 mt-14  rounded-lg pb-5 xl:m-20`}>
        <div id='aboutme' className={`w-full animate-slide-down animation-delay-100`}>
          <h1 className='flex justify-center w-full p-2 font-serif tracking-widest list-disc list-inside lg:text-white text-purple-950 md:rounded-lg lg:text-xl lg:py-5 lg:mb-5'>
            CONTACT
          </h1>

          {/* Contact details */}

            {/* mobile */}
          <div className='grid grid-cols-1 pt-10 text-center lg:grid-cols-3 lg:bg-white lg:rounded-xl'>
            <div className='flex items-center justify-center p-2'>
              <img className='w-8 h-8' src="./images/contact/phone.png" />
              <p className='flex p-1'> ( +63 <img className='w-6 h-6 p-1' src="./images/contact/ph-flag.png"></img> ) - 915-6619-251</p>
            </div>
            {/* email */}
            <div className='flex items-center justify-center p-2'>
              <img className='w-8 h-8' src="./images/contact/email.png" />
              <a href="mailto:caguladamaryangel@gmail.com" className='p-2 text-blue-600 underline cursor-pointer'> caguladamaryangel@gmail.com</a>
            </div>
              {/* download resume + linkedin */}
              <div className='flex items-center justify-center gap-4 p-2 m-auto lg:gap-12'>                
                <a 
                  href="/files/MaryAngel_Cagulada.pdf"
                  download="MaryAngel_Cagulada.pdf"
                  className='flex items-center justify-center p-1 px-3 mx-auto my-5 text-sm border border-gray-400 rounded-lg shadow-md'
                >
                  <img className='w-6 h-6' src="./images/contact/download.png" alt="dlresume" />
                  <p className='p-2 text-purple-900'>Resume</p>
                </a>
                <button className='flex items-center justify-center px-3 py-1 mx-auto cursor-pointer md:px-1 '>
                  <a href="https://www.linkedin.com/in/mary-angel-cagulada-7118122b2/" target="_blank" rel="noopener noreferrer">
                    <img className='w-10 h-10' src="./images/contact/linkedin.png" alt="linkedIn"/>
                  </a>
                </button>
              </div>
            </div>  
        </div>
      </div>
      
    </>
  );
}

export default Contact;