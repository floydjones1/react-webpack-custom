import { render } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders", () => {
    render(<Button text="hello" onClick={() => {}} />);
  });
});
