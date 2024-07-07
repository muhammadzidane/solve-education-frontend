import { render } from "@testing-library/react";

import { DashboardDetailLayout } from "@/components";

jest.mock("@/components/Layouts/DashboardDetailLayout/components", () => ({
  Navbar: () => <div data-testid="navbar">Navbar Mock</div>,
  Footer: () => <div data-testid="footer">Footer Mock</div>,
}));

describe("DashboardDetailLayout", () => {
  it("should render children correctly", () => {
    const { getByTestId, getByText } = render(
      <DashboardDetailLayout>
        <div data-testid="child">Child Component</div>
      </DashboardDetailLayout>
    );

    expect(getByTestId("navbar")).toBeInTheDocument();
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(getByTestId("child")).toBeInTheDocument();
    expect(getByText("Navbar Mock")).toBeInTheDocument();
    expect(getByText("Footer Mock")).toBeInTheDocument();
    expect(getByText("Child Component")).toBeInTheDocument();
  });
});
