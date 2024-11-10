import { Experience, Project } from "@prisma/client";
import { ElementType, ReactNode } from "react";

export interface ISidebar {
  className?: string;
}
export interface IExperienceItem {
  id?: string | number;
  startDate: Date;
  endDate: Date | null;
  position: string;
  employer: string;
  link: string;
  tech: string[];
  isPresent?: boolean;
}
export interface IProjectItem {
  id?: string | number;
  name: string;
  description: string;
  technologies: string[];
  link: string;
}
export interface ISection {
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}
export interface ITechnologiesList<T> {
  wrapperClassName?: string;
  nodes?: T[];
}
export interface IModeToggle {
  variant?: "default" | "button";
}

export interface IDashboardSection {
  children: ReactNode;
  className?: string;
  title: string;
  description: string;
  url: string;
}

export type ExperiencesData = Experience & { stacks: string[] };
export type ProjectsData = Project & { technologies: string[] };
export interface AnalyticsCardProps {
  title?: string;
  description?: string;
  Icon?: ElementType;
  value: number;
  className?: string;
}
export interface IRecentItems<T> {
  title?: string;
  description?: string;
  url?: string;
  linkText: string;
  headers: string[];
  renderComponent: (item: T, idx: number, array: T[]) => ReactNode;
  items: T[];
}
