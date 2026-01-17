import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import Companies from "@/components/Companies";
import WhyInbat from "@/components/WhyInbat";
import Services from "@/components/Services";
import TargetSectors from "@/components/TargetSectors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <VisionMission />
      <Values />
      <Companies />
      <WhyInbat />
      <Services />
      <TargetSectors />
      <Footer />
    </main>
  );
}
