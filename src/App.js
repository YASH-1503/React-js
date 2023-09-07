// import logo from "./logo.svg";
// import Person from "./components/Person";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       vlnfubvoe
//       <Person name="max" pop="bad">
//         this is a propschiilderren in person tg
//       </Person>
//       <Person name="yash" pop="out of bound" />
//       <Person name="jadav" pop="average" />
//     </div>
//   );
// }

// export default App;

import React, { Component, useState } from "react";
import Person from "./components/Person";
import "./App.css";

const App = (props) => {
  const [personstate, setpersonstate] = useState({
    Person: [
      { name: "yash", pop: "out of bound" },
      { name: "max", pop: "bad" },
      { name: "john", pop: "cascade" },
    ],
  });

  const switchnamehandler = (newname) => {
    //console.log("button clicked");
    // this.setState(
    //   { Person: [...this.state.Person].reverse() },
    //   console.log("this")
    // );
    //this is to swap 1 and 3 sentence
    setpersonstate({
      Person: [
        { name: newname, pop: "out of bound" },
        { name: "max", pop: "bad" },
        { name: "jahon", pop: "ouwevebt of dd" },
      ],
    });
  };
  inputnamehandler = (event) => {
    setpersonstate({
      Person: [
        { name: "yash", pop: "out of bound" },
        { name: event.target.value, pop: "bad" },
        { name: "jahon", pop: "ouwevebt of dd" },
      ],
    });
  };

  {
    return (
      <div className="App">
        <h1>Hello this is react learning season!!</h1>
        <button onClick={switchnamehandler.bind(this, "rajesh")}>
          switch button
        </button>
        <Person
          name={personstate.Person[0].name}
          pop={personstate.Person[0].pop}
        />
        <Person
          name={personstate.Person[1].name}
          pop={personstate.Person[1].pop}
          this
          is
          outside
          click={switchnamehandler.bind(this, "umesh")} //we can also sent method(switchnamehandler)as props
          change={inputnamehandler}
        ></Person>
        <Person
          name={personstate.Person[2].name}
          pop={personstate.Person[2].pop}
        ></Person>
      </div>
    );
  }
};

export default App;
