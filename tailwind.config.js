/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-color": "#02208D",
        "app-white": "#ffffff",
        "app-blue": "#3F20FF",
        "app-red": "#B20000",
        "app-green": "#1BC100",
        "app-gray": "#909090",
        "gradient": "linear-gradient(to right, #DF1EFF, #FFC93E)",
        "primary-font-color": "#000000",
        "secondary-font-color": "#262626",
      },
      fontFamily: {
        "logo": ["Krona One", "sans-serif"],
        "body": ["Poppins", "sans-serif"]
      },
      borderRadius: {
        "radius-min": "8px",
        "radius-medium": "16px",
        "radius-rounded": "999px",
      },
      gridTemplateColumns: {
        "auto-2": "auto 1fr",
      }
    },
  },
  plugins: [],
}

