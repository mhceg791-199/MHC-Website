const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        large: "28px",
        small: "18px",
      },
      colors: {
        mainGold: "#C5A363",
        lightGray: "#EDEDED",
      },
    },
  },
  plugins: [],
});
