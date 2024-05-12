import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { FormMessageInter } from "@/types/component";
import React from "react";

const FormMessageBlock = ({ message, severity }: FormMessageInter) => {
  const getSeverity = () => {
    switch (severity) {
      case "error":
        return "bg-destructive/15 text-destructive";
      case "success":
        return "bg-green-500/15 text-green-500";
      case "warning":
        return "bg-orange-500/15 text-orange-500";
      default:
        return "bg-stone-500/15 text-stone-500";
    }
  };
  const getIcon = () => {
    const className = "h-4 w-4";
    switch (severity) {
      case "error":
        return <ExclamationTriangleIcon className={className} />;
      case "success":
        return <CheckCircledIcon className={className} />;
      case "warning":
        return <QuestionMarkCircledIcon className={className} />;
      default:
        return <QuestionMarkCircledIcon className={className} />;
    }
  };

  return (
    message.length > 0 && (
      <div
        className={`p-3 rounded-md flex items-center gap-x-2 text-sm ${getSeverity()}`}
      >
        {getIcon()} <p>{message}</p>
      </div>
    )
  );
};

export default FormMessageBlock;
