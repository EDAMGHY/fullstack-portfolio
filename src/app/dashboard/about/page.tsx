import { DashboardSection } from "@/components/DashboardSection";
import { AboutMeForm } from "@/components/forms";

const AboutMePage = () => {
  return (
    <DashboardSection
      title="About me"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          libero necessitatibus similique voluptatum magni consectetur sit
          maiores nostrum quia accusantium! Accusamus molestias fugiat aperiam
          perspiciatis!"
      url="/dashboard"
    >
      <AboutMeForm />
    </DashboardSection>
  );
};

export default AboutMePage;
