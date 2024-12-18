"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { experiencesFormSchema } from "./schemas";
import { DatePicker } from "@/components/ui/date-picker";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { createExperience } from "@/actions";

export function ExperiencesForm() {
  const { data: session } = useSession();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof experiencesFormSchema>>({
    resolver: zodResolver(experiencesFormSchema),
    defaultValues: {
      occupation: "",
      employer: "",
      url: "",
      stack: "",
      startDate: undefined,
      endDate: null,
      isPresent: false,
    },
  });

  const { watch } = form;

  async function onSubmit(values: z.infer<typeof experiencesFormSchema>) {
    if (!session?.user?.id) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "User not authenticated",
      });
      return;
    }

    try {
      await createExperience({
        employer: values.employer,
        occupation: values.occupation,
        url: values.url,
        stack: values.stack,
        startDate: values.startDate,
        endDate: values.endDate,
        isPresent: values.isPresent,
        authorId: session?.user?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      toast({
        variant: "success",
        title: "Experience Created Successfully",
        description: "Experience Created Successfully",
      });
      form.reset();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          err instanceof Error ? err.message : "Something went wrong",
      });
    }
  }

  const isPresent = watch("isPresent");

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "isPresent" && value.isPresent) {
        form.setValue("endDate", null);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="employer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer</FormLabel>
              <FormControl>
                <Input placeholder="Enter Employer..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Occupation</FormLabel>
              <FormControl>
                <Input placeholder="Enter Occupation..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Start Date</FormLabel>
                <DatePicker {...{ field, FormControl }} />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>End Date</FormLabel>
                  <DatePicker
                    disabled={isPresent}
                    {...{ field, FormControl }}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPresent"
              render={({ field }) => (
                <FormItem className="flex flex-row text-zinc-400 items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Current Employed?</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Url</FormLabel>
              <FormControl>
                <Input placeholder="Enter Url..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stack</FormLabel>
              <FormControl>
                <Textarea rows={10} placeholder="Enter Stack..." {...field} />
              </FormControl>
              <FormDescription>
                Each stack should be seperated by a comma.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
