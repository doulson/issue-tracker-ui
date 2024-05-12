import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegCircleCheck } from "react-icons/fa6";
import LinkButton from "@/components/button/link-button";

const RegisterSuccessPage = () => {
  return (
    <Card className="w-[450px] text-center">
      <CardHeader>
        <CardTitle>
          <FaRegCircleCheck className="text-green-500 mx-auto text-5xl mb-2" />
        </CardTitle>
        <CardDescription>Confimation Email Sent!</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Please Check Your Mailbox to verify your account.</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <LinkButton href={"/"} label="Back to Home Page" />
      </CardFooter>
    </Card>
  );
};

export default RegisterSuccessPage;
