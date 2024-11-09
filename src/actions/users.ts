"use server";

import { prisma } from "@/config";

export const getAllUsers = async () => await prisma.user.findMany();
