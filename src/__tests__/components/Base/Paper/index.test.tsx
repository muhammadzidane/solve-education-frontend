import React from "react";

import { render } from "@testing-library/react";

import { Paper } from "@/components";

describe("Paper Component", () => {
  it("should render with default top border", () => {
    const { container } = render(<Paper data-testid="paper" />);
    expect(container.firstChild).toHaveStyle("border-top: 3px solid #03A9F4");
    expect(container.firstChild).toHaveStyle("border-radius: 10px");
    expect(container.firstChild).toHaveStyle("padding: 6px 10px");
  });

  it("should render with bottom border when borderPosition is bottom", () => {
    const { container } = render(
      <Paper borderPosition="bottom" data-testid="paper" />
    );
    expect(container.firstChild).toHaveStyle(
      "border-bottom: 3px solid #03A9F4"
    );
  });

  it("should render with left border when borderPosition is left", () => {
    const { container } = render(
      <Paper borderPosition="left" data-testid="paper" />
    );
    expect(container.firstChild).toHaveStyle("border-left: 3px solid #03A9F4");
  });

  it("should render with right border when borderPosition is right", () => {
    const { container } = render(
      <Paper borderPosition="right" data-testid="paper" />
    );
    expect(container.firstChild).toHaveStyle("border-right: 3px solid #03A9F4");
  });
});
