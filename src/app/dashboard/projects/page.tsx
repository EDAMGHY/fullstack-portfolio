import { DashboardSection } from "@/components/DashboardSection";
import { ProjectsForm } from "@/components/forms";
import { ProjectListing } from "@/components/projects";
import { getProjects } from "@/actions";
import { getNormalizedProjects } from "@/lib/utils";

const ProjectsPage = async () => {
  const data = await getProjects();
  const projects = getNormalizedProjects(data);

  return (
    <div className="space-y-8">
      <DashboardSection
        title="Projects"
        description="Explore my portfolio of projects where I’ve applied my technical skills to create responsive, intuitive, and visually appealing applications. Each project reflects my growth as a developer and showcases my ability to turn ideas into reality with modern web technologies."
        url="/dashboard"
      >
        <ProjectsForm />
      </DashboardSection>
      <ProjectListing data={projects} />
    </div>
  );
};

export default ProjectsPage;
