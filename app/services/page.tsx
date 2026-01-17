import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "خدماتنا | إنبات القابضة",
  description: "حلول زراعية متكاملة تغطي جميع احتياجات القطاع الزراعي. من التخطيط والدراسات إلى الإدارة والتشغيل والتدريب.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-primary-dark to-primary-dark/95 text-offWhite py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا</h1>
          <p className="text-xl text-offWhite/90 max-w-2xl mx-auto">
            حلول زراعية متكاملة تغطي جميع احتياجات القطاع الزراعي
          </p>
        </div>
      </section>
      <Services />
      <Footer />
    </main>
  );
}
