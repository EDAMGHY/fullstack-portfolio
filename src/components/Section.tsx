import { cn } from "@/lib/utils";
import { ISection } from "@/types";
import slugify from "lodash.kebabcase";

export const Section = ({
  title,
  children,
  className,
  titleClassName,
}: ISection) => {
  return (
    <div id={slugify(title)} className={cn("space-y-4", className)}>
      {title && (
        <h3 className={cn("shrink-0 heading-3", titleClassName)}>{title}</h3>
      )}
      {children}
    </div>
  );
};
