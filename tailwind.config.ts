import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Absolute Colors
        'custom-white': '#FFFFFF',
        'custom-black': '#000000',

        // Dark Shades
        'cd-10': '#191A1A',
        'cd-13': '#202122',
        'cd-16': '#28292A',
        'cd-18': '#2D2F2F',
        'cd-22': '#373730',
        'cd-25': '#3F3F3F',
        'cd-02': '#060606',
        'cd-04': '#0A0A0B',
        'cd-06': '#0F0F10',
        'cd-07': '#121212',
        'cd-08': '#141415',

        // Grey Shades
        'cg-1': '#666666',
        'cg-2': '#7D7D7D',
        'cg-3': '#999999',
        'cg-4': '#CCCCCC',
        'cg-5': '#D9D9D9',
        'cg-6': '#E6E6E6',
        'cg-7': '#F2F2F2',
        'cg-8': '#FCFCFC',
        'cg-9': '#a2a2a2',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;