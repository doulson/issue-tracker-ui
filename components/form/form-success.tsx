"use client";
import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProp {
  message: string;
}
const FormSuccess = ({ message }: FormSuccessProp) => {
  return (
    message.length > 0 && (
      <div className="bg-green-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-green-500">
        <CheckCircledIcon className="h-4 w-4" /> <p>{message}</p>
      </div>
    )
  );
};

export default FormSuccess;
