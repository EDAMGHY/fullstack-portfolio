import { prisma } from "@/config/db";
import { AboutMe } from "@prisma/client";

/**
 *
 * @param args: AboutMe
 * @returns Created AboutMe Item
 */
export const createAboutMeItem = async (
  args: Omit<AboutMe, "id" | "createdAt" | "updatedAt">
): Promise<AboutMe> =>
  await prisma.aboutMe.create({
    data: {
      ...args,
    },
  });

/**
 *
 * @param args: AboutMe
 * @returns Updated AboutMe Item
 */
export const updateAboutMeItem = async (
  args: Omit<AboutMe, "createdAt" | "updatedAt">
): Promise<AboutMe> =>
  await prisma.aboutMe.update({
    where: { id: args?.id },
    data: {
      ...args,
    },
  });

/**
 *
 * @returns Find the first AboutMe Item
 */
export const findAboutMeItem = async (): Promise<AboutMe | null> =>
  await prisma.aboutMe.findFirst();
