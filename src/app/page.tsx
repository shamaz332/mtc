import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Header />
      <HeroSection />
      {/* Other sections will go here */}
    </main>
  );
}
