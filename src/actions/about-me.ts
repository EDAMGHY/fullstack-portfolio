"use server";

import { prisma } from "@/config";
import type { AboutMe } from "@prisma/client";

/**
 * Create a new AboutMe record
 * @param {Omit<AboutMe, "id">} aboutMe - The AboutMe object to create
 * @returns {Promise<AboutMe>} The created AboutMe object
 */
export async function createAboutMe({
  fullName,
  description,
  bio,
  authorId,
}: Omit<AboutMe, "id">) {
  try {
    return await prisma.aboutMe.create({
      data: {
        fullName,
        description,
        bio,
        authorId,
      },
    });
  } catch (error) {
    console.log("Error creating AboutMe record");
    console.error(error);
  }
}

/**
 * Update an AboutMe record
 * @param {AboutMe} aboutMe - The AboutMe object to update
 * @returns {Promise<AboutMe>} The updated AboutMe object
 */
export async function updateAboutMe({
  fullName,
  description,
  bio,
  authorId,
  id,
}: AboutMe) {
  try {
    return await prisma.aboutMe.update({
      where: { id },
      data: {
        fullName,
        description,
        bio,
        authorId,
      },
    });
  } catch (error) {
    console.log("Error updating AboutMe record");
    console.error(error);
  }
}

/**
 * Find an AboutMe record
 * @returns {Promise<AboutMe | null>} The found AboutMe record or null if not found
 */
export async function findAboutMe() {
  return await prisma.aboutMe.findFirst();
}