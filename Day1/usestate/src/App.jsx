import { useState } from "react";


function App() {

  let [value, setValue] = useState(7);
  const addValue = () => {
    console.log("Value Added");
    setValue(value + 1);
  }
  return (
    <>
      <h1>Native Code </h1>
      <h3>Counter : {value} </h3>
      <button onClick={addValue}>Increase </button>
      <button onClick={() => {
        console.log("Value removed");
        value <= 0 ? "" : setValue(value - 1);
      }}>Decrease</button>
    </>
  )
}

export default App
