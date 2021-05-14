import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { incrementCounter } from "./../redux/actions/action";
import { useDispatch } from "react-redux";
const Incrementor = () => {
  const [incrementValue, setincrementValue] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setincrementValue(+e.target.value);
  };
  return (
    <div>
      <label>Select increment value from below</label>
      <br />
      <input type="range" value={incrementValue} onChange={handleChange} />
      <br />
      <Button
        variant="outline-success"
        onClick={() => dispatch(incrementCounter(incrementValue))}
      >
        Increment : {incrementValue}
      </Button>
    </div>
  );
};

export default Incrementor;
