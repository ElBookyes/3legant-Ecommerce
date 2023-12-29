import PopUpNav from "./nav/PopUpNav"
import Nav from "./nav/Nav"
import HeroSection from "./components/HeroSection"
import BannerGrid from "./components/BannerGrid"

export default function Home() {
  return (
    <>
    <header>
      <PopUpNav/>
      <Nav />
    </header> 
    <main>
      <HeroSection />
      <BannerGrid />
    </main>
    </>
  )
}
