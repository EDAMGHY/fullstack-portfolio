import { Section } from "@/components/Section";
import { findAboutMe } from "@/actions";
import { cn } from "@/lib/utils";

export const AboutMeSection = async () => {
  const aboutMe = await findAboutMe();

  return (
    <Section title="About Me">
      <div>
        {aboutMe?.bio?.split?.("\n\n")?.map((paragraph, index) => (
          <p key={index} className={cn("text-justify", index !== 0 && "mt-5")}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
};
