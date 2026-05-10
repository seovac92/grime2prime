import Image from "next/image"
//components
import RotatingText from "@/components/RotatingText/RotatingText"
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent"
import Dock from "@/components/FloatMenu/FloatMenu"

export default function Home() {
  //before changing everything
  return (
    <>
      {/* <header>
        
      </header> */}

      <main>
        <section className="relative h-screen">
          <Image
            src="/hero.webp"
            alt="Moving truck in Vancouver"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
          <div className="relative h-full z-20">
            <div className="absolute top-[30%] left-[47%] -translate-x-[50%] -translate-y-[50%] w-60 md:w-md lg:w-lg">
              <h1 className="inline-flex items-center whitespace-nowrap text-3xl font-bold md:text-6xl lg:text-7xl">
                WE DO{" "}
                <RotatingText
                  texts={["CLEANING", "MOVING"]}
                  mainClassName="inline-flex min-w-fit px-3 text-blue-500 overflow-hidden py-2 justify-center rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                    layout: {
                      duration: 0.4,
                    },
                  }}
                  rotationInterval={2000}
                  splitBy="characters"
                  auto
                  loop
                />{" "}
              </h1>
            </div>
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={true}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <Image
                src="/white-logo.png"
                alt="Grime 2 Prime logo"
                width={800}
                height={800}
                priority
                className="w-60"
              />
            </AnimatedContent>
          </div>
        </section>
      </main>

      <aside>{/* Sidebar, reklame, dodatne informacije, widgeti... */}</aside>

      <footer>
        <Dock panelHeight={68} baseItemSize={50} magnification={70} />
      </footer>
    </>
  )
}
