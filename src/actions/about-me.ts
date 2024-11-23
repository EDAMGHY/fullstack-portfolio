"use server";

import {
  createAboutMeItem,
  findAboutMeItem,
  updateAboutMeItem,
} from "@/queries";
import type { AboutMe } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
    const createdAboutMe = await createAboutMeItem({
      fullName,
      description,
      bio,
      authorId,
    });
    return createdAboutMe;
  } catch (error) {
    console.log("Error creating AboutMe record");
    console.error(error);
  }
  revalidatePath("/");
  revalidatePath("/dashboard/about");
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
    const updatedAboutMe = await updateAboutMeItem({
      id,
      fullName,
      description,
      bio,
      authorId,
    });
    return updatedAboutMe;
  } catch (error) {
    console.log("Error updating AboutMe record");
    console.error(error);
  }
  revalidatePath("/");
  revalidatePath("/dashboard/about");
}

/**
 * Find an AboutMe record
 * @returns {Promise<AboutMe | null>} The found AboutMe record or null if not found
 */
export async function findAboutMe() {
  try {
    const aboutMe = await findAboutMeItem();
    return aboutMe;
  } catch (error) {
    console.log("Error finding AboutMe record");
    console.error(error);
    revalidatePath("/");
    revalidatePath("/dashboard/about");
  }
}
