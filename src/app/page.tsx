import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import OverviewSection from '@/components/OverviewSection'
import CurriculumSection from '@/components/CurriculumSection'
import InstructorSection from '@/components/InstructorSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <CurriculumSection />
        <InstructorSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
