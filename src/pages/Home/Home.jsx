import HeroSection from './sections/HeroSection'
import AboutSnippet from './sections/AboutSnippet'
import AcademicStages from './sections/AcademicStages'
import WhyChooseUs from './sections/WhyChooseUs'
import StatsSection from './sections/StatsSection'
import Testimonials from './sections/Testimonials'
import FAQSection from './sections/FAQSection'
import CTABanner from './sections/CTABanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <AcademicStages />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  )
}
