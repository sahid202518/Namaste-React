import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

/*const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World By React!"
);
console.log(heading); // object 
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "Sahid Afridi"),
    React.createElement("h2", { key: "h2" }, "I Am H2 Tag"),
  ])
);*/
// React Element
const titleElement = (
  <h1 className="head" tabIndex="5">
    Namaste React titleElement!
  </h1>
);
// Recat Component
const TitleComponent = () => (
  <h1 className="head" tabIndex="5">
    Namaste React TitleComponent!
  </h1>
);

//Component Composition
const HeadingComponent = () => (
  <div id="container">
    {titleElement}
    <TitleComponent />
    <h1 className="heading">Namaste Recat Functional Component</h1>
  </div>
);

const root = createRoot(document.getElementById("root"));
//way to render a recat element
//root.render(heading);
//way to render a recat funtional component
root.render(<HeadingComponent />);
