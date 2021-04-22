export const handleScroll = (scrollable) => {
  const body = document.querySelector("body");
  const overflowStyle = scrollable ? "auto" : "hidden";

  body.style.overflowY = overflowStyle;
};
