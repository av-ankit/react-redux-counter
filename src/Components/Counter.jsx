import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
const Counter = () => {
  const state = useSelector((state) => state.value);
  return (
    <div>
      {/* counter comes here */}
      <Badge variant="primary">{state}</Badge>
    </div>
  );
};

export default Counter;
