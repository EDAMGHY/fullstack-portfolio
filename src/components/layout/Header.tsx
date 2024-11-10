import { ModeToggle } from "../ui/mode-toggle";
import { cn } from "@/lib/utils";
import { ISidebar } from "@/types";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "../ui/button";
import { findAboutMe } from "@/actions";

export const Header = async ({ className }: ISidebar) => {
  const aboutMe = await findAboutMe();
  return (
    <header className={cn("mt-10 md:mt-20 mb-5", className)}>
      <ModeToggle variant="button" />
      <h1 className="heading-name mt-6 wrap">
        {aboutMe?.fullName?.split?.(" ")?.[0]}
        <br />
        {aboutMe?.fullName?.split?.(" ")?.[1]}
      </h1>
      <div className="space-y-6 mt-6">
        <p className="font-light test-sm">{aboutMe?.description}</p>
        <Button className="relative group" size="lg" variant="ghost" asChild>
          <Link
            className="inline-flex gap-3 uppercase"
            href={"/assets/damri-abdellah.pdf"}
            target="_blank"
          >
            View Resume{" "}
            <FaArrowRight
              className="opacity-0 -translate-x-2 group-hover:translate-x-0 duration-300 transition-all group-hover:opacity-100"
              size={24}
            />
          </Link>
        </Button>
      </div>
    </header>
  );
};
