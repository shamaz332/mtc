import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutUsSection from '@/components/AboutUsSection';

export default function Home() {
  return (
    <main className="relative w-full h-auto min-h-screen max-w-[2000px] mx-auto overflow-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      {/* Other sections will go here */}
    </main>
  );
}
