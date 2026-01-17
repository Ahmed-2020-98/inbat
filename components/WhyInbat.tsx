import { GraduationCap, Cpu, Network, Search, Target } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "خبرات علمية متقدمة",
    description: "فريق من الخبراء والمتخصصين في مختلف المجالات الزراعية",
  },
  {
    icon: Cpu,
    title: "دمج أحدث التقنيات",
    description: "استخدام الذكاء الاصطناعي والتقنيات الحديثة في الزراعة",
  },
  {
    icon: Network,
    title: "شبكة عالمية عبر مجموعة إيفارا",
    description: "وصول إلى شبكة واسعة من الشركاء والخبرات الدولية",
  },
  {
    icon: Search,
    title: "شراكات بحثية استراتيجية",
    description: "تعاون مع مؤسسات بحثية رائدة محلياً وعالمياً",
  },
  {
    icon: Target,
    title: "توافق مع رؤية السعودية 2030",
    description: "مساهمة فاعلة في تحقيق أهداف الرؤية الاستراتيجية",
  },
];

export default function WhyInbat() {
  return (
    <section className="section-container bg-gradient-to-br from-primary-dark to-primary-dark/95 text-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-offWhite">
          لماذا إنبات؟
        </h2>
        <p className="text-center text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
          نمـزج بين الخبرة المحلية والابتكار العالمي لتقديم تميّز زراعي لا مثيل له
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light/30 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-light">{reason.title}</h3>
                  <p className="text-offWhite/90 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
