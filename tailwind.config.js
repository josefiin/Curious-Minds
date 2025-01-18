/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["General Sans", "sans"],
      },
      colors: {
        plum: {
          dark: "#3B197F",
          mid: "#7B5CEE",
          light: "#D9C8F5",
        },
        berry: {
          mid: "#FF3247",
        },
        jelly: {
          mid: "#FF90C4",
          light: "#FFDBEC",
        },
        lion: {
          dark: "#FFCE01",
          mid: "#FDEA6A",
          light: "#FFFCBA",
        },
        beige: "#F9F4F2",
        "light-grey": "#F6F6F8",
      },
      borderRadius: {
        "image-lg": "24px",
        "image-md": "20px",
      },
    },
  },
  plugins: [],
};
