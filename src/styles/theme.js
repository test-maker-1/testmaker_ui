const colors = {
  snow: "#FFFFFF",
  // primary
  blue: "#0B70FD",
  skyBlue: "#ECF2FE",

  // gray scale
  white: "#FAFAFA",
  ivory: "#F1F2F4",
  ghostGray: "#EBEDF1",
  lightGray: "#CFD3DB",
  gray: "#B7BDCB",
  deepGray: "#8A929E",
  bodyGray: "#515966",
  darkGray: "#363D4A",
  black: "#1B1C1F",
  lightblue: "#F1F6FF",
  // warning
  alert: "#ff5146",
};

const fontSizes = {
  // px
  xxs: 1.2,
  xs: 1.4,
  sm: 1.5,
  md: 1.6,
  lg: 1.8,
  xl: 2.0,
  xxl: 2.2,
  extra: 2.4,
};

const paddings = {
  main: 2,
};

const widths = {
  main: 500,
};

const heights = {
  header: 56,
  bottomBtn: 64,
  bottomReply: 68,
};

const zIndex = {
  header: 100,
  drawer: 100,
  feed: 0,
  alert: 150,
  tag: 90,
  upImg: 2,
  mention: 1,
};

const theme = { colors, fontSizes, widths, heights, paddings, zIndex };

export default theme;
