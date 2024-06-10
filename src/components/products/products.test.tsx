import React from "react";
import { render, screen } from "@testing-library/react";
import useApiCall from "utils/hooks/api-call";

import { Products } from "./products";

jest.mock("utils/hooks/api-call");

describe("Products", () => {
  it("should...", () => {
    (useApiCall as jest.Mock).mockReturnValue({
      data: {
        products: [
          {
            brand: "ab",
            description: "this is ab",
            id: 0,
            images: ["skabe"],
            title: "this is title 1",
            price: 200,
            rating: 8.0
          },
          {
            brand: "cd",
            description: "this is cd",
            id: 1,
            images: ["ohiasd"],
            title: "this is title 2",
            price: 900,
            rating: 9.0
          }
        ]
      }
    });

    render(<Products />);

    const des1 = screen.getByText(/this is ab/);
    const des2 = screen.getByText(/this is cd/);
    expect(des1).toBeInTheDocument();
    expect(des2).toBeInTheDocument();
  });

  it("should show error if api fails", () => {
    (useApiCall as jest.Mock).mockReturnValue({
      data: {
        products: []
      },
      error: true
    });

    render(<Products />);
    const par = screen.getByText("The api call has failed");
    expect(par).toBeInTheDocument();
  });

  it("should the message saying data is not available when the data is an empty array", () => {
    (useApiCall as jest.Mock).mockReturnValue({
      data: {
        products: []
      },
      error: false
    });
    render(<Products />);

    const message = screen.getByText("Data is not available");
    expect(message).toBeInTheDocument();
    const par = screen.queryByText("The api call has failed");
    expect(par).not.toBeInTheDocument();
  });
});
