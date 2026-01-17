import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-container bg-offWhite">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="section-title text-right">قصة إنبات</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                إنبات القابضة هي مجموعة شركات رائدة في القطاع الزراعي، متخصصة في تقديم حلول زراعية متكاملة وذكية تعتمد على أحدث التقنيات والابتكارات العلمية.
              </p>
              <p>
                تأسست المجموعة بهدف تحقيق تحول جذري في القطاع الزراعي السعودي، من خلال دمج الخبرات المحلية مع المعرفة العالمية والتقنيات الحديثة.
              </p>
              <p>
                نحن نؤمن بأن الزراعة المستقبلية يجب أن تكون ذكية، مستدامة، ومتوافقة مع أهداف رؤية السعودية 2030 في تحقيق الأمن الغذائي والاستدامة البيئية.
              </p>
              <p>
                من خلال شبكة شركاتنا المتخصصة، نقدم خدمات شاملة تغطي جميع جوانب القطاع الزراعي - من الأبحاث والتطوير إلى الإدارة والتشغيل والتدريب.
              </p>
            </div>
            <Link href="/about" className="btn-primary inline-flex items-center gap-2 mt-6 group">
              المزيد
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/about-bg.jpg"
              alt="الزراعة الذكية والتقنية"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary-dark opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-offWhite p-8">
                <h3 className="text-3xl font-bold mb-4">الزراعة الذكية</h3>
                <p className="text-lg">تقنيات حديثة لمستقبل أفضل</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
