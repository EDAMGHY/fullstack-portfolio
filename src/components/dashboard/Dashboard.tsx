import { FolderKanban, Luggage } from "lucide-react";

import { AnalyticsCard } from "./AnalyticsCard";
import { RecentItems } from "./RecentItems";
import { ExperiencesData, ProjectsData } from "@/types";
import {
  getLastProjects,
  getLastExperiences,
  getProjectsCount,
  getExperiencesCount,
} from "@/actions";
import { getNormalizedProjects, getNormalizedExperiences } from "@/lib/utils";
import {
  experienceRenderComponent,
  projectRenderComponent,
} from "./RenderComponents";

export const DashboardComponent = async () => {
  const projectsData = await getLastProjects();
  const projects = await getNormalizedProjects(projectsData);
  const experiencesData = await getLastExperiences();
  const experiences = await getNormalizedExperiences(experiencesData);

  const projectsCount = await getProjectsCount();
  const experiencesCount = await getExperiencesCount();

  return (
    <section className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        <AnalyticsCard
          title="Total Projects"
          description="The total number of projects"
          Icon={FolderKanban}
          value={projectsCount}
        />
        <AnalyticsCard
          title="Total Experiences"
          description="The total number of experiences"
          Icon={Luggage}
          value={experiencesCount}
        />
      </div>
      <div className="grid gap-4 md:gap-8 grid-cols-1 xl:grid-cols-2">
        <RecentItems<ProjectsData>
          title="Recent Projects"
          description="List of recent projects created by you"
          linkText="View All"
          url="/dashboard/projects"
          headers={["Name", "Description"]}
          renderComponent={projectRenderComponent}
          items={projects || []}
        />

        <RecentItems<ExperiencesData>
          title="Recent Experiences"
          description="List of recent projects created by you"
          linkText="View All"
          url="/dashboard/projects"
          headers={["Employer", "Occupation", "Stack"]}
          renderComponent={experienceRenderComponent}
          items={experiences || []}
        />
      </div>
    </section>
  );
};
