import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IDashboardSection } from "@/types";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const DashboardSection = ({
  children,
  className,
  title,
  url,
  description,
}: IDashboardSection) => {
  return (
    <Sheet>
      <section className={cn(className)}>
        <div className="flex items-center lg:flex-row flex-col justify-between gap-4">
          <div className="space-y-4 lg:max-w-[786px]">
            <div className="flex items-center justify-between gap-4">
              <Button variant="ghost" asChild>
                <Link className="inline-flex gap-3 uppercase" href={url}>
                  <FaArrowLeft size={24} />
                  Back{" "}
                </Link>
              </Button>

              <SheetTrigger asChild>
                <Button className="inline-flex lg:hidden">
                  <FaPlus size={24} />
                  Add a {title}
                </Button>
              </SheetTrigger>
            </div>

            {title && <h2 className="heading-2">{title}</h2>}
            {description && (
              <p className="dark:text-zinc-400 text-zinc-600 text-base leading-7 font-light">
                {description}
              </p>
            )}
          </div>

          <SheetTrigger asChild>
            <Button className="hidden lg:inline-flex">
              <FaPlus size={24} />
              Add a {title}
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent className="overflow-y-auto !max-w-[400px] md:!max-w-[740px] md:!w-full">
          {children}
        </SheetContent>
      </section>
    </Sheet>
  );
};
