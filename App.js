

/**
 * <div id="parent">
 *     <div id="child">
 *           <h1> I'm an h1 tag. </h1>
 *     </div>
 * </div>
 *
 *
 *
 */
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I'm an h1 tag."),
      React.createElement("h2", {}, "I'm an h2 tag."),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm an h1 tag."),
      React.createElement("h2", {}, "I'm an h2 tag."),
    ]),
  ]);
  //JSX   It makes our life easy when we have to create tags.
  
  // const heading = React.createElement(
  //   "h1",
  //   { id: "heading", xyz: "abc" },
  //   "Hello World from React!"
  // );
  
  // console.log(heading); // It will return an object to you.
  
  console.log(parent);
  
  // const root = ReactDOM.createRoot(document.getElementById("header"));
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // root.render(heading);
  root.render(parent);
  
  
  
  