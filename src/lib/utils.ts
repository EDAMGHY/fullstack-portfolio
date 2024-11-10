import { ExperiencesData, ProjectsData } from "@/types";
import { Experience, Project } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | string) => {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
  }).format(new Date(date));
};

export const getStacks = (stack: string) => {
  if (!stack) return [];

  return stack
    .trim()
    .split(",")
    .map((item) => item.trim().replace(/["'.:;!@#$%^&*()]/g, ""));
};

export const getNormalizedExperiences = (
  array: Experience[] = []
): ExperiencesData[] => {
  return array.map((item) => ({
    ...item,
    stacks: getStacks(item.stack),
  }));
};
export const getNormalizedProjects = (
  array: Project[] = []
): ProjectsData[] => {
  return array.map((item) => ({
    ...item,
    technologies: getStacks(item.stack),
  }));
};

export const getSectionProjects = (data: Project[]) => {
  return data?.map((project) => ({
    id: project?.id,
    description: project?.description,
    link: project?.url,
    name: project?.name,
    technologies: getStacks(project?.stack),
  }));
};
export const getSectionExperiences = (data: Experience[]) => {
  return data?.map((experience) => ({
    id: experience?.id,
    employer: experience?.employer,
    endDate: experience?.endDate,
    position: experience?.occupation,
    startDate: experience?.startDate,
    isPresent: experience?.isPresent,
    tech: getStacks(experience?.stack) || [],
    link: experience?.url,
  }));
};
