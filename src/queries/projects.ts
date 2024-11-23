import { prisma } from "@/config/db";
import { Project } from "@prisma/client";

/**
 *
 * @description Create a new Project Item
 * @param args: Project
 * @returns Created Project Item
 */
export const createProjectItem = async (
  args: Omit<Project, "id" | "createdAt" | "updatedAt">
): Promise<Project> =>
  await prisma.project.create({
    data: {
      ...args,
    },
  });

/**
 *
 * @param orderBy: the order of the projects "asc" | "desc"
 * @returns An Array of Projects Items
 */
export const getProjectsItems = async (
  orderBy: "asc" | "desc"
): Promise<Project[]> =>
  await prisma.project.findMany({
    orderBy: {
      createdAt: orderBy,
    },
  });

/**
 *
 * @param orderBy: the order of the projects "asc" | "desc"
 * @param limit: the order of the projects "asc" | "desc"
 * @returns An Array of last Projects Items based on limit
 */
export const getLastProjectsItems = async (
  orderBy: "asc" | "desc",
  limit: number = 3
): Promise<Project[]> =>
  await prisma.project.findMany({
    orderBy: {
      createdAt: orderBy,
    },
    take: limit,
  });

/**
 *
 * @description Get count of Projects
 * @returns The count of Projects
 *
 */
export const getProjectsCountItem = async (): Promise<number> => {
  return await prisma.project.count();
};

/**
 *
 * @description Get a Project Item by ID
 * @param id: Project ID
 * @returns Project Item
 */
export const deleteProjectItem = async (id: string): Promise<Project> => {
  return await prisma.project.delete({
    where: {
      id,
    },
  });
};
