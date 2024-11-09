import { DashboardSection } from "@/components/DashboardSection";
import { ExperiencesForm } from "@/components/forms";
import { ExperiencesListing } from "@/components/experiences";
const ExperiencesPage = () => {
  return (
    <div className="space-y-8">
      <DashboardSection
        title="Experiences"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          libero necessitatibus similique voluptatum magni consectetur sit
          maiores nostrum quia accusantium! Accusamus molestias fugiat aperiam
          perspiciatis!"
        url="/dashboard"
      >
        <ExperiencesForm />
      </DashboardSection>
      <ExperiencesListing />
    </div>
  );
};

export default ExperiencesPage;
