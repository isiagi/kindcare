/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        rowFluid: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
