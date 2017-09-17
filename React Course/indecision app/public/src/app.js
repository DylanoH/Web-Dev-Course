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

const app = {
  title: "Indecision App",
  subtitle: "Let the tech make the decisions... ",
  options: ["One", "Two", "Three"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options: " : "No options avaible"}</p>
    <ul>
      <li>Item one</li>
      <li>Item two</li>
    </ul>
  </div>
);

const user = {
  name: "Dylano",
  age: 20,
  location: "Venlo"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const template2 = (
  <div>
    <h1>{user.name ? user.name: "Anonymous"}</h1>
    <p>{(user.age && user.age >= 18) && "Age: " + user.age}</p>
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
