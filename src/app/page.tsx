import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import FounderSection from '@/components/sections/FounderSection'
import TechStackSection from '@/components/sections/TechStackSection'
import FaqSection from '@/components/sections/FaqSection'
import FinalCtaSection from '@/components/sections/FinalCtaSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <CaseStudiesSection />
        <ProcessSection />
        <FounderSection />
        <TechStackSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
