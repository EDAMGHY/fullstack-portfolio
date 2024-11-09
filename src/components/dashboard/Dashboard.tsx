import Link from "next/link";
import { ArrowUpRight, FolderKanban, Luggage } from "lucide-react";

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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const DashboardComponent = () => {
  return (
    <section className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-lg font-medium mb-2">
                Total Projects
              </CardTitle>
              <CardDescription className="text-xs font-light">
                The total number of projects
              </CardDescription>
            </div>
            <FolderKanban className="h-12 w-12 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-6xl font-bold">10</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-lg font-medium mb-2">
                Total Experiences
              </CardTitle>
              <CardDescription className="text-xs font-light">
                The total number of experiences
              </CardDescription>
            </div>
            <Luggage className="h-12 w-12 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-6xl font-bold">10</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 grid-cols-1 xl:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>
                List of recent projects created by you
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/projects">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-nowrap">
                    <div className="font-medium">Attijari MDM</div>
                  </TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, consectetur.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-nowrap">
                    <div className="font-medium">Attijari MDM</div>
                  </TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, consectetur.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-nowrap">
                    <div className="font-medium">Attijari MDM</div>
                  </TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, consectetur.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-nowrap">
                    <div className="font-medium">Attijari MDM</div>
                  </TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, consectetur.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Experiences</CardTitle>
              <CardDescription>
                List of recent experiences created by you
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/experiences">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employer</TableHead>
                  <TableHead className="">Occupation</TableHead>
                  <TableHead className="">Time Period</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">VOID</div>
                  </TableCell>
                  <TableCell className="">Frontend Developer</TableCell>
                  <TableCell className="">2023-06-23</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">VOID</div>
                  </TableCell>
                  <TableCell className="">Frontend Developer</TableCell>
                  <TableCell className="">2023-06-23</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">VOID</div>
                  </TableCell>
                  <TableCell className="">Frontend Developer</TableCell>
                  <TableCell className="">2023-06-23</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">VOID</div>
                  </TableCell>
                  <TableCell className="">Frontend Developer</TableCell>
                  <TableCell className="">2023-06-23</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
