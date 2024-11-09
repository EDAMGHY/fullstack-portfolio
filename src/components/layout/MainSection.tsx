import { experiences, projects } from "@/lib/data";
import { ExperienceItem } from "@/components/experiences";
import { ProjectItem } from "@/components/projects";
import { IExperienceItem, IProjectItem } from "@/types";
import { Section } from "../Section";

export const MainSection = () => {
  return (
    <section className="space-y-5 py-5">
      <Section title="About Me">
        <div>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error rem
            repellat, beatae recusandae repudiandae quod reprehenderit,
            obcaecati voluptatem eius ex est nobis voluptate magni ipsum
            molestias! Quo cupiditate voluptate, ipsam ullam dolorem non ipsum
            autem libero voluptatibus pariatur praesentium nostrum, quia placeat
            tempora eveniet numquam totam voluptates laborum assumenda, eius
            dolorum vitae fugiat aliquid vel. Earum asperiores quae, accusamus
            dolores assumenda quo amet voluptatum quod harum adipisci deleniti
            atque, vitae ducimus doloremque molestiae officiis fugiat nihil
            placeat velit? Quisquam nihil, doloremque repellat exercitationem
            veritatis nulla consequatur molestiae, eveniet, pariatur at vitae
            beatae accusamus illum eos odio nobis? Et molestiae deserunt nostrum
            numquam cumque nihil reiciendis eligendi labore, laudantium at
            exercitationem laboriosam accusantium
          </p>
          <p className="mt-5 text-justify">
            veniam rerum! Esse at quam dolore placeat natus vero reiciendis
            obcaecati quis laudantium ad impedit, consectetur repellendus
            officiis sint a, nobis dicta tempora harum nesciunt debitis non
            incidunt quas ea? Repellat voluptas a ullam odit eveniet! Aliquam
            unde quidem,
          </p>
          <p className="mt-5 text-justify">
            inventore dolorum dolore atque saepe cum nobis quos quisquam dolorem
            quae nisi placeat esse. Adipisci nobis mollitia natus aliquid
            fugiat. Fugit laudantium id repudiandae odit nihil rem facere, a
            beatae, at iusto harum laboriosam ea voluptatum molestiae vel nisi
            enim!
          </p>
        </div>
      </Section>
      <hr />
      <Section title="Experience">
        <div className="w-full grid gap-10 grid-cols-1">
          {experiences?.map((exp: IExperienceItem, index: number) => (
            <ExperienceItem {...exp} key={exp?.id || index} />
          ))}
        </div>
      </Section>
      <hr />
      <Section title="Projects">
        <div className="w-full grid gap-10 grid-cols-1">
          {projects?.map((exp: IProjectItem, index: number) => (
            <ProjectItem {...exp} key={exp?.id || index} />
          ))}
        </div>
      </Section>
    </section>
  );
};
