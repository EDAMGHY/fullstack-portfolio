"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { aboutMeFormSchema } from "./schemas";
import { createAboutMe, updateAboutMe } from "@/actions";
import { useSession } from "next-auth/react";
import type { AboutMe } from "@prisma/client";

export function AboutMeForm({ aboutMe }: { aboutMe: AboutMe }) {
  const { data: session } = useSession();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof aboutMeFormSchema>>({
    resolver: zodResolver(aboutMeFormSchema),
    defaultValues: {
      fullName: aboutMe?.fullName || "",
      description: aboutMe?.description || "",
      bio: aboutMe?.bio || "",
    },
  });

  async function onSubmit(values: z.infer<typeof aboutMeFormSchema>) {
    if (!session?.user?.id) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "User not authenticated",
      });
      return;
    }
    try {
      if (aboutMe?.id) {
        await updateAboutMe({
          id: aboutMe.id,
          fullName: values.fullName,
          description: values.description,
          bio: values.bio,
          authorId: session?.user?.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } else {
        await createAboutMe({
          fullName: values.fullName,
          description: values.description,
          bio: values.bio,
          authorId: session?.user?.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      toast({
        variant: "success",
        title: aboutMe?.id
          ? "About Me Updated Successfully"
          : "About Me Created Successfully",
        description: aboutMe?.id
          ? "About Me Updated Successfully"
          : "About Me Created Successfully",
      });
      if (!aboutMe?.id) form.reset();
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
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter FullName..." {...field} />
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
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea rows={10} placeholder="Enter Bio..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{aboutMe?.id ? "Update" : "Submit"}</Button>
      </form>
    </Form>
  );
}
