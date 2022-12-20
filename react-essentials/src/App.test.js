import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("Renders an H1", () => {
    render(<App />);
    const h1 = screen.getByText(/Hello React Testing Library/);
    expect(h1).toHaveTextContent("Hello React Testing Library!!!");
}); 
