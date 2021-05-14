import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { decrementCounter } from "./../redux/actions/action";
import { useDispatch } from "react-redux";

const Decrementor = () => {
  const [decrementValue, setdecrementValue] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setdecrementValue(+e.target.value);
  };
  return (
    <div>
      <Button
        variant="outline-warning"
        onClick={() => dispatch(decrementCounter(decrementValue))}
      >
        Decrement : {decrementValue}
      </Button>
      <br />
      <input type="range" value={decrementValue} onChange={handleChange} />
      <br />
      <label>Select decrement value from above</label>
    </div>
  );
};

export default Decrementor;
