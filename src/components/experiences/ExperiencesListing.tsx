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

export const ExperiencesListing = () => {
  return (
    <div className="border rounded-lg space-y-4 p-4">
      <div className="space-y-4">
        <h3 className="heading-3">Experiences Listing</h3>
        <hr />
      </div>
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
          <TableRow>
            <TableCell className="text-nowrap">
              <div className="font-medium">VOID</div>
            </TableCell>
            <TableCell>Frontend Developer</TableCell>
            <TableCell>2023-01-01</TableCell>
            <TableCell>2024-01-01</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                <Badge>NextJS</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Typescript</Badge>
              </div>
            </TableCell>
            <TableCell>
              <Link
                className="underline"
                href="https://attijari-mdm.vercel.app"
              >
                https://attijari-mdm.vercel.app
              </Link>
            </TableCell>
            <TableCell>
              <Button variant="destructive" size="icon">
                <Trash size={24} />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-nowrap">
              <div className="font-medium">VOID</div>
            </TableCell>
            <TableCell>Frontend Developer</TableCell>
            <TableCell>2023-01-01</TableCell>
            <TableCell>2024-01-01</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                <Badge>NextJS</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Typescript</Badge>
              </div>
            </TableCell>
            <TableCell>
              <Link
                className="underline"
                href="https://attijari-mdm.vercel.app"
              >
                https://attijari-mdm.vercel.app
              </Link>
            </TableCell>
            <TableCell>
              <Button variant="destructive" size="icon">
                <Trash size={24} />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-nowrap">
              <div className="font-medium">VOID</div>
            </TableCell>
            <TableCell>Frontend Developer</TableCell>
            <TableCell>2023-01-01</TableCell>
            <TableCell>2024-01-01</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                <Badge>NextJS</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Typescript</Badge>
              </div>
            </TableCell>
            <TableCell>
              <Link
                className="underline"
                href="https://attijari-mdm.vercel.app"
              >
                https://attijari-mdm.vercel.app
              </Link>
            </TableCell>
            <TableCell>
              <Button variant="destructive" size="icon">
                <Trash size={24} />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-nowrap">
              <div className="font-medium">VOID</div>
            </TableCell>
            <TableCell>Frontend Developer</TableCell>
            <TableCell>2023-01-01</TableCell>
            <TableCell>2024-01-01</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                <Badge>NextJS</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Typescript</Badge>
              </div>
            </TableCell>
            <TableCell>
              <Link
                className="underline"
                href="https://attijari-mdm.vercel.app"
              >
                https://attijari-mdm.vercel.app
              </Link>
            </TableCell>
            <TableCell>
              <Button variant="destructive" size="icon">
                <Trash size={24} />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-nowrap">
              <div className="font-medium">VOID</div>
            </TableCell>
            <TableCell>Frontend Developer</TableCell>
            <TableCell>2023-01-01</TableCell>
            <TableCell>2024-01-01</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                <Badge>NextJS</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Typescript</Badge>
              </div>
            </TableCell>
            <TableCell>
              <Link
                className="underline"
                href="https://attijari-mdm.vercel.app"
              >
                https://attijari-mdm.vercel.app
              </Link>
            </TableCell>
            <TableCell>
              <Button variant="destructive" size="icon">
                <Trash size={24} />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-nowrap">
              <div className="font-medium">VOID</div>
            </TableCell>
            <TableCell>Frontend Developer</TableCell>
            <TableCell>2023-01-01</TableCell>
            <TableCell>2024-01-01</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                <Badge>NextJS</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Typescript</Badge>
              </div>
            </TableCell>
            <TableCell>
              <Link
                className="underline"
                href="https://attijari-mdm.vercel.app"
              >
                https://attijari-mdm.vercel.app
              </Link>
            </TableCell>
            <TableCell>
              <Button variant="destructive" size="icon">
                <Trash size={24} />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
