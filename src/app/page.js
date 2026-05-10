import Image from "next/image"
//components
import RotatingText from "@/components/RotatingText/RotatingText"
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent"
import Dock from "@/components/FloatMenu/FloatMenu"
import ShinyText from "@/components/ShinyText/ShinyText"

export default function Home() {
  //before changing everything
  return (
    <>
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
            <div>
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
                className="absolute top-[53%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
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
              <h1 className="absolute top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full text-center text-4xl md:top-[75%]">
                <ShinyText
                  text="GRIME 2 PRIME"
                  speed={2}
                  delay={0}
                  color="#4299e1"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </h1>
            </div>
          </div>
        </section>
        <section className="flex flex-col max-w-3xl my-10 mx-auto px-10 text-black">
          <article className="text-center">
            <h2 className="text-3xl text-center mb-5">ABOUT US</h2>
            <p>
              Based in Vancouver, we specialize in professional apartment
              cleaning and reliable moving services designed to make your life
              easier. Our goal is to provide fast, efficient, and high-quality
              service while ensuring every customer has a smooth and stress-free
              experience. Whether you are moving into a new home, relocating
              across the city, or simply need a deep and detailed cleaning, our
              team is committed to delivering dependable results with care and
              professionalism. We take pride in helping our clients keep their
              spaces clean, organized, and ready for a fresh start. At Grime 2
              Prime, customer satisfaction, attention to detail, and trustworthy
              service are at the center of everything we do.
            </p>
          </article>
          <article className="mt-8">
            <Image
              src="/logo.svg"
              alt="Grime 2 Prime logo"
              width={800}
              height={800}
              priority
              className="max-w-60 mx-auto"
            />
          </article>
        </section>
      </main>

      {/* <aside></aside> */}

      <footer>
        <Dock panelHeight={68} baseItemSize={50} magnification={70} />
      </footer>
    </>
  )
}
