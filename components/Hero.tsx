import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-dark/95 to-primary-dark/90">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Agriculture Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-primary-dark/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-offWhite">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          الريادة في تطوير الزراعة
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          نحو مستقبل زراعي ذكي ومستدام متوافق مع رؤية السعودية 2030
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/services" className="btn-primary flex items-center gap-2 group">
            خدماتنا
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="btn-secondary border-2 border-offWhite flex items-center gap-2 group">
            كن شريكًا معنا
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-dark to-transparent"></div>
    </section>
  );
}
