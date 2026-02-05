import { Scale, Trophy, Lightbulb, Handshake } from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "النزاهة",
    description: "نلتزم بأعلى معايير الشفافية والأخلاقيات في جميع تعاملاتنا",
    emoji: "",
  },
  {
    icon: Trophy,
    title: "التميّز",
    description: "نسعى لتحقيق أعلى مستويات الجودة في كل ما نقدمه",
    emoji: "",
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    description: "نواكب أحدث التقنيات والابتكارات لتطوير القطاع الزراعي",
    emoji: "",
  },
  {
    icon: Handshake,
    title: "الشراكات",
    description: "نؤمن بقوة التعاون والشراكات الاستراتيجية لتحقيق النجاح",
    emoji: "",
  },
];

export default function Values() {
  return (
    <section className="section-container ">
      <div className="container mx-auto px-4">
        <h2 className="section-title">قيمنا</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group border border-white/20">
              <div className="text-6xl mb-4">{value.emoji}</div>
              <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-light/30 transition-colors">
                <value.icon className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="text-2xl font-bold text-offWhite mb-3">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
