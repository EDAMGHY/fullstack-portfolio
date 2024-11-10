"use server";

import { prisma } from "@/config";
import { Experience } from "@prisma/client";

/**
 * Create a new Experience record
 * @param {Omit<Experience, "id">} experience - The Experience object to create
 * @returns {Promise<Experience>} The created Experience object
 */
export async function createExperience({
  authorId,
  employer,
  occupation,
  startDate,
  isPresent,
  stack,
  url,
  endDate,
}: Omit<Experience, "id">) {
  return await prisma.experience.create({
    data: {
      employer,
      occupation,
      startDate,
      isPresent,
      stack,
      url,
      endDate,
      authorId,
    },
  });
}

/**
 * Get all Experiences
 * @returns {Promise<Experience[]>} An array of Experience objects
 */
export async function getExperiences() {
  return await prisma.experience.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
}

/**
 * Get the last 5 Experiences
 * @returns {Promise<Experience[]>} An array of Experience objects
 */
export async function getLastExperiences(limit: number = 3) {
  return await prisma.experience.findMany({
    orderBy: {
      createdAt: "asc",
    },
    take: limit,
  });
}

/**
 * Get count of Experiences
 * @returns {Promise<number>} The count of Experiences
 */
export async function getExperiencesCount() {
  return await prisma.experience.count();
}

/**
 * Delete an Experience by ID
 * @param {string} id - The ID of the Experience to delete
 * @returns {Promise<Experience>} The deleted Experience object
 */
export async function deleteExperience(id: string) {
  return await prisma.experience.delete({
    where: {
      id,
    },
  });
}
