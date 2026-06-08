import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Services from '@/components/Services'
import Programs from '@/components/Programs'
import PlayerProfile from '@/components/PlayerProfile'
import HowItWorks from '@/components/HowItWorks'
import Requirements from '@/components/Requirements'
import Team from '@/components/Team'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="grain relative min-h-screen overflow-x-clip bg-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Programs />
        <PlayerProfile />
        <HowItWorks />
        <Requirements />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
