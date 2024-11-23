import { prisma } from "@/config/db";
import { Experience } from "@prisma/client";

/**
 *
 * @description Create a new Experience Item
 * @param args: Experience
 * @returns Created Experience Item
 */
export const createExperienceItem = async (
  args: Omit<Experience, "id" | "createdAt" | "updatedAt">
): Promise<Experience> =>
  await prisma.experience.create({
    data: {
      ...args,
    },
  });

/**
 *
 * @param orderBy: the order of the experiences "asc" | "desc"
 * @returns An Array of Experiences Items
 */
export const getExperiencesItems = async (
  orderBy: "asc" | "desc"
): Promise<Experience[]> =>
  await prisma.experience.findMany({
    orderBy: {
      createdAt: orderBy,
    },
  });

/**
 *
 * @param orderBy: the order of the experiences "asc" | "desc"
 * @param limit: the order of the experiences "asc" | "desc"
 * @returns An Array of last Experiences Items based on limit
 */
export const getLastExperiencesItems = async (
  orderBy: "asc" | "desc",
  limit: number = 3
): Promise<Experience[]> =>
  await prisma.experience.findMany({
    orderBy: {
      createdAt: orderBy,
    },
    take: limit,
  });

/**
 *
 * @description Get count of Experiences
 * @returns The count of Experiences
 *
 */
export const getExperiencesCountItem = async (): Promise<number> => {
  return await prisma.experience.count();
};

/**
 *
 * @description Get a Experience Item by ID
 * @param id: Experience ID
 * @returns Experience Item
 */
export const deleteExperienceItem = async (id: string): Promise<Experience> => {
  return await prisma.experience.delete({
    where: {
      id,
    },
  });
};
