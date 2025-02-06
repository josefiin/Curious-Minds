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
          dark: "#3F2672",
          cta: "#8A6CF6",
          mid: "#D1BCFF",
          light: "#F6F3FF",
        },
        berry: {
          mid: "#FF3247",
        },
        jelly: {
          mid: "#FF90C4",
          light: "#FFE1E4",
        },
        lion: {
          dark: "#FFCE01",
          mid: "#FDEA6A",
          light: "#FFFCBA",
        },
        beige: {
          light: "#FFFDF9",
          mid: "#E8E7E3",
        },
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
