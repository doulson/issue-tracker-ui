"use client";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { resetPwSchema } from "@/schemas/auth";
import { useRouter } from "next/navigation";
import { baseUrl, AuthServices } from "@/services/AuthServices";
import { FormMessageInter } from "@/types/component";

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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import FormMessageBlock from "@/components/form/form-message-block";

const ResetPwForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [msg, setMsg] = useState<FormMessageInter>({
    message: "",
    severity: "success",
  });

  const form = useForm<z.infer<typeof resetPwSchema>>({
    resolver: zodResolver(resetPwSchema),
  });
  function onSubmit(values: z.infer<typeof resetPwSchema>) {
    startTransition(async () => {
      try {
        const res = await AuthServices.resetPasswordByEmail(values.email);
        setMsg({
          severity: "success",
          message: "Email reset password is sent, please check your mailbox",
        });
      } catch (error) {
        setMsg({
          message: "Opss, Email not found",
          severity: "error",
        });
        console.log(error);
      } finally {
        form.reset({ email: "" });
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormMessageBlock message={msg.message} severity={msg.severity} />
        <br />
        <Button disabled={isPending} type="submit" className="w-full">
          Confirm
        </Button>
      </form>
    </Form>
  );
};

export default ResetPwForm;
