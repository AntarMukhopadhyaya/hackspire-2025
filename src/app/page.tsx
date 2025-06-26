import HeroSection from "@/components/HeroSection";
import AboutTheme from "@/components/AboutTheme";
import TracksSection from "@/components/TracksSection";
import ScheduleSection from "@/components/ScheduleSection";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black ">
      <HeroSection />
      <AboutTheme />
      <TracksSection />
      <ScheduleSection />
      <CountdownTimer />
      <Footer />
    </main>
  );
}
