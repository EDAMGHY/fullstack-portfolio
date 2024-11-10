"use client";

import { useSearchParams } from "next/navigation";

export const ErrorMessage = () => {
  const params = useSearchParams();
  const error = params.get("error");

  const mappingError = {
    AccessDenied: "You don't have the permission to access this routes",
  };

  return (
    <p className="text-2xl uppercase text-white">
      {mappingError[error as keyof typeof mappingError] ||
        "Something went wrong, Please try again later"}
    </p>
  );
};
