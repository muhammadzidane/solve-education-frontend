import React from "react";

import { ButtonProps } from "@mui/material";
import { render } from "@testing-library/react";

import { ButtonQuestion } from "@/components";

describe("ButtonQuestion Component", () => {
  const renderComponent = (props: ButtonProps = {}) =>
    render(<ButtonQuestion {...props}>Test Button</ButtonQuestion>);

  it("should render children correctly", () => {
    const { getByText } = renderComponent();
    expect(getByText("Test Button")).toBeInTheDocument();
  });

  it("should apply default styles correctly", () => {
    const { getByRole } = renderComponent();
    const button = getByRole("button");

    expect(button).toHaveStyle({
      "justify-content": "start",
      "border-radius": "8px", // 2 * 8px (MUI uses 8px as the base unit)
      height: "56px",
    });

    expect(button).toHaveStyle({ width: "100%" });
  });

  it("should apply custom styles correctly", () => {
    const customStyles = {
      backgroundColor: "#FFFFFF",
    };

    const { getByRole } = renderComponent({ sx: customStyles });
    const button = getByRole("button");

    expect(button).toHaveStyle({
      "background-color": "rgba(25, 118, 210, 0.04)",
    });
  });

  it("should apply typography styles correctly", () => {
    const { getByText } = renderComponent();
    const typography = getByText("Test Button");

    expect(typography).toHaveStyle({
      "text-transform": "capitalize",
      "font-weight": "600",
      "font-size": "14px",
    });
  });
});
