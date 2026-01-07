import CircularText from "@/components/CircularText/CircularText"
import ShinyText from "../components/ShinyText/ShinyText"
import TrueFocus from "@/components/TrueFocus/TrueFocus"

export default function Home() {
  //bg-[#a583bb]
  //bg-[#bb8483]
  return (
    <main className="bg-[#a583bb]">
      <section className="flex py-10">
        <div className="pt-10">
          <img src="./woman.png" alt="woman" />
        </div>
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
      </section>
      {/* <CircularText
        text="CLEANING*MOVING*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      /> */}
      <TrueFocus
        sentence="Moving Cleaning"
        manualMode={false}
        blurAmount={5}
        borderColor="darkblue"
        animationDuration={1}
        pauseBetweenAnimations={1}
      />
    </main>
  )
}
