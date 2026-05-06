import Image from "next/image"
//components
import RotatingText from "@/components/RotatingText/RotatingText"
//data
import { OURSERVICES } from "@/data/ourservices"
import { HOWITWORKS } from "@/data/howitworks"

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
            <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-72 md:w-md lg:w-lg">
              <h1 className="inline-flex items-center whitespace-nowrap text-4xl font-bold md:text-6xl lg:text-7xl">
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
          </div>
        </section>
      </main>

      <aside>{/* Sidebar, reklame, dodatne informacije, widgeti... */}</aside>

      <footer>
        {/* Copyright, linkovi, kontakt... */}
        <address>
          Kontakt: <a href="mailto:info@example.com">info@example.com</a>
        </address>
      </footer>
    </>
  )
}
