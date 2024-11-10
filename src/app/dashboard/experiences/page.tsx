import { DashboardSection } from "@/components/DashboardSection";
import { ExperiencesForm } from "@/components/forms";
import { ExperiencesListing } from "@/components/experiences";
import { getExperiences } from "@/actions";
import { getNormalizedExperiences } from "@/lib/utils";

const ExperiencesPage = async () => {
  const data = await getExperiences();
  const experiences = getNormalizedExperiences(data);

  return (
    <div className="space-y-8">
      <DashboardSection
        title="Experiences"
        description="Discover my journey in the tech industry, including hands-on experience with frontend frameworks and collaborations on impactful projects. These experiences have shaped my approach to development, teamwork, and continuous improvement as I advance in my career."
        url="/dashboard"
      >
        <ExperiencesForm />
      </DashboardSection>
      <ExperiencesListing data={experiences} />
    </div>
  );
};

export default ExperiencesPage;
