import HeroSection from './sections/HeroSection'
import AboutSnippet from './sections/AboutSnippet'
import ProgramsSection from './sections/ProgramsSection'
import StatsSection from './sections/StatsSection'
import Testimonials from './sections/Testimonials'
import CTABanner from './sections/CTABanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ProgramsSection />
      <StatsSection />
      <Testimonials />
      <CTABanner />
    </>
  )
}
