import { IExperienceItem } from "@/types";

export const experiences: IExperienceItem[] = [
  {
    startDate: "2022-10-01",
    endDate: "2024-11-01",
    link: "https://void.fr",
    position: "Frontend Developer",
    employer: "VOID",
    tech: [
      "ReactJS",
      "NextJS",
      "JavaScript",
      "HTML&CSS",
      "TypeScript",
      "Drupal",
    ],
    isPresent: true,
  },
  {
    startDate: "2021-07-01",
    endDate: "2022-09-30",
    position: "Frontend Developer",
    employer: "NextGrowth",
    tech: ["ReactJS", "JavaScript", "CSS", "Git"],
    link: "https://nextgrowth.com",
  },
  {
    startDate: "2021-01-01",
    endDate: "2021-06-30",
    position: "FullStack Developer Intern",
    employer: "Abweb",
    tech: ["NodeJS", "ExpressJS", "MongoDB", "ReactJS", "JavaScript"],
    link: "https://abweb.com",
  },
  {
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    position: "Freelance Web Developer",
    employer: "Self-Employed",
    tech: ["Svelte", "TypeScript", "CSS", "HTML", "Firebase"],
    link: "https://damriabdellah.com",
  },
  {
    startDate: "2020-06-01",
    endDate: "2020-12-31",
    position: "Junior Developer",
    employer: "TechSolutions Ltd.",
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap", "PHP"],
    link: "https://techsolutions.com",
  },
];

export const projects = [
  {
    name: "Artisan Booking App",
    description:
      "An app that allows users to search for and book local artisans, showcasing profiles, reviews, and ratings.",
    technologies: ["NextJS", "NodeJS", "ExpressJS", "TypeScript", "MongoDB"],
    link: "https://example.com/artisan-booking-app",
  },
  {
    name: "Tournament Organizer",
    description:
      "A platform for organizing gaming tournaments, tracking scores, and managing participants with features like MVP rewards.",
    technologies: ["ReactJS", "TypeScript", "NodeJS", "Firebase"],
    link: "https://example.com/tournament-organizer",
  },
  {
    name: "Compliance Audit Tool",
    description:
      "A simplified audit platform where auditors can use pre-inserted templates to conduct live audits and generate reports.",
    technologies: ["ReactJS", "TypeScript", "ExpressJS", "PostgreSQL"],
    link: "https://example.com/compliance-audit-tool",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal, one-page portfolio website featuring subtle animations and backend content management.",
    technologies: ["NextJS", "TypeScript", "CSS", "NodeJS"],
    link: "https://example.com/portfolio-website",
  },
  {
    name: "Game Demo with Interactive Mechanics",
    description:
      "A demo game featuring gameplay mechanics inspired by popular action-adventure games, with interactive prompts and storytelling.",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    link: "https://example.com/game-demo",
  },
];

export const menus = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "About Me",
    link: "/dashboard/about",
  },
  {
    name: "Projects",
    link: "/dashboard/projects",
  },
  {
    name: "Experiences",
    link: "/dashboard/experiences",
  },
];
