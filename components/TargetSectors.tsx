import { Building2, Briefcase, Factory, Home, GraduationCap } from "lucide-react";

const sectors = [
  {
    icon: Building2,
    name: "الجهات الحكومية",
    description: "شراكة استراتيجية مع المؤسسات الحكومية لتطوير القطاع الزراعي",
  },
  {
    icon: Briefcase,
    name: "المستثمرون",
    description: "فرص استثمارية مربحة في المشاريع الزراعية المستدامة",
  },
  {
    icon: Factory,
    name: "الشركات الزراعية",
    description: "حلول متخصصة لتحسين الإنتاجية والاستدامة",
  },
  {
    icon: Home,
    name: "المطورون العقاريون",
    description: "تنسيق حدائق وتشجير ذكي للمشاريع العقارية",
  },
  {
    icon: GraduationCap,
    name: "الجامعات والمؤسسات البحثية",
    description: "شراكات بحثية وتطويرية لدفع عجلة الابتكار",
  },
];

export default function TargetSectors() {
  return (
    <section className="section-container bg-primary-darker">
      <div className="container mx-auto px-4">
        <h2 className="section-title">القطاعات المستهدفة</h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          نخدم مختلف القطاعات والمؤسسات التي تسعى للتميز في المجال الزراعي
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="card hover:border-primary-light border-2 border-transparent transition-all group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-primary-light/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light/30 transition-colors">
                  <sector.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="text-xl font-bold text-offWhite">{sector.name}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
