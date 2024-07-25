import { useState } from "react";

export default function Pole() {
  const [count, SetCount] = useState(0);

  const handleClick = () => {
    SetCount(count + 1);
  };

const handleReduce=() => {
    const newCount = count - 1;
    SetCount(newCount);
}
  return (





    <div style={{ border: "2px solid green ", background: "white" }}>
      <h2>Multiple Pole: {count}</h2>
      <button onClick={handleClick}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
