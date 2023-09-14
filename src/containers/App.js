// export default App;
// import React, { Component, useState } from "react";
// import Person from "./components/Person";
// import "./App.css";

// const App = (props) => {
//   const [personstate, setpersonstate] = useState({
//     Person: [
//       { name: "yash", pop: "out of bound" },
//       { name: "max", pop: "bad" },
//       { name: "john", pop: "cascade" },
//     ],
//     showdata: true,
//   });

//   const switchnamehandler = (newname) => {
//     setpersonstate({
//       Person: [
//         { name: newname, pop: "out of bound" },
//         { name: "max", pop: "bad" },
//         { name: "jahon", pop: "ouwevebt of dd" },
//       ].reverse(),
//     });
//   };

//   const togglename = () => {
//     const nextdata = personstate.showdata;
//     setpersonstate({ ...personstate, showdata: !nextdata });
//   };
//   const inputnamehandler = (event) => {
//     setpersonstate({
//       Person: [
//         { name: "yash", pop: "out of bound" },
//         { name: event.target.value, pop: "bad" },
//         { name: "jahon", pop: "ouwevebt of dd" },
//       ],
//     });
//   };

//   {
//     return (
//       <div className="App">
//         <h1>Hello this is react learning season!!</h1>
//         <button onClick={switchnamehandler.bind(this, "rajesh")}>
//           switch button
//         </button>
//         <button onClick={togglename}>Button 2</button>
//         {personstate.showdata ===true ? (
//           <div>
//             <Person
//               name={personstate.Person[0].name}
//               pop={personstate.Person[0].pop}
//             />
//             <Person
//               name={personstate.Person[1].name}
//               pop={personstate.Person[1].pop}
//               this
//               is
//               outside
//               click={switchnamehandler.bind(this, "umesh")} //we can also sent method(switchnamehandler)as props
//               change={inputnamehandler}
//             ></Person>
//             <Person
//               name={personstate.Person[2].name}
//               pop={personstate.Person[2].pop}
//             ></Person>
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// };

// export default App;

import React, { Component } from "react";
import Person from "../components/Persons/Person/Person";
import "./App.css";

class App extends Component {
  state = {
    Person: [
      { id: "1", name: "yash", pop: "out of bound" },
      { id: "2", name: "max", pop: "bad" },
      { id: "3", name: "john", pop: "cascade" },
    ],
    showdata: true,
  };

  switchnamehandler = (newname) => {
    this.setState({
      Person: [
        { name: newname, pop: "out of bound" },
        { name: "max", pop: "bad" },
        { name: "jahon", pop: "ouwevebt of dd" },
      ],
    });
  };

  togglename = () => {
    const nextdata = this.state.showdata;
    this.setState({ showdata: !nextdata });
  };

  inputnamehandler = (event, id) => {
    const personindex = this.state.Person.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.Person[personindex] };
    person.name = event.target.value;
    const persons = [...this.state.Person];
    persons[personindex] = person;

    this.setState({
      Person: persons,
    });
  };
  deleteperson = (personindex) => {
    // const person = this.state.Person;
    const person = [...this.state.Person];
    person.splice(personindex, 1);
    this.setState({ Person: person });
  };

  render() {
    const style = { background: "green" };
    let persons = null;
    if (this.state.showdata) {
      persons = (
        <div>
          {this.state.Person.map((person, index) => {
            return (
              <Person
                name={person.name}
                pop={person.pop}
                click={() => this.deleteperson(index)}
                key={person.id}
                Change={(event) => this.inputnamehandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.Person[0].name}
            pop={this.state.Person[0].pop}
          /> */}
          {/* <Person
            name={this.state.Person[1].name}
            pop={this.state.Person[1].pop}
            this
            is
            outside
            click={() => this.switchnamehandler("umesh")}
            change={this.inputnamehandler}
          />
          <Person
            name={this.state.Person[2].name}
            pop={this.state.Person[2].pop}
          /> */}
        </div>
      );
      style.background = "red";
    }
    // let classess = ["red", "italic"].join(" ");
    const classess = [];
    if (this.state.Person.length == 2) {
      classess.push("red");
    }
    if (this.state.Person.length == 1) {
      classess.push("italic");
    }
    return (
      <div className="App">
        <h1 className={classess.join(" ")}>
          Hello this is react learning season!!
        </h1>
        <button onClick={() => this.switchnamehandler("rajesh")}>
          switch button
        </button>
        <button style={style} onClick={this.togglename}>
          Button 2
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
