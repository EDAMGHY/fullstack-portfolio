"use server";

import {
  createExperienceItem,
  deleteExperienceItem,
  getExperiencesCountItem,
  getExperiencesItems,
  getLastExperiencesItems,
} from "@/queries";
import type { Experience } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
  let createdExperience = null;
  try {
    createdExperience = await createExperienceItem({
      employer,
      occupation,
      startDate,
      isPresent,
      stack,
      url,
      endDate,
      authorId,
    });
  } catch (error) {
    console.log("Error creating Experience record");
    console.error(error);
  }
  revalidatePath("/");
  revalidatePath("/dashboard/experiences");
  return createdExperience;
}

/**
 * Get all Experiences
 * @returns {Promise<Experience[]>} An array of Experience objects
 */
export async function getExperiences(): Promise<Experience[] | undefined> {
  try {
    const experiences = await getExperiencesItems("asc");
    return experiences;
  } catch (error) {
    console.log("Error getting Experiences");
    console.error(error);
  }
}

/**
 * Get the last 5 Experiences
 * @returns {Promise<Experience[]>} An array of Experience objects
 */
export async function getLastExperiences(limit: number = 3) {
  try {
    const experiences = await getLastExperiencesItems("asc", limit);
    return experiences;
  } catch (error) {
    console.log("Error getting Experiences");
    console.error(error);
  }
}

/**
 * Get count of Experiences
 * @returns {Promise<number>} The count of Experiences
 */
export async function getExperiencesCount() {
  try {
    const count = await getExperiencesCountItem();
    return count;
  } catch (error) {
    console.log("Error getting Experiences count");
    console.error(error);
  }
}

/**
 * Delete an Experience by ID
 * @param {string} id - The ID of the Experience to delete
 * @returns {Promise<Experience>} The deleted Experience object
 */
export async function deleteExperience(id: string) {
  let deleted = null;
  try {
    deleted = await deleteExperienceItem(id);
  } catch (error) {
    console.log("Error deleting Experience");
    console.error(error);
  }
  revalidatePath("/");
  revalidatePath("/dashboard/experiences");
  return deleted;
}
