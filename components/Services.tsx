import { FileText, Microscope, Settings, TestTube, GraduationCap, TrendingUp, Sprout } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "التخطيط الزراعي ودراسات الجدوى",
    description: "إعداد دراسات جدوى شاملة وتخطيط استراتيجي للمشاريع الزراعية",
  },
  {
    icon: Microscope,
    title: "البحث والتطوير والابتكار",
    description: "إجراء أبحاث متقدمة وتطوير حلول مبتكرة للقطاع الزراعي",
  },
  {
    icon: Settings,
    title: "إدارة وتشغيل الأصول الزراعية",
    description: "إدارة احترافية للمشاريع الزراعية لضمان أعلى مستوى من الإنتاجية",
  },
  {
    icon: TestTube,
    title: "التحاليل المخبرية والتقارير البيئية",
    description: "تحاليل دقيقة للتربة والمياه والنباتات مع تقارير بيئية شاملة",
  },
  {
    icon: GraduationCap,
    title: "التدريب وبناء القدرات",
    description: "برامج تدريبية متخصصة لتطوير المهارات الزراعية",
  },
  {
    icon: TrendingUp,
    title: "التجارة والاستثمارات الاستراتيجية",
    description: "استشارات استثمارية وفرص تجارية في القطاع الزراعي",
  },
  {
    icon: Sprout,
    title: "تنسيق الحدائق المستدام والذكي",
    description: "تصميم وتنفيذ حدائق ذكية ومستدامة باستخدام تقنيات الري المتقدمة",
  },
];

export default function Services() {
  return (
    <section className="section-container bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="section-title">خدماتنا الأساسية</h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          حلول زراعية متكاملة تغطي جميع احتياجات القطاع الزراعي
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card text-center hover:border-primary-light border-2 border-transparent transition-all group">
              <div className="w-16 h-16 bg-primary-light/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-light/30 transition-colors">
                <service.icon className="w-8 h-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
