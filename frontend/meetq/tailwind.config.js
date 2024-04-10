/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
      extend: {
        colors: {
          cPurple: "#6D5593",
          cDarkPurple: "#543D7B",
          cGrey: "#F9F9F9",
          cDarkGrey: "#BBC1C6",
          cGrey3: "#F5F5F5",
        },
      },
    },
    plugins: [],
    safelist: [
      {
        pattern: /(bg|text|border)-c(Purple|DarkPurple|Grey|DarkGrey|Grey3)/,
        variants: ["hover"],
      },
    ],
  };
  