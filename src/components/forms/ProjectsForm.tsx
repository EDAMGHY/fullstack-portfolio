"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { projectsFormSchema } from "./schemas";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { createProject } from "@/actions";

export function ProjectsForm() {
  const { data: session } = useSession();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof projectsFormSchema>>({
    resolver: zodResolver(projectsFormSchema),
    defaultValues: {
      name: "",
      url: "",
      description: "",
      stack: "",
    },
  });

  async function onSubmit(values: z.infer<typeof projectsFormSchema>) {
    if (!session?.user?.id) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "User not authenticated",
      });
      return;
    }

    try {
      await createProject({
        name: values.name,
        description: values.description,
        url: values.url,
        stack: values.stack,
        authorId: session?.user?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      toast({
        variant: "default",
        title: "Project Created Successfully",
        description: "Project Created Successfully",
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter Description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
