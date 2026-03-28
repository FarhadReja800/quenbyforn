import FchccNews from "./_components/FcgccNews"
import FCHCCMedia from "./_components/FchccMedia"
import Hero from "./_components/Hero"
import CorporateMarquee from "./_components/Partners"
import Video from "./_components/Video"
import WhoWeAre from "./_components/WhoAreYou"



const Home = () => {
  return (
    <div>
     <Hero/>
     <CorporateMarquee/>
     <Video/>
     <WhoWeAre/>
     <FchccNews/>
     <FCHCCMedia/>
    </div>
  )
}

export default Home
