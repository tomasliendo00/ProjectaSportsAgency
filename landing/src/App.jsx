import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Programs from './components/Programs.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Requirements from './components/Requirements.jsx'
import Team from './components/Team.jsx'
import ContactCTA from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Programs />
        <HowItWorks />
        <Requirements />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
