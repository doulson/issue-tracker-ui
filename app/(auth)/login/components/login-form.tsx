"use client";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/auth";
import { Button } from "@/components/ui/button";
import FormError from "@/components/form/form-error";
import { redirect, useSearchParams } from "next/navigation";
import FormSuccess from "@/components/form/form-success";
import { AuthServices } from "@/services/AuthServices";
import Link from "next/link";
const LoginForm = () => {
  const params = useSearchParams();
  const urlError =
    params.get("error") == "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      try {
        const res = await AuthServices.login({
          email: values.email,
          password: values.password,
        });
        console.log(res);
        setSuccess(res.success);
        if (res.redirect) redirect(res.redirect);
        setMessage("");
      } catch (error) {
        setMessage("Opss, Seem like something wrong");
        console.log(error);
      } finally {
        form.reset();
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Password</FormLabel>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSuccess message={success} />
        <FormError message={message || urlError} />
        <br />
        <Button disabled={isPending} type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
