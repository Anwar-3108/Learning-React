const h1 = React.createElement("h1", { id: "heading1" }, "Heading 1");
const h2 = React.createElement("h2", { id: "heading2" }, "Heading 2");

const container = React.createElement("div", { className: "container" }, [
  h1,
  h2,
]);

console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
