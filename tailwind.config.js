/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "16px",
      md: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": ["30px", "39.06px"],
      "3xl": ["40px", "52.08px"],
      "4xl": ["50px", "65.1px"],
      "5xl": ["60px", "67.5px"],
    },
    extend: {
      colors: {
        "color-primary": "#5CDB94",
        "color-secondary": "#fff",
        "color-third": "#389583",
        "color-fourth": "#05396B",
        "color-fifth": "rgba(0, 0, 0, 0.7)", 
        "color-sixth": "#2E35FF",
        "color-seventh": "#2E3092"

      },
    },
  },
  plugins: [],
};
