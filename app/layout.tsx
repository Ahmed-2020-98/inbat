import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  weight: ["300", "400", "500", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "إنبات القابضة | INBAT HOLDING - الريادة في تطوير الزراعة",
  description: "نحو مستقبل زراعي ذكي ومستدام متوافق مع رؤية السعودية 2030. مجموعة شركات رائدة في القطاع الزراعي تقدم حلول زراعية متكاملة وذكية.",
  keywords: ["إنبات", "INBAT HOLDING", "زراعة", "استدامة", "رؤية 2030", "أبحاث زراعية", "الزراعة الذكية", "السعودية"],
  authors: [{ name: "INBAT HOLDING" }],
  openGraph: {
    title: "إنبات القابضة | INBAT HOLDING",
    description: "نحو مستقبل زراعي ذكي ومستدام متوافق مع رؤية السعودية 2030",
    type: "website",
    locale: "ar_SA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
