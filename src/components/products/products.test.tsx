import React from "react";
import { render, screen } from "@testing-library/react";
import useApiCall from "utils/hooks/api-call";

import { Products } from "./products";

jest.mock("utils/hooks/api-call");

describe("Products", () => {
  it("should...", () => {
    (useApiCall as jest.Mock).mockReturnValue({
      data: {
        products: []
      }
    });

    render(<Products />);

    screen.debug();
  });
});
