import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";

export const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      const userInfo = {
        ...user,
        id: token.sub,
        name: token.name,
        email: token.email,
        image: token.picture,
      };
      return {
        ...session,
        user: userInfo,
      };
    },
    async signIn({ user }) {
      const allowedEmails = ["damriabdellah@gmail.com"];
      return allowedEmails.includes(user.email?.toLowerCase() ?? "");
    },
  },
  session: {
    strategy: "jwt",
  },
});
