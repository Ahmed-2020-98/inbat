import { Lightbulb, Target, Zap, Users } from "lucide-react";

export default function VisionMission() {
  const missionPoints = [
    {
      icon: Lightbulb,
      title: "الاستشارات الابتكارية",
      description: "تقديم استشارات متخصصة تعتمد على أحدث الابتكارات العلمية",
    },
    {
      icon: Target,
      title: "التميّز التشغيلي",
      description: "تحقيق أعلى معايير الجودة والكفاءة في جميع عملياتنا",
    },
    {
      icon: Zap,
      title: "التحول الرقمي",
      description: "تبني التقنيات الحديثة لتحويل القطاع الزراعي",
    },
    {
      icon: Users,
      title: "بناء القدرات",
      description: "تطوير الكوادر البشرية وبناء خبرات محلية متقدمة",
    },
  ];

  return (
    <section className="section-container bg-white">
      <div className="container mx-auto px-4">
        {/* Vision */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card bg-gradient-to-br from-primary-dark to-primary-dark/90 text-offWhite p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">رؤيتنا</h2>
            <p className="text-lg md:text-xl leading-relaxed text-center">
              أن نكون الرائدين في تحويل القطاع الزراعي السعودي نحو الاستدامة والذكاء، وأن نساهم بشكل فاعل في تحقيق أهداف رؤية السعودية 2030 في الأمن الغذائي والاستدامة البيئية، وأن نكون الشريك المفضل للحكومات والمستثمرين والشركات في تطوير مشاريع زراعية ناجحة ومستدامة.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-8">
          <h2 className="section-title">رسالتنا</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            نسعى إلى تقديم حلول زراعية متكاملة وذكية من خلال دمج الخبرات المحلية مع الابتكارات العالمية، وتحقيق التميّز في جميع جوانب عملنا.
          </p>
        </div>

        {/* Mission Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionPoints.map((point, index) => (
            <div key={index} className="card text-center group hover:border-primary-light border-2 border-transparent transition-all">
              <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-light/30 transition-colors">
                <point.icon className="w-8 h-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
