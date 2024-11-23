"use server";

import {
  createProjectItem,
  deleteProjectItem,
  getLastProjectsItems,
  getProjectsCountItem,
  getProjectsItems,
} from "@/queries";
import type { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";

/**
 * Create a new Project record
 * @param {Omit<Project, "id">} project - The Project object to create
 * @returns {Promise<Project>} The created Project object
 */
export async function createProject({
  authorId,
  description,
  name,
  url,
  stack,
}: Omit<Project, "id">) {
  let project = null;
  try {
    project = await createProjectItem({
      description,
      name,
      url,
      stack,
      authorId,
    });
  } catch (error) {
    console.log("Error creating Project record");
    console.error(error);
  }
  revalidatePath("/");
  revalidatePath("/dashboard/projects");
  return project;
}

/**
 * Get all Projects
 * @returns {Promise<Project[]>} An array of Project objects
 */
export async function getProjects() {
  try {
    const projects = await getProjectsItems("asc");
    return projects;
  } catch (error) {
    console.log("Error getting Projects");
    console.error(error);
  }
}

/**
 * Get the last {limit} Projects
 * @returns {Promise<Project[]>} An array of Project objects
 */
export async function getLastProjects(limit: number = 3) {
  try {
    const projects = await getLastProjectsItems("asc", limit);
    return projects;
  } catch (error) {
    console.log("Error getting Projects");
    console.error(error);
  }
}

/**
 * Get count of Projects
 * @returns {Promise<number>} The count of Projects
 */
export async function getProjectsCount() {
  try {
    const count = await getProjectsCountItem();
    return count;
  } catch (error) {
    console.log("Error getting Projects count");
    console.error(error);
  }
}

/**
 * Delete a Project by ID
 * @param {string} id - The ID of the Project to delete
 * @returns {Promise<Project>} The deleted Project object
 */
export async function deleteProject(id: string) {
  let deleted = null;
  try {
    deleted = await deleteProjectItem(id);
  } catch (error) {
    console.log("Error deleting Project record");
    console.error(error);
  }
  revalidatePath("/");
  revalidatePath("/dashboard/projects");
  return deleted;
}
