// scrollable: boolean;
export const handleScroll = (scrollable) => {
  const body = document.querySelector("body");
  const [overflowStyle, touchActionStyle] = scrollable
    ? ["auto", "auto"]
    : ["hidden", "none"];

  body.style.overflowY = overflowStyle;
  body.style.touchAction = touchActionStyle;
};
