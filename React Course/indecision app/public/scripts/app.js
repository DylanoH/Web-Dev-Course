"use strict";

console.log("App.js is running!");

//JSX javascripts xml

// function getOptions(options) {
//   if (options.length > 0) {
//     // for (var i = 0; i < options.length; i++) {
//     //   return <p>Here are your options{options}</p>
//     // }
//
//     return <p>Here are your options: </p>
//   }
//   else {
//     return <p>No options avaible</p>
//   }
// }

var app = {
  title: "Indecision App",
  subtitle: "Let the tech make the decisions... ",
  options: ["One", "Two", "Three"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options: " : "No options avaible"
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var user = {
  name: "Dylano",
  age: 20,
  location: "Venlo"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  React.createElement(
    "p",
    null,
    user.age && user.age >= 18 && "Age: " + user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
