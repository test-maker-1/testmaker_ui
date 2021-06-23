import React from "react";
import Lottie from "react-lottie";

const LottieImg = ({ lottieFile }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
  };

  return <Lottie options={defaultOptions} />;
};

export default LottieImg;
