import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-offWhite">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="flex items-center justify-start">
                <Logo variant="footer" className="[&_h1]:text-white [&_p]:text-offWhite/80" />
              </div>
            </div>
            <p className="text-lg mb-4 text-primary-light font-medium">
              نطور الزراعة، ونؤمّن المستقبل
            </p>
            <p className="text-offWhite/80 leading-relaxed">
              مجموعة شركات رائدة في القطاع الزراعي، متخصصة في تقديم حلول زراعية متكاملة وذكية تعتمد على أحدث التقنيات والابتكارات العلمية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-offWhite/80 hover:text-primary-light transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-offWhite/80 hover:text-primary-light transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-offWhite/80 hover:text-primary-light transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="text-offWhite/80 hover:text-primary-light transition-colors">
                  القطاعات
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-offWhite/80 hover:text-primary-light transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-light flex-shrink-0" />
                <a href="tel:+966530000000" className="text-offWhite/80 hover:text-primary-light transition-colors">
                  966530000000+
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-light flex-shrink-0" />
                <a href="mailto:info@inbat.sa" className="text-offWhite/80 hover:text-primary-light transition-colors">
                  info@inbat.sa
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light flex-shrink-0 mt-1" />
                <span className="text-offWhite/80">مقر الشركة</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-primary-light/30 transition-colors">
                <Linkedin className="w-5 h-5 text-primary-light" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-primary-light/30 transition-colors">
                <Twitter className="w-5 h-5 text-primary-light" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-primary-light/30 transition-colors">
                <Instagram className="w-5 h-5 text-primary-light" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-offWhite/20 pt-8 text-center">
          <p className="text-offWhite/60">
            © {new Date().getFullYear()} إنبات القابضة | INBAT HOLDING. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
