import StrokedCloud from "@/components/StrokedCloud/StrokedCloud"
import ShinyText from "../components/ShinyText/ShinyText"
import TrueFocus from "@/components/TrueFocus/TrueFocus"

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
        <section className="m-2 pb-6 border-2 border-black md:m-4 bg-[radial-gradient(circle_at_center,#b79ad0_0%,#8f6bb1_55%,#6f4a93_100%),repeating-radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0_10px,rgba(0,0,0,0)_10px_20px)] bg-blend-overlay">
          <div className="w-fit p-1 bg-[#f2f2f2] border-2 border-black">
            <h2 className="text-black text-4xl font-bold md:text-5xl">
              OUR SERVICES
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mt-6 md:flex-row md:items-stretch">
            <article className="w-[90%] max-w-96 bg-gray-200 text-black border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.7)]">
              <h3 className="text-2xl text-center">CLEANING</h3>
              <div className="flex items-center pl-8">
                <ul className="list-disc">
                  <li>House</li>
                  <li>Office</li>
                  <li>Spring</li>
                </ul>
                <div>
                  <img src="./cleaning.png" alt="cleaning" />
                </div>
              </div>
            </article>
            <article className="w-[90%] max-w-96 bg-gray-200 text-black mt-4 md:ml-4 md:mt-0 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.7)]">
              <h3 className="text-2xl text-center">MOVING</h3>
              <div className="flex items-center pl-8">
                <ul className="list-disc">
                  <li>Homes</li>
                  <li>Apartments</li>
                  <li>Offices</li>
                </ul>
                <div>
                  <img src="./moving.png" alt="moving" />
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* HOW IT WORKS */}
        <section className="m-2 pb-6 border-2 border-black md:m-4 bg-[radial-gradient(circle_at_center,#b79ad0_0%,#8f6bb1_55%,#6f4a93_100%),repeating-radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0_10px,rgba(0,0,0,0)_10px_20px)] bg-blend-overlay">
          <div className="w-fit p-1 bg-[#f2f2f2] border-2 border-black">
            <h2 className="text-black text-4xl font-bold md:text-5xl">
              HOW IT WORKS
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mt-6 md:flex-row md:items-stretch">
            <article className="w-[90%] max-w-80 bg-gray-200 text-black border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.7)]">
              <h3 className="text-2xl text-center border-b-2">
                1) GET A QUOTE
              </h3>
              <div>
                <div>
                  <img src="./quote.png" alt="get a quote" />
                </div>
              </div>
            </article>
            <article className="w-[90%] max-w-80 bg-gray-200 text-black mt-4 md:ml-4 md:mt-0 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.7)]">
              <h3 className="text-2xl text-center border-b-2">2) SCHEDULE</h3>
              <div>
                <div>
                  <img src="./schedule.png" alt="schedule" />
                </div>
              </div>
            </article>
            <article className="w-[90%] max-w-80 bg-gray-200 text-black mt-4 md:ml-4 md:mt-0 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.7)]">
              <h3 className="text-2xl text-center border-b-2">
                3) GET IT DONE
              </h3>
              <div>
                <div>
                  <img src="./done.png" alt="get it done" />
                </div>
              </div>
            </article>
          </div>
        </section>
      </aside>
      <footer></footer>
    </>
  )
}
