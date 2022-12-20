import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";


/*
function AppTwo()
{
    return <h1>This is the second app</h1>;
}
*/

//Array Destructuring
const checklist = ["boots", "tent", "headlamp"];
console.log(checklist);

const [first,,] = ["boots", "tent", "headlamp"];
console.log(first);

const [,second,] = ["boots", "tent", "headlamp"];
console.log(second);

const [,,third] = ["boots", "tent", "headlamp"];
console.log(third);

//Configuring React-Router
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);

/*
<React.Fragment>
    <App />
    <AppTwo />
</React.Fragment>
*/

/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    React.createElement(
        "h1", 
        { style: { color: "blue" } }, 
        "Hey everyone!"
    ),
); */

/*
ReactDOM.render(
    React.createElement(
        "ul",
        null,
        React.createElement("li", null, "First Element"),
        React.createElement("li", null, "Second Element"),
        React.createElement("li", null, "Third Element")
    ),
    document.getElementById("root")
);
*/