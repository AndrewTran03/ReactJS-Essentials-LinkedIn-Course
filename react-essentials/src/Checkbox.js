import React, { useReducer } from "react";

export function Checkbox()
{
    const [checked, toggleButton] = useReducer(
        (checked) => !checked,
        false
    );

    return (
        <>
            <label htmlFor="checkbox">
                {checked ? "Checked" : "Not Checked"}
            </label>
            <input id="checkbox" type="checkbox" value={checked} onChange={toggleButton} />
        </>  
    );
}