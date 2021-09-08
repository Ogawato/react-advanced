import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { ChildArea } from "./ChildArea";


function App() {
  console.log("App")
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const onClickCountup = () => {
    setCount(count + 1)
  }

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open)


  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />


    </div >
  );
}

export default App;
