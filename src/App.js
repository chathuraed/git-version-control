import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <Card />
      <Input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <Button
        onClick={() => {
          console.log("clicked", name);
        }}
        title="Click Me"
      />
    </div>
  );
}

export default App;
