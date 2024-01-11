import React from "react";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import JsxRenderer from "../components/JsxRenderer";
import App from "../App";

afterEach(cleanup);

describe("JsxRenderer", () => {
  it("renders the provided JSX string", () => {
    const jsxString = "<div>Test content</div>";
    render(<JsxRenderer jsxString={jsxString} scale={1} />);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies the correct scale", async () => {
    const jsxString = "<div>Test content</div>";
    const scale = 0.5;
    const { container } = render(
      <JsxRenderer jsxString={jsxString} scale={scale} />
    );
    await waitFor(() => {
      const renderedDiv = container.firstChild.firstChild.firstChild;
      expect(renderedDiv).toHaveStyle(`transform: scale(${scale})`);
    });
  });
});

describe("App", () => {
  test("renders Test String", async () => {
    render(<App />);
    const linkElement = await screen.findByText(/Test String/i);
    expect(linkElement).toBeInTheDocument();
  });
});
