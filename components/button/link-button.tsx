"use client";
import Link from "next/link";
//3rd party libraries
import { motion } from "framer-motion";
//components
import { Button } from "./../ui/button";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

interface Props {
  href: string;
  label: string;
  className?: string;
  icon?: boolean;
  iconPosition?: "start" | "end";
}

const LinkButton = ({
  href,
  label,
  icon = true,
  className,
  iconPosition = "end",
}: Props) => {
  const MotionLink = motion(Link);
  return (
    <Button variant="link" className={className}>
      <MotionLink
        href={href}
        className="flex gap-1 items-center"
        whileHover="hover"
      >
        {icon && iconPosition == "start" && (
          <motion.span
            variants={{
              hover: { x: -10, transition: { type: "spring", stiffness: 400 } },
            }}
          >
            <FaAngleLeft />
          </motion.span>
        )}
        {label}
        {icon && iconPosition == "end" && (
          <motion.span
            variants={{
              hover: { x: 10, transition: { type: "spring", stiffness: 400 } },
            }}
          >
            <FaAngleRight />
          </motion.span>
        )}
      </MotionLink>
    </Button>
  );
};

export default LinkButton;
