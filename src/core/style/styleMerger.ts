import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ResponsiveProps } from "./ResponsiveProps";

export const merge = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

// If the Object class fails from responsiveMerge use this on the server side
export const responsiveMergeServer = (data: ResponsiveProps): string => {
  let result: string[] = [];

  let combine = (key: string, value: string | string[]) => {
    let values: string[] = [];
    if (Array.isArray(value)) {
      value.forEach((item) => {
        values = [...values, ...item.split(" ")];
      });
    } else {
      values = value.split(" ");
    }

    return values.map((x) => `${key}:${x}`).join(" ");
  };

  if (data.xs) result = [...result, combine("xs", data.xs)];
  if (data.sm) result = [...result, combine("sm", data.sm)];
  if (data.md) result = [...result, combine("md", data.md)];
  if (data.lg) result = [...result, combine("lg", data.lg)];
  if (data.xl) result = [...result, combine("xl", data.xl)];
  if (data.xxl) result = [...result, combine("xxl", data.xxl)];

  return result.join(" ");
};

export const responsiveMerge = (data: ResponsiveProps | any): string => {
  let result: string[] = [];

  Object.keys(data).forEach((key) => {
    let value = data[key];
    if (!value) return;

    let values: string[] = [];
    if (Array.isArray(value)) {
      value.forEach((item) => {
        values = [...values, ...item.split(" ")];
      });
    } else {
      values = [...values, ...value.split(" ")];
    }

    if (key !== "default") {
      values = values.map((x) => `${key}:${x}`);
    }

    result = [...result, ...values];
  });

  return result.join(" ");
};
