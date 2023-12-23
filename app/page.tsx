import PopUpNav from "./nav/PopUpNav"
import Nav from "./nav/Nav"
import HeroSection from "./components/HeroSection"

export default function Home() {
  return (
    <>
    <header>
      <PopUpNav/>
      <Nav />
    </header> 
    <main>
      <HeroSection />
    </main>
    </>
  )
}
