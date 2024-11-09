"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

export type DatePickerProps<T extends FieldValues, TPath extends Path<T>> = {
  field: ControllerRenderProps<T, TPath>;
  FormControl: React.ElementType;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
};

export function DatePicker<T extends FieldValues, TPath extends Path<T>>({
  field,
  FormControl,
  className,
  placeholder,
  disabled,
}: DatePickerProps<T, TPath>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            disabled={disabled}
            variant={"outline"}
            className={cn(
              "pl-3 text-left font-normal",
              !field.value && "text-muted-foreground",
              className
            )}
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span className="text-sm">{placeholder || "Pick a date"}</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={field.onChange}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
