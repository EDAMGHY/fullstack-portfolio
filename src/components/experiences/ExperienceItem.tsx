import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { formatDate } from "@/lib/utils";
import { IExperienceItem } from "@/types";
import TechnologiesList from "../TechnologiesList";

export const ExperienceItem = ({
  employer,
  endDate,
  position,
  startDate,
  link,
  isPresent = false,
  tech = [],
}: IExperienceItem) => {
  if (link) {
  }
  return (
    <Link target="_blank" href={link || "#."}>
      <div className="space-y-2 group">
        <div className="flex justify-between w-full gap-4">
          <h2 className="group-hover:text-blue-400 text-lg duration-300 transition-all inline-flex gap-2 font-bold">
            {position}{" "}
            <ArrowUpRight
              className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 transition-transform"
              size={16}
            />
          </h2>{" "}
          <p className="text-sm text-neutral-500">
            {formatDate(startDate)} -{" "}
            {isPresent ? "Present" : formatDate(endDate!)}
          </p>
        </div>
        {employer && (
          <div className="flex justify-between w-full gap-4">
            <h3 className="text-base tracking-widest dark:text-zinc-400 text-zinc-500 font-light">
              {employer}
            </h3>
          </div>
        )}
        <TechnologiesList variant="custom" nodes={tech} />
      </div>
    </Link>
  );
};
