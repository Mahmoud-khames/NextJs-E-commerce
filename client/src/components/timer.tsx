/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getTrans from "@/lib/translation";

interface TimerProps {
  initialTime?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  onEnd?: () => void; // Callback when timer reaches 0
}

export default function Timer({
  initialTime = { days: 3, hours: 23, minutes: 19, seconds: 56 },
  onEnd,
}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const { locale } = useParams();
 
  const [translations, setTranslations] = useState<any>(null);

  // جلب بيانات الترجمة بشكل غير متزامن
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const trans = await getTrans(locale as string);
        setTranslations(trans.t);
      } catch (error) {
        console.error("Error fetching translations:", error);
        setTranslations({
          timer: {
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
            countdownLabel: "Countdown timer: {days} days, {hours} hours, {minutes} minutes, {seconds} seconds remaining",
          },
        });
      }
    };

    fetchTranslations();
  }, [locale]);

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          clearInterval(timer);
          if (onEnd) onEnd(); // Trigger callback when timer ends
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onEnd]);

  // عرض حالة تحميل أثناء جلب الترجمة
  if (!translations) {
    return (
      <div className="flex items-center gap-4" role="timer" aria-label="Loading timer..." dir={locale === "ar" ? "rtl" : "ltr"}>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#000000] text-[14px] md:text-[16px] font-semibold">...</span>
          <span className="text-[#000000] text-[22px] md:text-[32px] font-bold">00</span>
        </div>
        <span className="text-secondary text-[20px] font-bold">:</span>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#000000] text-[14px] md:text-[16px] font-semibold">...</span>
          <span className="text-[#000000] text-[22px] md:text-[32px] font-bold">00</span>
        </div>
        <span className="text-secondary text-[20px] font-bold">:</span>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#000000] text-[14px] md:text-[16px] font-semibold">...</span>
          <span className="text-[#000000] text-[22px] md:text-[32px] font-bold">00</span>
        </div>
        <span className="text-secondary text-[20px] font-bold">:</span>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#000000] text-[14px] md:text-[16px] font-semibold">...</span>
          <span className="text-[#000000] text-[22px] md:text-[32px] font-bold">00</span>
        </div>
      </div>
    );
  }

  // تنسيق نص aria-label باستخدام النصوص المترجمة
  const ariaLabel = translations.timer.countdownLabel
    .replace("{days}", timeLeft.days.toString())
    .replace("{hours}", timeLeft.hours.toString())
    .replace("{minutes}", timeLeft.minutes.toString())
    .replace("{seconds}", timeLeft.seconds.toString());

  return (
    <div
      className="flex items-center gap-4"
      role="timer"
      aria-label={ariaLabel}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-[#000000] text-[14px] md:text-[16px] font-semibold">
          {translations.timer.days || "Days"}
        </span>
        <span className="text-[#000000] text-[22px] md:text-[32px] font-bold">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
      </div>
      <span className="text-secondary text-[20px] font-bold">:</span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[#000000] text-[14px] md:text-[16px] font-semibold">
          {translations.timer.hours || "Hours"}
        </span>
        <span className="text-[#000000] text-[22px] md:text-[32px] font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
      </div>
      <span className="text-secondary text-[20px] font-bold">:</span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[#000000] text-[14px] md:text-[16px] font-semibold">
          {translations.timer.minutes || "Minutes"}
        </span>
        <span className="text-[#000000] text-[22px] md:text-[32px] font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
      </div>
      <span className="text-secondary text-[20px] font-bold">:</span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[#000000] text-[14px] md:text-[16px] font-semibold">
          {translations.timer.seconds || "Seconds"}
        </span>
        <span className="text-[#000000] text-[22px] md:text-[32px] font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}