import React from "react";
import { useState } from "react";
const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is : {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Home;
