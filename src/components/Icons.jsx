function IconItems() {
  return (
<div className='flex justify-between w-full px-5 my-20 font-serif md:my-24 md:px-32 xl:px-40'>
  {[
    { src: './images/html.png', label: 'HTML' },
    { src: './images/css.png', label: 'CSS' },
    { src: './images/tailwind.png', label: 'Tailwind' },
    { src: './images/js.png', label: 'JavaScript' },
    { src: './images/react.png', label: 'React JS' },
  ].map((tech, i) => (
    <div
      key={i}
      className={`w-20 text-center md:p-2 lg:mt-12 md:text-purple-950  md:rounded-lg lg:text-white opacity-0 animate-slide-up animation-delay-${i * 100}`}
    >
      <img
        src={tech.src}
        alt={tech.label}
        className='w-8 h-8 mx-auto mb-4 lg:text-white lg:w-12 lg:h-12'
      />
      <p>{tech.label}</p>
    </div>
  ))}
</div>
  );
}

export default IconItems;