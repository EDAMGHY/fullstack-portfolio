import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IDashboardSection } from "@/types";

export const DashboardSection = ({
  children,
  className,
  title,
  url,
  description,
}: IDashboardSection) => {
  return (
    <section
      className={cn(
        "grid grid-cols-1 md:gap-8 gap-4 lg:grid-cols-6",
        className
      )}
    >
      <div className="md:col-span-3 lg:col-span-2 space-y-4">
        <Button variant="ghost" asChild>
          <Link className="inline-flex gap-3 uppercase" href={url}>
            <FaArrowLeft size={24} />
            Back{" "}
          </Link>
        </Button>
        {title && <h2 className="heading-2">{title}</h2>}
        {description && (
          <p className="text-zinc-400 text-base leading-7 font-light">
            {description}
          </p>
        )}
      </div>
      <div className="md:col-span-3 lg:col-span-4">{children}</div>
    </section>
  );
};
