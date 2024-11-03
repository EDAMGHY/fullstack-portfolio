"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { IModeToggle } from "@/types";

export function ModeToggle({ variant = "default" }: IModeToggle) {
  const { setTheme } = useTheme();

  if (variant === "button") {
    return (
      <div className="flex w-fit justify-center items-center gap-6">
        <button
          className={cn(
            "size-8 rounded-full bg-white outline outline-offset-4 dark:outline-zinc-600 outline-blue-400"
          )}
          onClick={() => setTheme("light")}
        />
        <button
          className={cn(
            "size-8 rounded-full bg-black outline outline-offset-4 outline-zinc-400/50 dark:outline-blue-400"
          )}
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
