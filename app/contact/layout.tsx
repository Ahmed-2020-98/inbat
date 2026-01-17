import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا | إنبات القابضة",
  description: "تواصل مع فريق إنبات القابضة. نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك الزراعية.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
