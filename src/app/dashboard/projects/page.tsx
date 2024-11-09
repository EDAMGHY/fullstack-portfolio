import { DashboardSection } from "@/components/DashboardSection";
import { ProjectsForm } from "@/components/forms";
import { ProjectListing } from "@/components/projects";

const ProjectsPage = () => {
  return (
    <div className="space-y-8">
      <DashboardSection
        title="Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          libero necessitatibus similique voluptatum magni consectetur sit
          maiores nostrum quia accusantium! Accusamus molestias fugiat aperiam
          perspiciatis!"
        url="/dashboard"
      >
        <ProjectsForm />
      </DashboardSection>
      <ProjectListing />
    </div>
  );
};

export default ProjectsPage;
