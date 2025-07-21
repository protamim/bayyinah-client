"use client";

import React from "react";
import { Steps, useSteps } from "react-step-builder";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Progress } from "@/components/ui/progress";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { getNames } from "country-list";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCountryCode } from "@/hooks/useCountry";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const StudentRegistrationForm = () => {
  const { countryCode } = useCountryCode();

  const {
    current,
    hasNext,
    hasPrev,
    isFirst,
    isLast,
    jump,
    next,
    prev,
    progress,
    total,
  } = useSteps();

  console.log(isLast, isFirst);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleOnStepChange = () => {};

  return (
    <React.Fragment>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto"
        >
          <div aria-describedby="progress-tracker" className="mb-8">
            <Progress value={progress + 1 * 100} />
          </div>

          <Steps onStepChange={handleOnStepChange}>
            {/* FIRST STEP START */}
            <div
              aria-describedby="first-step"
              className="grid grid-cols-2 gap-x-5 gap-y-6"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        {...field}
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        {...field}
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Mobile</FormLabel>
                    <FormControl>
                      <PhoneInput
                        className="border border-[#DCDCDC] rounded-md bg-white h-12 px-3 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 [&>input]:focus-within:outline-0 focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]"
                        defaultCountry="AZ"
                        international
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Country */}
              <FormField
                name=""
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(Number(value))}
                      >
                        <SelectTrigger className="border border-[#DCDCDC] w-full rounded-lg bg-white !h-12 py-3 px-4 flex text-base font-normal text-neutral-500 placeholder:text-base transition-all ease-in-out duration-300 focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]">
                          <SelectValue placeholder="Choose your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {getNames().map((country, index) => (
                            <SelectItem key={index} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* FIRST STEP END */}

            {/* SECOND STEP START */}
            <div aria-describedby="second-step">
              <h4>What would you like to learn?</h4>
            </div>
            {/* SECOND STEP END */}
          </Steps>

          {/* ACTIONS BUTTONS */}
          <div
            aria-describedby="form-action-btn-group"
            className="mt-10 flex items-center justify-end"
          >
            {hasPrev && <Button>Previous</Button>}
            {hasNext ? (
              <Button>Next Step</Button>
            ) : (
              isLast && <Button type="submit">Submit</Button>
            )}
          </div>
        </form>
      </Form>
    </React.Fragment>
  );
};

export default StudentRegistrationForm;
