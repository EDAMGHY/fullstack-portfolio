import {
  AboutMeSection,
  ExperiencesSection,
  ProjectsSection,
} from "@/components/sections";

export const MainSection = () => {
  return (
    <section className="space-y-5 py-5">
      <AboutMeSection />
      <hr />
      <ExperiencesSection />
      <hr />
      <ProjectsSection />
    </section>
  );
};
