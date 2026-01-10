const OurServicesArticle = ({ title, subtitles, heroImg }) => {
  return (
    <article className="w-[90%] max-w-96 bg-gray-200 text-black border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.7)]">
      <h3 className="text-2xl text-center">{title}</h3>
      <div className="flex items-center pl-8">
        <ul className="list-disc">
          {subtitles.map((subtitle, i) => (
            <li key={i}>{subtitle}</li>
          ))}
        </ul>
        <div>
          <img src={`./${heroImg}.png`} alt={heroImg} />
        </div>
      </div>
    </article>
  )
}

export default OurServicesArticle
