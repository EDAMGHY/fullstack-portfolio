import { ModeToggle } from "./ui/mode-toggle";
import { cn } from "@/lib/utils";
import { ISidebar } from "@/types";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "./ui/button";

export const Header = ({ className }: ISidebar) => {
  return (
    <header className={cn("mt-10 md:mt-20 mb-5", className)}>
      <ModeToggle variant="button" />
      <h1 className="heading-name mt-5">
        DAMRI <br /> ABDELLAH
      </h1>
      <div className="space-y-4">
        <p className="font-light test-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          possimus obcaecati laborum velit deserunt accusantium iste!
        </p>

        <Button className="group " variant="ghost" asChild>
          <Link className="inline-flex gap-3 uppercase" href={"/"}>
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
