import { cva } from "class-variance-authority";

export const ButtonBaseVariants = cva("p-2 rounded shadow-lg", {
  variants: {
    template: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    template: "default",
    size: "default",
  },
});
