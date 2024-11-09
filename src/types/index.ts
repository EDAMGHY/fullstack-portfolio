import { ReactNode } from "react";

export interface ISidebar {
  className?: string;
}
export interface IExperienceItem {
  id?: number;
  startDate: string;
  endDate?: string;
  position: string;
  employer: string;
  link: string;
  tech: string[];
  isPresent?: boolean;
}
export interface IProjectItem {
  id?: number;
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
