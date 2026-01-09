const StrokedCloud = ({ text, textSecondRow }) => {
  return (
    <div className="relative w-75 md:w-100 md:absolute md:top-[30%] md:right-[0%] lg:right-[15vw]">
      <img src="./strokedCloud.svg" alt="stroked cloud" />
      <div className="absolute w-52 md:w-80 top-[50%] left-0 flex flex-col translate-x-16 -translate-y-16 md:-translate-y-20">
        <strong className="text-2xl font-bold text-[#121212] md:text-4xl">
          {text}
        </strong>
        <strong className="text-2xl font-bold text-[#121212] md:text-4xl">
          {textSecondRow}
        </strong>
      </div>
      <div className="absolute bottom-6 left-[50%] -translate-x-[50%] w-full flex justify-center">
        <button className="p-1 bg-white border-2 border-black text-black text-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.7)]">
          Get a quote
        </button>
        <button className="ml-3 p-1 bg-white border-2 border-black text-black text-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.7)]">
          Book now
        </button>
      </div>
    </div>
  )
}

export default StrokedCloud
