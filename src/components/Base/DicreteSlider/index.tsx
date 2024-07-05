import React from "react";

import { SliderProps, Slider } from "@mui/material";

const DicreteSlider: React.FC<SliderProps> = ({ ...rest }) => {
  return (
    <Slider aria-label="Temperature" valueLabelDisplay="off" marks {...rest} />
  );
};

export default DicreteSlider;
