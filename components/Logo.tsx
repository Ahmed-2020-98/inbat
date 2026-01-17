"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "header" | "footer" | "full";
  className?: string;
}

export default function Logo({ variant = "header", className = "" }: LogoProps) {
  const isHeader = variant === "header";
  const isFooter = variant === "footer";
  const isFull = variant === "full";

  // تحديد حجم اللوجو حسب الاستخدام
  const logoWidth = isHeader ? 180 : isFooter ? 200 : 220;
  const logoHeight = isHeader ? 60 : isFooter ? 70 : 80;

  // مسار صورة اللوجو - استخدم logo.png الأصلي دائماً
  const logoPath = "/assets/logo.png";
  
  // Fallback إلى SVG إذا لم توجد PNG
  const logoSvgPath = "/assets/logo-white.svg";

  // Fallback text إذا لم توجد الصورة
  const [imageError, setImageError] = React.useState(false);
  const [currentSrc, setCurrentSrc] = React.useState(logoPath);

  if (imageError) {
    // Fallback: عرض نص بدلاً من الصورة
    return (
      <div className={`flex items-center ${className}`}>
        <div className={isHeader ? "" : "text-right"}>
          <h1
            className={`font-bold text-primary-dark ${
              isHeader ? "text-xl md:text-2xl" : "text-2xl"
            } ${isFull ? "text-white" : ""}`}
          >
            INBAT
          </h1>
          {isFull ? (
            <p className="text-sm text-white/90 font-normal uppercase mt-0.5">
              ADVANCING AGRICULTURE
            </p>
          ) : (
            <p
              className={`${
                isHeader ? "text-xs" : "text-sm"
              } ${isFull ? "text-white/80" : "text-gray-600"}`}
            >
              {isHeader ? "إنبات القابضة" : "HOLDING"}
            </p>
          )}
        </div>
      </div>
    );
  }

  // استخدم PNG الأصلي أولاً
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={currentSrc}
        alt="INBAT HOLDING - إنبات القابضة"
        width={logoWidth}
        height={logoHeight}
        className="object-contain"
        priority
        onError={() => {
          // إذا فشل تحميل PNG، جرب SVG
          if (currentSrc === logoPath) {
            setCurrentSrc(logoSvgPath);
          } else {
            setImageError(true);
          }
        }}
        style={{
          width: isHeader ? "auto" : `${logoWidth}px`,
          height: isHeader ? "50px" : `${logoHeight}px`,
        }}
      />
    </div>
  );
}
