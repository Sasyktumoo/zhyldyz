import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ResultsSection from '@/components/ResultsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <ResultsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <ProfileSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
