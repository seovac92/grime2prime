//components
import StrokedCloud from "@/components/StrokedCloud/StrokedCloud"
import ShinyText from "../components/ShinyText/ShinyText"
import TrueFocus from "@/components/TrueFocus/TrueFocus"
import OurServicesArticle from "@/components/OurServicesArticle/OurServicesArticle"
import HowItWorksArticle from "@/components/HowItWorksArticle/HowItWorksArticle"
//data
import { OURSERVICES } from "@/data/ourservices"
import { HOWITWORKS } from "@/data/howitworks"

export default function Home() {
  return (
    <>
      {/* <header></header> */}
      <main className="m-2 border-2 border-black md:m-4 bg-[radial-gradient(circle_at_center,#b79ad0_0%,#8f6bb1_55%,#6f4a93_100%),repeating-radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0_10px,rgba(0,0,0,0)_10px_20px)] bg-blend-overlay">
        <section className="relative flex flex-col items-center md:flex-row-reverse md:items-start md:justify-end">
          <div className="p-1 bg-[#f2f2f2] border-2 border-black">
            <ShinyText
              text="Grime2prime"
              miniText="Cleaning&Moving"
              speed={3}
              delay={0}
              color="#121212"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
            />
          </div>
          <div className="max-w-120">
            <img src="./womanHero.png" alt="cleaning hero" />
          </div>
          {/* <div className="max-w-120">
            <img src="./movingHero.png" alt="moving hero" />
          </div> */}
          <StrokedCloud
            width={400}
            text="Clean & move"
            textSecondRow="like a pro!"
          />
        </section>
        <TrueFocus
          sentence="Moving Cleaning"
          manualMode={false}
          blurAmount={5}
          borderColor="darkblue"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </main>
      <aside>
        {/* OUR SERVICES */}
        <section
          className="relative m-2 pb-6 border-2 border-black md:m-4 bg-[#214888]
    bg-[repeating-linear-gradient(120deg,rgba(0,0,0,0.05)_0_2px,rgba(0,0,0,0)_2px_6px)]"
        >
          <img
            className="absolute top-10 right-0 w-20 md:w-24 md:-top-11 lg:w-44 lg:-top-20"
            src="./questionMark.png"
            alt="question mark"
          />
          <div className="w-fit p-1 bg-[#f2f2f2] border-2 border-black">
            <h2 className="text-black text-4xl font-bold md:text-5xl">
              OUR SERVICES
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-6 md:flex-row md:items-stretch">
            {OURSERVICES.map((item) => (
              <OurServicesArticle
                key={item.id}
                title={item.title}
                subtitles={item.subtitles}
                heroImg={item.heroImg}
              />
            ))}
          </div>
        </section>
        {/* HOW IT WORKS */}
        <section
          className=" relative
    m-2 pb-6 border-2 border-black md:m-4
    bg-[#218842]
    bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.05)_0_2px,rgba(0,0,0,0)_2px_6px)]
  "
        >
          <img
            className="absolute top-10 right-0 w-20 md:w-24 md:-top-11 lg:w-44 lg:-top-20 lg:right-[50%] lg:translate-x-[50%]"
            src="./warrningMark.png"
            alt="warrning mark"
          />
          <div className="w-fit p-1 bg-[#f2f2f2] border-2 border-black">
            <h2 className="text-black text-4xl font-bold md:text-5xl">
              HOW IT WORKS
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-6 md:flex-row md:items-stretch">
            {HOWITWORKS.map((item) => (
              <HowItWorksArticle
                key={item.id}
                title={item.title}
                heroImg={item.heroImg}
              />
            ))}
          </div>
        </section>
      </aside>
      <footer></footer>
    </>
  )
}
