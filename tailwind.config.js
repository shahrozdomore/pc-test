const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // here's how to extend fonts if needed
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans]
      },
      colors: {
        "search-border": "#00437C",
        pc: {
          "dark-gray": "#979797",
          "light-gray": "#d8d8d8",
          teal: "#36ccbe",
          "sky-blue": "#e9edf2",
          "navy-blue": "#00437c",
          "dark-blue-banner": "#032b56",
          "night-sky": "#28445b",
          "border-color": "#cdd8e2",
          "header-divider": "#E3E3E3",
          "banner-blue": "#104378",
          "filter-sidebar": "#F9FAFB"
        }
      },
      borderRadius: {
        "21px": "21px",
        "50px": "50px",
        "20px": "20px",
        5: "5px"
      },
      borderWidth: {
        3: "3px",
        13: "13px"
      },
      fontSize: {
        "26px": "26px"
      },
      height: {
        "50px": "50px",
        "43px": "43px",
        "10px": "10px",
        "14px": "14px",
        "31px": "31px"
      },
      width: {
        "43px": "43px",
        "10px": "10px",
        "14px": "14px",
        "31px": "31px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ]
};
