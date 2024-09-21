import { useState } from "react";
import DisplayButtons from "./components/DisplayButtons";
import DisplayResult from "./components/DisplayResult";

const App = () => {
  const [display, setDisplay] = useState("")

  const handleClick = (e) => {
    const clickValue = e.target.name
    setDisplay(display + clickValue)
  }

  const clear = () => {
    setDisplay("")
  }

  const backSpace = () => {
    setDisplay(display.slice(0, -1))
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <DisplayResult display={display}/>
        <DisplayButtons handleClick={handleClick} clear={clear} backSpace={backSpace}/>
      </div>
    </div>
  );
}

export default App;
