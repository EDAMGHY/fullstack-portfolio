import { z } from "zod";

export const aboutMeFormSchema = z.object({
  fullName: z.string({
    required_error: "Full Name is required.",
  }),
  description: z
    .string({ required_error: "Description is required." })
    .min(30, {
      message: "Description must be at least 30 characters.",
    }),
  bio: z.string({ required_error: "Bio is required." }).min(100, {
    message: "Bio must be at least 100 characters.",
  }),
});

export const projectsFormSchema = z.object({
  name: z.string({ required_error: "Name is required." }),
  description: z
    .string({ required_error: "Description is required." })
    .min(30, {
      message: "Description must be at least 30 characters.",
    }),
  url: z.string({
    required_error: "Url is required.",
  }),
  stack: z.string({
    required_error: "Stack is required.",
  }),
});

export const experiencesFormSchema = z
  .object({
    employer: z.string({
      required_error: "Employer is required.",
    }),
    occupation: z.string({
      required_error: "Occupation is required.",
    }),

    url: z.string({
      required_error: "Url is required.",
    }),
    startDate: z.date({
      required_error: "Start Date is required.",
    }),
    endDate: z.date().nullable(),
    isPresent: z.boolean(),
    stack: z.string({
      required_error: "Stack is required.",
    }),
  })
  .refine(
    (data) => {
      if (data.endDate && !data.isPresent) {
        return data.endDate > data.startDate;
      }
      return true;
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  )
  .refine(
    (data) => {
      if (data.isPresent) {
        return data.endDate === null;
      }
      return data.endDate !== null;
    },
    {
      message: "End date is required when not currently employed",
      path: ["endDate"],
    }
  );
