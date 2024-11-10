import { Section } from "@/components/Section";
import { ProjectItem } from "@/components/projects";
import { getProjects } from "@/actions";
import { getSectionProjects } from "@/lib/utils";

export const ProjectsSection = async () => {
  const data = await getProjects();
  const projects = getSectionProjects(data);

  return (
    <Section title="Projects">
      <div className="w-full grid gap-10 grid-cols-1">
        {projects?.map((exp, index: number) => (
          <ProjectItem {...exp} key={exp?.id || index} />
        ))}
      </div>
    </Section>
  );
};
