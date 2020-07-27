const theme = {
  colors: {
    primary: `linear-gradient(145deg, rgba(61,88,201,1) 0%, rgba(111,45,200,1) 100%)`,
    secondary: "#3d58c9",
    advance: "#373737",
    strong: "#595959",
    mild: "#919191",
    light: "#DDDDDD",
  },

  size: {
    smallest: "25em", //275px
    smaller: "31.25em", //500px
    small: "37.5em", //600px
    medium: "56.25em", //900px
    large: "80em", //1300px
    larger: "90em", //1300px
    largest: "97em", //1500px
  },

  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    smaller: "only screen and (max-width: 31.25em)",
    small: "only screen and (max-width: 37.5em)",
    medium: "only screen and (max-width: 56.25em)",
    large: "only screen and (max-width: 80em)",
    larger: "only screen and (max-width: 90em)",
    largest: "only screen and (max-width: 97em)",
  },
}

export default theme
