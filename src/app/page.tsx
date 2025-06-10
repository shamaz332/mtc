import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <main className="relative w-full h-auto min-h-screen max-w-[2000px] mx-auto overflow-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      {/* Other sections will go here */}
    </main>
  );
}
