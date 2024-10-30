import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const plusNumber = () => {
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={plusNumber}>+1</button>
    </>
  );
}
