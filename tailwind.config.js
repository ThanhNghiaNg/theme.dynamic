/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "dynamic-text": "var(--text-color)", // Use your CSS variable
      },
      backgroundColor: {
        "dynamic-background": "var(--background-color)", // Add background for future use
      },
    },
  },
  plugins: [],
};
