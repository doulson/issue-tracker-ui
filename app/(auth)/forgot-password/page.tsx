import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LinkButton from "@/components/button/link-button";
import ResetPwForm from "./components/reset-pw-form";
const page = () => {
  return (
    <Card className="w-full sm:w-[500px]">
      <CardHeader>
        <div>
          <LinkButton
            href={"/login"}
            label="Back to Login"
            iconPosition="start"
            className="p-0"
          />
        </div>

        <CardTitle>Forgot Password</CardTitle>
        <CardDescription>Reset Password with email</CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPwForm />
      </CardContent>
      <CardFooter className="flex flex-col"></CardFooter>
    </Card>
  );
};

export default page;
