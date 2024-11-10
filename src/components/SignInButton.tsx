"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";

export const SignInButton = () => (
  <Button
    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
    size="lg"
  >
    <FaGoogle size={24} />
    Continue with Google
  </Button>
);
