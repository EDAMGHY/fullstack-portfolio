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
  let createdAboutMe = null;
  try {
    createdAboutMe = await createAboutMeItem({
      fullName,
      description,
      bio,
      authorId,
    });
  } catch (error) {
    console.log("Error creating AboutMe record");
    console.error(error);
  }
  revalidatePath("/");
  revalidatePath("/dashboard/about");
  return createdAboutMe;
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
  let updatedAboutMe = null;
  try {
    updatedAboutMe = await updateAboutMeItem({
      id,
      fullName,
      description,
      bio,
      authorId,
    });
  } catch (error) {
    console.log("Error updating AboutMe record");
    console.error(error);
  }
  revalidatePath("/");
  revalidatePath("/dashboard/about");
  return updatedAboutMe;
}

/**
 * Find an AboutMe record
 * @returns {Promise<AboutMe | null>} The found AboutMe record or null if not found
 */
export async function findAboutMe() {
  let aboutMe = null;
  try {
    aboutMe = await findAboutMeItem();
  } catch (error) {
    console.log("Error finding AboutMe record");
    console.error(error);
  }
  revalidatePath("/");
  revalidatePath("/dashboard/about");
  return aboutMe;
}
