import React from "react";

const person = (props) => {
  return (
    <>
      <p onClick={props.click}>
        my name is {props.name} and i am {props.pop} <p>{props.children}</p>
      </p>
      <input type="text" onChange={props.Change} />
    </>
  );
};
export default person;
