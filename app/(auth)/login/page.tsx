import { Suspense } from "react";
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
import LoginForm from "./components/login-form";
import LinkButton from "@/components/button/link-button";

const Login = () => {
  return (
    <Card className="w-full sm:w-[400px]">
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>Welcome back</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense>
          <LoginForm />
        </Suspense>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="mb-5 flex items-center justify-center w-full">
          <Separator className="w-2/5" />
          <span className="bg-white px-3">or</span>
          <Separator className="w-2/5" />
        </div>
        <Suspense>
          <Social />
        </Suspense>

        <LinkButton href={"/register"} label="Don't have an account" />
      </CardFooter>
    </Card>
  );
};

export default Login;
