import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { IProjectItem } from "@/types";
import TechnologiesList from "../TechnologiesList";

export const ProjectItem = ({
  description,
  link,
  name,
  technologies,
}: IProjectItem) => {
  return (
    <Link href={link || "#."}>
      <div className="group space-y-2">
        {name && (
          <h5 className="heading-5 !font-semibold group-hover:text-blue-400 text-lg duration-300 transition-all inline-flex gap-2">
            {name}
            <ArrowUpRight
              className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 transition-transform"
              size={16}
            />
          </h5>
        )}

        <p className="font-light">{description}</p>
        <TechnologiesList variant="custom" nodes={technologies} />
      </div>
    </Link>
  );
};
