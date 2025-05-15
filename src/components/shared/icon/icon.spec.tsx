import { render, screen } from "@testing-library/react";

import { Icon } from "./icon";

describe("<Icon />", () => {
  it("should render an image", () => {
    render(<Icon name="404"/>);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
