const HowItWorksArticle = ({ title, heroImg }) => {
  return (
    <article className="w-[90%] max-w-80 bg-gray-200 text-black border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.7)]">
      <h3 className="text-2xl text-center border-b-2">{title}</h3>
      <div>
        <div>
          <img src={`./${heroImg}.png`} alt={heroImg} />
        </div>
      </div>
    </article>
  )
}

export default HowItWorksArticle
