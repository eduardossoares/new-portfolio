"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

import { Download, Github, Linkedin } from "lucide-react";

interface ProfileProps {
  position: string;
  biography: string;
  resume: string;
}

interface LinkProps {
  linkedin: string;
  github: string;
  resume: string;
}

export default function Profile() {
  const { language } = useLanguage();

  const profileLanguages: ProfileProps[] = [
    {
      position: "Desenvolvedor Fullstack",
      biography:
        "Desenvolvedor Fullstack movido por desafios e apaixonado por criar soluções web de modo eficiente.",
      resume: "Baixar CV",
    },
    {
      position: "Fullstack Developer",
      biography:
        "Fullstack Developer driven by challenges and passionate about creating web solutions efficiently.",
      resume: "Download Resume",
    },
  ];

  const links: LinkProps = {
    linkedin:
      language === "pt"
        ? "https://www.linkedin.com/in/eduardo-da-silva-soares/"
        : "https://www.linkedin.com/in/eduardo-da-silva-soares/?locale=en_US",
    github: "https://github.com/eduardossoares",
    resume:
      language === "pt"
        ? "/Eduardo_Soares_Fullstack_CV.pdf"
        : "/Eduardo_Soares_Fullstack_Resume.pdf",
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800 p-6 md:w-[50%]">
      <CardContent className="p-0">
        <h1 className="text-2xl font-bold text-white">Eduardo Soares</h1>
        <h2 className="text-lg text-gray-400 mb-4">
          {language === "pt"
            ? profileLanguages[0].position
            : profileLanguages[1].position}
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          {language === "pt"
            ? profileLanguages[0].biography
            : profileLanguages[1].biography}
        </p>
        <div className="flex flex-wrap gap-2">
          <a href={links.resume} download={true}>
            <Button
              variant="outline"
              size="sm"
              className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              {language === "pt"
                ? profileLanguages[0].resume
                : profileLanguages[1].resume}
            </Button>
          </a>

          <Link href={links.github} target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="bg-purple-900 hover:bg-purple-800 text-white border-purple-800 cursor-pointer"
            >
              <Github className="h-4 w-4" />
              Github
            </Button>
          </Link>

          <Link href={links.linkedin} target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="bg-blue-900 hover:bg-blue-800 text-white border-blue-800 cursor-pointer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
