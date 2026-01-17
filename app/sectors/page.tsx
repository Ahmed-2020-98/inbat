import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TargetSectors from "@/components/TargetSectors";

export const metadata: Metadata = {
  title: "القطاعات المستهدفة | إنبات القابضة",
  description: "نخدم مختلف القطاعات والمؤسسات التي تسعى للتميز في المجال الزراعي. من الجهات الحكومية إلى المستثمرين والشركات.",
};

export default function SectorsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-primary-dark to-primary-dark/95 text-offWhite py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">القطاعات المستهدفة</h1>
          <p className="text-xl text-offWhite/90 max-w-2xl mx-auto">
            نخدم مختلف القطاعات والمؤسسات التي تسعى للتميز في المجال الزراعي
          </p>
        </div>
      </section>
      <TargetSectors />
      <Footer />
    </main>
  );
}
