"use server";

import { prisma } from "@/config";
import type { Project } from "@prisma/client";

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
  return await prisma.project.create({
    data: {
      description,
      name,
      url,
      stack,
      authorId,
    },
  });
}

/**
 * Get all Projects
 * @returns {Promise<Project[]>} An array of Project objects
 */
export async function getProjects() {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
}

/**
 * Get the last 5 Projects
 * @returns {Promise<Project[]>} An array of Project objects
 */
export async function getLastProjects(limit: number = 3) {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: "asc",
    },
    take: limit,
  });
}

/**
 * Get count of Projects
 * @returns {Promise<number>} The count of Projects
 */
export async function getProjectsCount() {
  return await prisma.project.count();
}

/**
 * Delete a Project by ID
 * @param {string} id - The ID of the Project to delete
 * @returns {Promise<Project>} The deleted Project object
 */
export async function deleteProject(id: string) {
  return await prisma.project.delete({
    where: {
      id,
    },
  });
}
