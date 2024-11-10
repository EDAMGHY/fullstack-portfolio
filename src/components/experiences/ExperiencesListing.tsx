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
import { ExperiencesData } from "@/types";
import { formatDate } from "@/lib/utils";
import { deleteExperience } from "@/actions";
import { DeleteItem } from "../DeleteItem";
export const ExperiencesListing = ({
  data = [],
}: {
  data: ExperiencesData[];
}) => {
  return (
    <div className="border rounded-lg p-4 bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employer</TableHead>
            <TableHead>Occupation</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Stack</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((exp) => (
            <TableRow key={exp?.id}>
              <TableCell className="text-nowrap">
                <div className="font-medium">{exp.employer}</div>
              </TableCell>
              <TableCell className="text-nowrap">{exp.occupation}</TableCell>
              <TableCell className="text-nowrap">
                {formatDate(exp.startDate)?.toString()}
              </TableCell>
              <TableCell className="text-nowrap">
                {exp.endDate ? formatDate(exp.endDate)?.toString() : "Present"}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  {exp.stacks.map((stack) => (
                    <Badge key={stack}>{stack}</Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Link className="underline" href={exp.url}>
                  {exp.url}
                </Link>
              </TableCell>
              <TableCell>
                <DeleteItem id={exp.id} onDelete={deleteExperience} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
