import { findAboutMe } from "@/actions";
import { AboutMeForm } from "@/components/forms";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const AboutMePage = async () => {
  const aboutMe = await findAboutMe();
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3">
      <div className="space-y-4">
        <Button variant="ghost" asChild>
          <Link className="inline-flex gap-3 uppercase" href="/dashboard">
            <FaArrowLeft size={24} />
            Back{" "}
          </Link>
        </Button>
        <h2 className="heading-2">About me</h2>
        <p className="dark:text-zinc-400 text-zinc-600 text-base leading-7 font-light">
          A junior software developer passionate about crafting engaging and
          user-centered web applications. Driven by a love for problem-solving
          and continuous learning, I am dedicated to delivering high-quality
          code and growing my skills in frontend and full-stack development.
        </p>
      </div>
      <div className="lg:col-span-2">
        <AboutMeForm aboutMe={aboutMe!} />
      </div>
    </section>
  );
};

export default AboutMePage;
