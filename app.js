// const heading = React.createElement('h1', 
//     {id: "heading", abc: "xyz"}, 
//     "Hellow World! from React!"
// );


/**
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I am child</h1>
 *          <h2>I am child</h2>
 *      </div>
 *      <div id="child">
 *          <h1>I am child</h1>
 *          <h2>I am child</h2>
 *      </div>
 * 
 * </div>
 */

const heading = React.createElement(
  "div",
  { id: "parent" },
  [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am child"),
    React.createElement("h2", {}, "I am child 2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am child"),
    React.createElement("h2", {}, "I am child 2"),
  ])
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);