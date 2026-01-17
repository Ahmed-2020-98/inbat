import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Handshake, Users, Network, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الشراكات | إنبات القابضة",
  description: "نؤمن بقوة التعاون والشراكات الاستراتيجية لتحقيق النجاح. شراكات مع الشركات والمؤسسات البحثية والحكومية.",
};

export default function PartnershipsPage() {
  const partnershipTypes = [
    {
      icon: Handshake,
      title: "شراكات استراتيجية",
      description: "تعاون مع الشركات والمؤسسات الكبرى لتطوير مشاريع زراعية مستدامة",
    },
    {
      icon: Users,
      title: "شراكات بحثية",
      description: "تعاون مع الجامعات والمراكز البحثية لدفع عجلة الابتكار",
    },
    {
      icon: Network,
      title: "شبكة إيفارا العالمية",
      description: "وصول إلى شبكة واسعة من الشركاء والخبرات الدولية من خلال مجموعة إيفارا",
    },
    {
      icon: Target,
      title: "شراكات حكومية",
      description: "شراكة مع الجهات الحكومية لتحقيق أهداف رؤية السعودية 2030",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-primary-dark to-primary-dark/95 text-offWhite py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الشراكات</h1>
          <p className="text-xl text-offWhite/90 max-w-2xl mx-auto">
            نؤمن بقوة التعاون والشراكات الاستراتيجية لتحقيق النجاح
          </p>
        </div>
      </section>

      <section className="section-container bg-offWhite">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="card hover:border-primary-light border-2 border-transparent transition-all group">
                <div className="w-16 h-16 bg-primary-light/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-light/30 transition-colors">
                  <partnership.icon className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">{partnership.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{partnership.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary-dark to-primary-dark/90 text-offWhite rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">كن شريكًا معنا</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              إذا كنت تبحث عن شريك استراتيجي في القطاع الزراعي، نحن هنا لمساعدتك
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
