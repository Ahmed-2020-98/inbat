import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";

export const metadata: Metadata = {
  title: "من نحن | إنبات القابضة",
  description: "تعرف على قصة إنبات القابضة، رؤيتنا، رسالتنا، وقيمنا. مجموعة شركات رائدة في القطاع الزراعي السعودي.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutSection />
      <VisionMission />
      <Values />
      <Footer />
    </main>
  );
}
