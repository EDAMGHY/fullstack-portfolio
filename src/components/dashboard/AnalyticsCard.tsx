import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { AnalyticsCardProps } from "@/types";

export const AnalyticsCard = ({
  title,
  description,
  Icon,
  value,
  className,
}: AnalyticsCardProps) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          {title && (
            <CardTitle className="text-lg font-medium mb-2">{title}</CardTitle>
          )}
          {description && (
            <CardDescription className="text-xs font-light">
              {description}
            </CardDescription>
          )}
        </div>
        {Icon && <Icon className="h-12 w-12 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-6xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};
