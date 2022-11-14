import React from "react";
import ReactDom from "react-dom";

const name = "Angela";
const name1 = "Yu";
const luckyNo = "7";
const year = new Date().getFullYear();

ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      Hello {name + " " + name1} {name1}!
    </h1>
    <p>Created by Alase Waris Ayomide</p>
    <p>Copyright {year}</p>
    <div>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.avxhtQqr5FoubGjq4sIXugHaEo&pid=Api&P=0"
        alt="Girl in a jacket"
        width="500"
        height="600"
      ></img>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.RiNmH5AIoZwVGvB835DNuAHaE8&pid=Api&P=0"
        alt="Girl in a jacket"
        width="500"
        height="600"
      ></img>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.avxhtQqr5FoubGjq4sIXugHaEo&pid=Api&P=0"
        alt="Girl in a jacket"
        width="500"
        height="600"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
