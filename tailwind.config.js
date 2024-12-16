const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        large: "28px",
        xLarge: "35px",
        small: "18px",
      },
      colors: {
        mainGold: "#C5A363",
        secondGold: "rgba(197, 163, 99, 0.5)",
        lightGray: "#EDEDED",
      },
    },
  },
  plugins: [],
});
