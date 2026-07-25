import HeroSection from './sections/HeroSection'
import AboutSnippet from './sections/AboutSnippet'
import ProgramsSection from './sections/ProgramsSection'
import WhyChooseUs from './sections/WhyChooseUs'
import StatsSection from './sections/StatsSection'
import Testimonials from './sections/Testimonials'
import CTABanner from './sections/CTABanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ProgramsSection />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <CTABanner />
    </>
  )
}
