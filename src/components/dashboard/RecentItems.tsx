import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IRecentItems } from "@/types";

export const RecentItems = <T,>({
  title,
  description,
  url,
  linkText = "View All",
  headers = [],
  renderComponent,
  items = [],
}: IRecentItems<T>) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        {url && (
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href={url}>
              {linkText}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header) => (
                <TableHead key={header}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>{items?.map(renderComponent)}</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
