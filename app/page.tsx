import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MyIssue",
  description: "An application helps you solve issues",
  robots: { index: false, follow: false },
};
const Home = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
    </main>
  );
};

export default Home;
