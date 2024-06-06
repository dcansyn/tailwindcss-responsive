import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    transform: {
      tsx: (content) => {
        let replaceProps = (_: any, prop: string, value: string) => {
          let transformedValue = value
            .split(" ")
            .map((x) => `${prop}:${x}`)
            .join(" ");

          return `${prop}="${transformedValue}"`;
        };

        return content.replace(/\b(xs|sm|md|lg|xl|xxl)="([^"]*)"/g, replaceProps);
      },
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        "default-gradient": "linear-gradient(135deg, #2C5BD3, #6C5ED3)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "320px", // Small Phone
      sm: "576px", // Phone
      md: "768px", // Tablet
      lg: "990px", // Big Tablet
      xl: "1200px", // Notebook
      xxl: "1440px", // Monitor
    },
  },
  plugins: [],
};
export default config;
