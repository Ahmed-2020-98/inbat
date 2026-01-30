import { FlaskConical, Settings, GraduationCap, Heart } from "lucide-react";

const companies = [
  {
    icon: FlaskConical,
    name: "إنبات للدراسات والأبحاث الزراعية",
    description: "متخصصة في إجراء الدراسات والأبحاث الزراعية المتقدمة وتطوير الحلول المبتكرة",
  },
  {
    icon: Settings,
    name: "إنبات لإدارة وتشغيل الأصول الزراعية",
    description: "تقديم خدمات إدارة وتشغيل شاملة للمشاريع الزراعية بكفاءة عالية",
  },
  {
    icon: GraduationCap,
    name: "إنبات للتدريب والإرشاد الزراعي",
    description: "تطوير الكوادر البشرية من خلال برامج تدريبية وإرشادية متخصصة",
  },
  {
    icon: Heart,
    name: "إنبات لتشخيص ومعالجة الأمراض النباتية",
    description: "تشخيص دقيق وعلاج فعال للأمراض النباتية باستخدام أحدث التقنيات",
  },
];

export default function Companies() {
  return (
    <section className="section-container bg-primary-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">شركات إنبات القابضة</h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          مجموعة متكاملة من الشركات المتخصصة تغطي جميع جوانب القطاع الزراعي
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="card hover:border-primary-light border-2 border-transparent transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-light/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light/30 transition-colors">
                  <company.icon className="w-7 h-7 text-primary-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-offWhite mb-2">{company.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{company.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
