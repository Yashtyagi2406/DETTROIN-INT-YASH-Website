import HeroSection from './sections/HeroSection'
import TickerBanner from '../../components/TickerBanner/TickerBanner'
import AboutSnippet from './sections/AboutSnippet'
import AcademicStages from './sections/AcademicStages'
import AdmissionCalculator from '../../components/AdmissionCalculator/AdmissionCalculator'
import WhyChooseUs from './sections/WhyChooseUs'
import StatsSection from './sections/StatsSection'
import Testimonials from './sections/Testimonials'
import FAQSection from './sections/FAQSection'
import CTABanner from './sections/CTABanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TickerBanner />
      <AboutSnippet />
      <AcademicStages />
      <AdmissionCalculator />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  )
}
