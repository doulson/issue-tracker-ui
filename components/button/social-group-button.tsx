"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface Provider {
  google?: Object;
  github?: Object;
  credentials?: Object;
}

const Social = () => {
  const [providers, setProviders] = useState<Provider | null>(null);

  const onClick = (provider: "github" | "google") => {};
  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      {providers?.google && (
        <Button
          variant="outline"
          onClick={() => onClick("google")}
          className="w-full flex gap-2"
        >
          <FcGoogle /> Google
        </Button>
      )}
      {providers?.github && (
        <Button
          variant="outline"
          onClick={() => onClick("github")}
          className="w-full flex gap-2"
        >
          <FaGithub /> Github
        </Button>
      )}
    </div>
  );
};

export default Social;
