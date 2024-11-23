import { ExperienceItem } from "@/components/experiences";
import { Section } from "@/components/Section";
import { getSectionExperiences } from "@/lib/utils";
import { getExperiences } from "@/actions";

export const ExperiencesSection = async () => {
  const data = await getExperiences();
  const experiences = getSectionExperiences(data!);

  return (
    <Section title="Experience">
      <div className="w-full grid gap-10 grid-cols-1">
        {experiences?.map((exp, index: number) => (
          <ExperienceItem {...exp} key={exp?.id || index} />
        ))}
      </div>
    </Section>
  );
};
