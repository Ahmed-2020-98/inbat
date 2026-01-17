"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-dark shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo variant="header" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-offWhite hover:text-primary-light transition-colors font-medium">
              الرئيسية
            </Link>
            <Link href="/about" className="text-offWhite hover:text-primary-light transition-colors font-medium">
              من نحن
            </Link>
            <Link href="/services" className="text-offWhite hover:text-primary-light transition-colors font-medium">
              خدماتنا
            </Link>
            <Link href="/sectors" className="text-offWhite hover:text-primary-light transition-colors font-medium">
              القطاعات
            </Link>
            <Link href="/partnerships" className="text-offWhite hover:text-primary-light transition-colors font-medium">
              الشراكات
            </Link>
            <Link href="/research" className="text-offWhite hover:text-primary-light transition-colors font-medium">
              الأبحاث
            </Link>
            <Link href="/contact" className="text-offWhite hover:text-primary-light transition-colors font-medium">
              تواصل معنا
            </Link>
            <Link href="/contact" className="btn-primary">
              كن شريكًا معنا
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-offWhite"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-offWhite/20">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-offWhite hover:text-primary-light transition-colors font-medium">
                الرئيسية
              </Link>
              <Link href="/about" className="text-offWhite hover:text-primary-light transition-colors font-medium">
                من نحن
              </Link>
              <Link href="/services" className="text-offWhite hover:text-primary-light transition-colors font-medium">
                خدماتنا
              </Link>
              <Link href="/sectors" className="text-offWhite hover:text-primary-light transition-colors font-medium">
                القطاعات
              </Link>
              <Link href="/partnerships" className="text-offWhite hover:text-primary-light transition-colors font-medium">
                الشراكات
              </Link>
              <Link href="/research" className="text-offWhite hover:text-primary-light transition-colors font-medium">
                الأبحاث
              </Link>
              <Link href="/contact" className="text-offWhite hover:text-primary-light transition-colors font-medium">
                تواصل معنا
              </Link>
              <Link href="/contact" className="btn-primary text-center">
                كن شريكًا معنا
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
