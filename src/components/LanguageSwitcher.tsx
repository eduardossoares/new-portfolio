"use client";

import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700
              fixed top-4 right-4 cursor-pointer"
    >
      <Globe />
      <span>{language.toLocaleUpperCase()}</span>
    </Button>
  );
}
