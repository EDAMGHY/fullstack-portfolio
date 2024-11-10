import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { ProjectsData } from "@/types";

export const ProjectListing = ({ data = [] }: { data: ProjectsData[] }) => {
  return (
    <div className="border rounded-lg p-4 bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Stack</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, idx) => (
            <TableRow key={item.id || idx}>
              {item?.name && (
                <TableCell className="text-nowrap">
                  <div className="font-medium">{item?.name}</div>
                </TableCell>
              )}
              {item?.description && <TableCell>{item?.description}</TableCell>}
              {item?.stack && (
                <TableCell>
                  <div className="flex flex-wrap gap-2">
                    {item?.technologies.map((stackItem) => (
                      <Badge key={stackItem}>{stackItem}</Badge>
                    ))}
                  </div>
                </TableCell>
              )}
              {item?.url && (
                <TableCell>
                  <Link className="underline" href={item?.url}>
                    {item?.url}
                  </Link>
                </TableCell>
              )}
              <TableCell>
                <Button variant="destructive" size="icon">
                  <Trash size={24} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
