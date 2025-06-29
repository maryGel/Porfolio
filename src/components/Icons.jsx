function IconItems() {
  return (
    <div className='flex justify-between w-full px-5 my-20 font-serif md:px-32 lg:px-64'>
      <div className='justify-center block w-20 text-center'>
        <img src="./images/html.png" alt="html"
          className='w-8 h-8 mx-auto mb-4 lg:w-16 lg:h-16'
        />
        <p>HTML</p>
      </div>
      <div className='justify-center block w-20 text-center'>
        <img src="./images/css.png" alt="html"
          className='w-8 h-8 mx-auto mb-4 lg:w-16 lg:h-16'
        />
        <p>CSS</p>
      </div>
      <div className='justify-center block w-20 text-center'>
        <img src="./images/tailwind.png" alt="html"
          className='w-8 h-8 mx-auto mb-4 lg:w-16 lg:h-16'
        />
        <p>Tailwind</p>
      </div>
      <div className='justify-center block w-20 text-center'>
        <img src="./images/js.png" alt="html"
          className='w-8 h-8 mx-auto mb-4 lg:w-16 lg:h-16'
        />
        <p>JavaScript</p>
      </div>
      <div className='justify-center block w-20 text-center'>
        <img src="./images/react.png" alt="html"
          className='w-8 h-8 mx-auto mb-4 lg:w-16 lg:h-16'
        />
        <p>React JS</p>
      </div>   
    </div>
  );
}

export default IconItems;