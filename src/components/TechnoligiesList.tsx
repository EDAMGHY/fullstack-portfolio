import { Badge, BadgeProps } from "./ui/badge";
import { ITechnologiesList } from "@/types";
import { cn } from "@/lib/utils";

const TechnologiesList = ({
  nodes = [],
  variant,
  className,
  wrapperClassName,
}: ITechnologiesList<string> & BadgeProps) => {
  if (nodes.length <= 0) {
    return null;
  }

  return (
    <div className={cn("flex gap-3 flex-wrap", wrapperClassName)}>
      {nodes?.map((nodes, index) => (
        <Badge variant={variant} className={className} key={index}>
          {nodes}
        </Badge>
      ))}
    </div>
  );
};

export default TechnologiesList;
