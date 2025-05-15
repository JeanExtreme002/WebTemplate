import { Theme } from "@radix-ui/themes";
import { render } from "@testing-library/react";

import { NavBar } from "./navbar";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe("<NavBar />", () => {
  it("should render with the logo and a tab nav for the website features", () => {
    const { container } = render(
      <Theme>
        <NavBar />
      </Theme>
    );
    expect(container.querySelector("nav")).toBeInTheDocument();
    expect(container.querySelectorAll("li").length).toBe(3);
  });
});
