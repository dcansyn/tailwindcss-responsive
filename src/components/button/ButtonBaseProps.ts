import { ResponsiveProps } from "@/core/style/ResponsiveProps";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { ButtonBaseVariants } from "./ButtonBaseVariants";

export type ButtonBaseProps = VariantProps<typeof ButtonBaseVariants> &
  ResponsiveProps & {
    children: ReactNode;
    className?: string | undefined;
  };
