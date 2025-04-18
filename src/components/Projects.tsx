"use client";

import Image from "next/image";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { Github, Globe } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  icon: string;
}

interface ProjectProps {
  name: string;
  url: string;
  description: string;
  github: string;
  deploy: string;
  techs: TechBadgeProps[];
}

export default function Projects() {
  const { language } = useLanguage();

  const projects: ProjectProps[] = [
    {
      name: "Delivery - Anota Já",
      url: "/delivery.png",
      description:
        language === "pt"
          ? "Sistema de delivery com Next.js e TypeScript, permitindo compras interativas e gestão de pedidos via dashboard seguro."
          : "A delivery system with Next.js and TypeScript, enabling interactive shopping and order management through a secure dashboard.",
      github: "https://github.com/eduardossoares/delivery",
      deploy: "https://delivery-anotaja.vercel.app/",
      techs: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "PrismaORM",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        },
      ],
    },
    {
      name: "Tasks+",
      url: "/tasks.png",
      description:
        language === "pt"
          ? "Aplicação fullstack para gestão de tarefas, desenvolvida com Next.js, TypeScript e Firebase. Permite criar, editar e compartilhar tarefas, além de receber comentários de outros usuários."
          : "A full-stack application for task management, developed with Next.js, TypeScript, and Firebase. It allows users to create, edit, and share tasks, as well as receive comments from other users.",
      github: "https://github.com/eduardossoares/tasks",
      deploy: "https://project-tasks-plus.vercel.app/",
      techs: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        },
      ],
    },
    {
      name: "Webcarros",
      url: "/webcarros.png",
      description:
        language === "pt"
          ? "Webcarros é uma aplicação em React.js e TypeScript onde os usuários podem explorar, cadastrar e gerenciar veículos à venda."
          : "Webcarros is an application built with React.js and TypeScript, where users can explore, register, and manage vehicles for sale.",
      github: "https://github.com/eduardossoares/webcarros",
      deploy: "https://webcarros-three.vercel.app/",
      techs: [
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        },
      ],
    },
    {
      name: "Gamepedia",
      url: "/gamepedia.png",
      description:
        language === "pt"
          ? "Aplicação web em Next.js (SSR) e TypeScript para explorar jogos eletrônicos com catálogo interativo, busca rápida e detalhes completos."
          : "A web application in Next.js (SSR) and TypeScript to explore video games with an interactive catalog, quick search, and detailed information.",
      github: "https://github.com/eduardossoares/gamepedia",
      deploy: "https://gamepedia-mu.vercel.app/",
      techs: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="bg-zinc-900 border-zinc-800 max-sm:p-2">
        <CardHeader className="max-sm:p-2 max-sm:-mb-6">
          <h2 className="text-xl text-white font-bold">
            Conheça meus projetos!
          </h2>
        </CardHeader>
        <CardContent className="max-sm:p-2">
          <Carousel
            className="w-full"
            opts={{ slidesToScroll: 1, align: "start" }}
          >
            <div className="relative">
              <CarouselContent className="-ml-4">
                {projects.map((item, index) => (
                  <CarouselItem key={index} className="lg:basis-1/2">
                    <Card
                      key={index}
                      className="bg-zinc-800 border-zinc-700 p-0 h-full"
                    >
                      <CardContent className="p-0 h-full">
                        <div className="relative w-full h-[150px] sm:h-[300px]">
                          {" "}
                          <Image
                            src={item.url}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                          />
                        </div>
                        <div className="p-4 space-y-3 flex flex-col">
                          <h3 className="text-white font-bold text-lg">
                            {item.name}
                          </h3>

                          <p className="text-zinc-300 text-sm">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-x-1 gap-y-1">
                            {item.techs.map((tech, index) => (
                              <TooltipProvider key={index}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Badge
                                      variant="outline"
                                      className="bg-zinc-800 text-white border-zinc-700 px-3 py-1 cursor-pointer"
                                    >
                                      <Image
                                        width={14}
                                        height={14}
                                        alt={tech.name}
                                        src={tech.icon}
                                      />
                                      <span>{tech.name}</span>
                                    </Badge>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{tech.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </div>

                          <div className="flex gap-2 justify-self-end">
                            <Link href={item.github} target="_blank">
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600
                            cursor-pointer"
                              >
                                GitHub
                                <Github className="mr-2 h-4 w-4" />
                              </Button>
                            </Link>

                            <Link href={item.deploy} target="_blank">
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600
                            cursor-pointer"
                              >
                                {language === "pt"
                                  ? "Acesse o Site"
                                  : "Visit Site"}
                                <Globe className="mr-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="cursor-pointer absolute ml-8" />
              <CarouselNext className="cursor-pointer absolute mr-8" />
            </div>
          </Carousel>
        </CardContent>
      </Card>
    </motion.div>
  );
}
