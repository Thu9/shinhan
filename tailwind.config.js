/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-1": "#C8EFFF",
        "gradient-2": "#C5CCFF",
        "shinhan-Blue-700": "#00236e",
        "shinhan-Blue-500": "#0046ff",
        "shinhan-Blue-400": "#2878f5",
        "shinhan-Blue-350": "#788FBD",
        "shinhan-Blue-300": "#4baff5",
        "shinhan-Blue-200": "#8cd2f5",
        "shinhan-Blue-150": "#D1E9FE",
        "shinhan-Blue-100": "#f5faff",
        "shinhan-Green-500": "#CCFF00",
        "shinhan-Black-500": "#232428",
      },
    },
  },
  plugins: [],
};
