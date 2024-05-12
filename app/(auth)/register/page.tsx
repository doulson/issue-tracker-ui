import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import Social from "@/components/button/social-group-button";
import RegisterForm from "./components/register-form";
import LinkButton from "@/components/button/link-button";

const Register = () => {
  return (
    <Card className="w-[95%] sm:w-[450px]">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="mb-5 flex items-center justify-center w-full">
          <Separator className="w-2/5" />
          <span className="bg-white px-3">or</span>
          <Separator className="w-2/5" />
        </div>
        {/* <Social /> */}
        <LinkButton href={"/login"} label="Already have an account?" />
      </CardFooter>
    </Card>
  );
};

export default Register;
