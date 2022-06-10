import React from "react";
import { render } from "react-dom";

const App = () => {
  return <div>Some stuff</div>;
};

render(React.createElement(App), document.getElementById("root"));
