import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Microscope, Lightbulb, BookOpen, TrendingUp, Award, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "الأبحاث والابتكار | إنبات القابضة",
  description: "نسعى لدفع عجلة الابتكار في القطاع الزراعي من خلال البحث والتطوير. أبحاث متقدمة وحلول مبتكرة للزراعة المستدامة.",
};

export default function ResearchPage() {
  const researchAreas = [
    {
      icon: Microscope,
      title: "الأبحاث الزراعية المتقدمة",
      description: "إجراء أبحاث متخصصة في مختلف المجالات الزراعية باستخدام أحدث التقنيات",
    },
    {
      icon: Lightbulb,
      title: "الابتكار والتطوير",
      description: "تطوير حلول مبتكرة لمواجهة التحديات الزراعية المعاصرة",
    },
    {
      icon: BookOpen,
      title: "نقل المعرفة",
      description: "تبادل المعرفة والخبرات مع المؤسسات البحثية العالمية",
    },
    {
      icon: TrendingUp,
      title: "تحسين الإنتاجية",
      description: "أبحاث متخصصة لتحسين إنتاجية المحاصيل وجودتها",
    },
    {
      icon: Award,
      title: "الاستدامة",
      description: "البحث عن حلول مستدامة للزراعة توافق مع المعايير البيئية",
    },
    {
      icon: Globe,
      title: "الشراكات الدولية",
      description: "تعاون مع مراكز البحث العالمية لتحقيق أقصى استفادة",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-primary-dark to-primary-dark/95 text-offWhite py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الأبحاث والابتكار</h1>
          <p className="text-xl text-offWhite/90 max-w-2xl mx-auto">
            نسعى لدفع عجلة الابتكار في القطاع الزراعي من خلال البحث والتطوير
          </p>
        </div>
      </section>

      <section className="section-container bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="card hover:border-primary-light border-2 border-transparent transition-all group">
                <div className="w-16 h-16 bg-primary-light/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-light/30 transition-colors">
                  <area.icon className="w-8 h-8 text-primary-light" />
                </div>
                <h3 className="text-xl font-bold text-offWhite mb-3">{area.title}</h3>
                <p className="text-gray-300 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
