import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting a Checkbox", () => {
    const {getByLabelText} = render(<Checkbox />)
    const checkbox = getByLabelText(/Not Checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);    
});