import { ExperiencesData, ProjectsData } from "@/types";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const projectRenderComponent = (item: ProjectsData, idx: number) => {
  return (
    <TableRow key={item.id || idx}>
      <TableCell className="text-nowrap">
        {item?.name && <div className="font-medium">{item.name}</div>}
      </TableCell>
      <TableCell>
        {item?.description && <div className="text-sm">{item.description}</div>}
      </TableCell>
    </TableRow>
  );
};

export const experienceRenderComponent = (
  item: ExperiencesData,
  idx: number
) => {
  return (
    <TableRow key={item.id || idx}>
      <TableCell>
        {item?.employer && (
          <div className="text-nowrap font-medium">{item.employer}</div>
        )}
      </TableCell>
      <TableCell className="text-nowrap">{item?.occupation}</TableCell>
      <TableCell className="">
        {item?.stacks?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item?.stacks.map((stack) => (
              <Badge key={stack}>{stack}</Badge>
            ))}
          </div>
        )}
      </TableCell>
    </TableRow>
  );
};
