"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package2 } from "lucide-react";

import { menus } from "@/lib/data";
import { cn } from "@/lib/utils";

export const NavLinks = () => {
  const path = usePathname();
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">DAMRI ABDELLAH</span>
      </Link>

      {menus.map((menu, idx) => (
        <Link
          key={idx}
          href={menu?.link}
          className={cn(
            "transition-colors shrink-0 hover:text-foreground",
            path === menu?.link ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {menu?.name}
        </Link>
      ))}
    </nav>
  );
};

export const MobileNavLinks = () => {
  const path = usePathname();

  return (
    <nav className="grid gap-6 text-lg font-medium">
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
        <Package2 className="h-6 w-6" />
        <span className="sr-only">DAMRI ABDELLAH</span>
      </Link>

      {menus.map((menu, idx) => (
        <Link
          key={idx}
          href={menu?.link}
          className={cn(
            "transition-colors shrink-0 hover:text-foreground",
            path === menu?.link ? "" : "text-muted-foreground"
          )}
        >
          {menu?.name}
        </Link>
      ))}
    </nav>
  );
};
